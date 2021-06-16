import { GetStaticProps } from 'next';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Prismic from '@prismicio/client';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';

import styles from './home.module.scss';

import { FiCalendar, FiUser } from 'react-icons/fi';

import Header from '../components/Header';

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

export default function Home({ results }) {
  console.log(results);

  return (
    <>
      <Header />

      <section className={`${commonStyles.container} ${styles.postsContainer}`}>
        <div className={styles.post}>
          <h1>Como utilizar Hooks</h1>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>

          <div>
            <p>
              <FiCalendar />
              <span>15 Mar 2021</span>
            </p>
            <p>
              <FiUser />
              <span>Joseph Oliveira</span>
            </p>
          </div>
        </div>
        <div className={styles.post}>
          <h1>Como utilizar Hooks</h1>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>

          <div>
            <p>
              <FiCalendar />
              <span>15 Mar 2021</span>
            </p>
            <p>
              <FiUser />
              <span>Joseph Oliveira</span>
            </p>
          </div>
        </div>
        <div className={styles.post}>
          <h1>Como utilizar Hooks</h1>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>

          <div>
            <p>
              <FiCalendar />
              <span>15 Mar 2021</span>
            </p>
            <p>
              <FiUser />
              <span>Joseph Oliveira</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const { results } = await prismic.query(
    [Prismic.Predicates.at('document.type', 'post')],
    {}
  );

  // const posts = results.map(post => {
  //   return {
  //     id: post.id,
  //     title: post.data.title,
  //     subtitle: post.data.subtitle,
  //     author: post.data.author,
  //     createdAt: format(new Date(post.first_publication_date), 'DD MMMM YYYY', {
  //       locale: pt,
  //     }),
  //   };
  // });

  // TODO FORMAT DATE

  return {
    props: { results },
  };
};
