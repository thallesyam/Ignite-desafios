import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { continents } from '../data/continents';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export const SliderComponent = () => {
  return (
    <Flex w="100%" h={["250px","450px"]} maxW="1240px" mx="auto" mb={["5","10"]}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay:4000,
        }}
        style={{width: '100%', display: 'flex',flex: '1'}}
      > 

        { continents.map(continent => (
          <SwiperSlide key={continent.id}>
            <Flex
              w="100%"
              h={['250px', '450px']}
              align="center"
              justify="center"
              direction="column"
              bgImage={`url('/${continent.image}.png')`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <Link href={`/trip/${continent.slug}`}>
                <a>
                  <Heading fontSize={["3xl","4xl","5xl"]} color="gray.100" fontWeight="bold">{continent.text}</Heading>
                  <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt={["2","4"]}>{' '}</Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        )) }
      </Swiper>
    </Flex>
  )
}