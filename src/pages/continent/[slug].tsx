import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { Header } from 'components/Header';

export default function Continent() {
  return (
    <>
      <Header />
      <Flex
        justify="center"
        align="center"
        h="150"
        bgImage="url('/images/banner.png')"
        bgSize="cover"
      >
        <Text fontWeight={600} fontSize="3xl" color="gray.50">
          Europa
        </Text>
      </Flex>
      <Box px="4" mt="6">
        <Text fontSize="sm" textAlign="justify" mb="4">
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Flex gap="12" mb="9">
          <Flex flexDir="column" align="flex-start">
            <Text fontWeight={600} fontSize="2xl" color="yellow.400">
              50
            </Text>
            <Text fontWeight={400} fontSize="lg">
              países
            </Text>
          </Flex>
          <Flex flexDir="column" align="flex-start">
            <Text fontWeight={600} fontSize="2xl" color="yellow.400">
              60
            </Text>
            <Text fontWeight={400} fontSize="lg">
              linguas
            </Text>
          </Flex>
          <Flex flexDir="column" align="flex-start">
            <Text fontWeight={600} fontSize="2xl" color="yellow.400">
              24
            </Text>
            <Text fontWeight={400} fontSize="lg">
              cidades +100
            </Text>
          </Flex>
        </Flex>

        <Text fontSize="2xl" fontWeight={500}>
          Cidades +100
        </Text>

        <Flex px="45" flexDir="column" mt="4">
          <Image
            src="/images/banner.png"
            borderTopLeftRadius={4}
            borderTopRightRadius={4}
            alt="Image"
            height={174}
          />
          <Flex
            bg="white"
            borderBottomRightRadius={4}
            borderBottomLeftRadius={4}
            borderColor="yellow.200"
            align="center"
            justify="space-between"
            borderWidth={1}
            p="6"
          >
            <VStack spacing={3} align="flex-start">
              <Text fontWeight={600} fontSize="xl">
                Londres
              </Text>
              <Text color="gray.400" fontSize="md">
                Reino Unido
              </Text>
            </VStack>
            <Image
              src="/images/reino-unido.png"
              alt="Reino Unido"
              w={30}
              h={30}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
