import { GetStaticProps } from 'next';
import { useState } from 'react';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';

import styles from './home.module.scss';

import { FiCalendar, FiUser } from 'react-icons/fi';

import Header from '../components/Header';
import Link from 'next/link';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
  dateStyle: 'medium',
};

function FormatPosts(posts: PostPagination): Post[] {
  const newPostsFormatted = posts.results.map(post => {
    return {
      uid: post.uid,
      first_publication_date: new Intl.DateTimeFormat('pt-BR', options).format(
        new Date(post.first_publication_date)
      ),
      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,
        author: post.data.author,
      },
    };
  });

  return newPostsFormatted;
}

export default function Home({ finalProps }) {
  const { results, next_page } = finalProps;

  const [posts, setPosts] = useState<Post[]>(results);
  const [nextPage, setNextPage] = useState(next_page);

  async function getMorePosts(): Promise<void> {
    if (!next_page) {
      return;
    }
    const response = await fetch(next_page);
    const nextPost = await response.json();

    const nextPostFormatted = FormatPosts(nextPost);

    setPosts([...posts, ...nextPostFormatted]);
    setNextPage(nextPost.nextPage);
  }

  return (
    <>
      <Header />

      <section className={`${commonStyles.container} ${styles.postsContainer}`}>
        {posts.map(post => (
          <Link key={post.uid} href={`/posts/${post.uid}`}>
            <a>
              <div className={styles.post}>
                <h1>{post.data.title}</h1>
                <p>{post.data.subtitle}</p>
                <div>
                  <p>
                    <FiCalendar />
                    <span>{post.first_publication_date}</span>
                  </p>
                  <p>
                    <FiUser />
                    <span>{post.data.author}</span>
                  </p>
                </div>
              </div>
            </a>
          </Link>
        ))}

        {nextPage && (
          <a className={styles.buttonGetPosts} onClick={getMorePosts}>
            Clique para exibir
          </a>
        )}
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'post')],
    {
      pageSize: 1,
    }
  );

  const posts = response.results.map(post => {
    return {
      uid: post.uid,
      first_publication_date: new Intl.DateTimeFormat('pt-BR', options).format(
        new Date(post.first_publication_date)
      ),
      data: {
        title: post.data.title as string,
        subtitle: post.data.subtitle as string,
        author: post.data.author as string,
      },
    };
  });

  const { next_page } = response;

  const finalProps = {
    next_page: next_page,
    results: posts,
  };

  return {
    props: { finalProps },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
