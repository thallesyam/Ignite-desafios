import { GetStaticPaths, GetStaticProps } from 'next';

import Prismic from '@prismicio/client';

import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';
import { RichText } from 'prismic-dom';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';
import Head from 'next/head';

import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';

interface Post {
  first_publication_date: string | null;
  last_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
};

export default function Post({ post }: PostProps) {
  const average_reading_time_calc = post.data.content.reduce((acc, content) => {
    const textBody = RichText.asText(content.body);
    const split = textBody.split(' ');
    const number_words = split.length;

    const result = Math.ceil(number_words / 200);
    return acc + result;
  }, 0);

  const postWithDateFormatedAndReadingTime = {
    ...post,
    first_publication_date: new Intl.DateTimeFormat('pt-BR', options).format(
      new Date(post.first_publication_date)
    ),
    last_publication_date: new Intl.DateTimeFormat('pt-BR', options).format(
      new Date(post.last_publication_date)
    ),
    data: {
      ...post.data,
      average_reading_time: average_reading_time_calc,
    },
  };

  const { data, first_publication_date, last_publication_date } =
    postWithDateFormatedAndReadingTime;

  const { author, banner, content, title, average_reading_time } = data;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <section className={styles.container}>
        <img src={banner.url} />

        <main className={commonStyles.container}>
          <h2>{title}</h2>

          <div className={styles.info}>
            <div>
              <FiCalendar />
              <p>{first_publication_date}</p>
            </div>

            <div>
              <FiUser />
              <p>{author}</p>
            </div>

            <div>
              <FiClock />
              <p>{average_reading_time} Min</p>
            </div>
          </div>

          {content.map(section => (
            <section key={section.heading} className={styles.sectionContent}>
              <h2>{section.heading}</h2>
              <div
                className={styles.content}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: RichText.asHtml(section.body),
                }}
              />
            </section>
          ))}
        </main>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query(
    [Prismic.Predicates.at('document.type', 'post')],
    {}
  );

  const paths = posts.results.map(post => {
    return {
      params: { slug: post.uid },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const prismic = getPrismicClient();
  const { id, first_publication_date, last_publication_date, data } =
    await prismic.getByUID('post', String(slug), {});

  const content = data.content.map(content => {
    return {
      heading: content.heading,
      body: [...content.body],
    };
  });

  const post = {
    id,
    first_publication_date,
    last_publication_date,
    data: {
      title: data.title,
      banner: {
        url: data.image.url,
      },
      subtitle: data.subtitle,
      author: data.author,
      content,
    },
  };

  return {
    props: { post },
  };
};
