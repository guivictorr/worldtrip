import { Box, Divider, Text, Center } from '@chakra-ui/react';
import { BiWorld, BiDrink, BiBuildingHouse } from 'react-icons/bi';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { BsBank } from 'react-icons/bs';
import { Banner } from 'components/Banner';
import { Header } from 'components/Header';
import { List } from 'components/List';
import { ListItem } from 'components/List/ListItem';
import { Swiper } from 'components/Swiper';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Box mx="4" mb={['0', '0', '12']}>
        <List>
          <ListItem icon={BiDrink}>vida noturna</ListItem>
          <ListItem icon={FaUmbrellaBeach}>praia</ListItem>
          <ListItem icon={BiBuildingHouse}>moderno</ListItem>
          <ListItem icon={BsBank}>clássico</ListItem>
          <ListItem icon={BiWorld}>e mais...</ListItem>
        </List>

        <Center mb={['6', '12']}>
          <Divider w="20" bg="gray.500" h={['1px', '2px']} />
        </Center>

        <Text textAlign="center" fontWeight={500} fontSize={['xl', '4xl']}>
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
      </Box>

      <Swiper
        slides={[
          {
            title: 'Europa',
            subtitle: 'o mais antigo',
            image: '/images/banner.png',
          },
          {
            title: 'America',
            subtitle: 'o mais antigo',
            image: '/images/banner.png',
          },
        ]}
      />
    </>
  );
};

export default Home;
