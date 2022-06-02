import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Box,
  Divider,
  Flex,
  Text,
  Center,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { Header } from 'components/Header';
import { List } from 'components/List';
import { ListItem } from 'components/List/ListItem';

const Home = () => {
  return (
    <>
      <Header />
      <Flex
        justify="center"
        flexDir="column"
        bgImage="url('/images/banner.png')"
        h="40"
        px="4"
        color="gray.50"
      >
        <Text mb="2" fontWeight={500} fontSize="md">
          5 Continentes, <br />
          infinitas possibilidades.
        </Text>
        <Text fontSize="xs">
          Chegou a hora de tirar do papel a viagem que <br /> você sempre
          sonhou.
        </Text>
      </Flex>
      <Box mx="4">
        <List>
          <ListItem>vida noturna</ListItem>
          <ListItem>praia</ListItem>
          <ListItem>moderno</ListItem>
          <ListItem>clássico</ListItem>
          <ListItem>e mais...</ListItem>
        </List>

        <Center mb="6">
          <Divider w="20" bg="gray.500" h="1px" />
        </Center>

        <Text textAlign="center">
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
      </Box>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ marginTop: 20 }}
      >
        <SwiperSlide
          style={{
            backgroundImage: 'url(/images/banner.png)',
            height: 250,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <VStack color="gray.50" fontWeight={700} spacing="3">
            <Text fontSize="x-large">Europa</Text>
            <Text>o continente mais antigo</Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: 'url(/images/banner.png)',
            height: 250,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <VStack color="gray.50" fontWeight={700} spacing="3">
            <Text fontSize="x-large">America</Text>
            <Text>o continente mais novo</Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>Helo</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
