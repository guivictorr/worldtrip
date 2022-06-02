import { Box, Divider, Flex, Text, Center } from '@chakra-ui/react';
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
      <Box mx="4">
        <List>
          <ListItem>vida noturna</ListItem>
          <ListItem>praia</ListItem>
          <ListItem>moderno</ListItem>
          <ListItem>clássico</ListItem>
          <ListItem>e mais...</ListItem>
        </List>

        <Center mb="6">
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
