import { Box, Divider, Flex, Text, Center } from '@chakra-ui/react';
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
    </>
  );
};

export default Home;
