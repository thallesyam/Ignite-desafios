import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

type ImageProps = {
  description: string;
  id: string;
  title: string;
  ts: number;
  url: string;
};

type GetImagesProps = {
  after: string;
  data: ImageProps[];
};

export default function Home(): JSX.Element {
  async function getImages({ pageParam = null }): Promise<GetImagesProps> {
    const { data } = await api.get('/api/images', {
      params: {
        after: pageParam,
      },
    });
    return data;
  }

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery('images', getImages, {
    getNextPageParam: lastpage => lastpage?.after,
  });

  const formattedData = useMemo(() => {
    const formatted = data?.pages.flatMap(page => {
      return page.data.flat();
    });

    return formatted;
  }, [data]);

  if (isLoading && !isError) {
    return <Loading />;
  }

  if (!isLoading && isError) {
    return <Error />;
  }

  console.log(formattedData);

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {hasNextPage && (
          <Button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            mt={10}
          >
            Carregar mais
          </Button>
        )}
      </Box>
    </>
  );
}
