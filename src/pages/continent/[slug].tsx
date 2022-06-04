import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import { Header } from 'components/Header';

export default function Continent() {
  return (
    <>
      <Header />
      <Flex
        justify={['center', 'center', 'flex-start']}
        align={['center', 'center', 'flex-end']}
        px="140"
        py="60px"
        h={['150', '500']}
        bgImage="url('/images/banner.png')"
        bgSize="cover"
      >
        <Text fontWeight={600} fontSize={['3xl', '5xl']} color="gray.50">
          Europa
        </Text>
      </Flex>
      <Box px={['0', '0', '140']}>
        <Flex
          flexDir={['column', 'column', 'row']}
          px="4"
          mt="6"
          gap={['4', '16']}
          my={['6', '20']}
          justify="space-between"
          align={['flex-start', 'flex-start', 'center']}
        >
          <Text fontSize={['sm', '2xl']} textAlign="justify" mb="4">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <Flex gap={['12', '16']} mb="9">
            <Flex flexDir="column" align={['flex-start', 'center']}>
              <Text
                fontWeight={600}
                fontSize={['2xl', '5xl']}
                color="yellow.400"
              >
                50
              </Text>
              <Text fontWeight={[400, 600]} fontSize={['lg', 'lg', 'xl']}>
                países
              </Text>
            </Flex>
            <Flex flexDir="column" align={['flex-start', 'center']}>
              <Text
                fontWeight={600}
                fontSize={['2xl', '5xl']}
                color="yellow.400"
              >
                60
              </Text>
              <Text fontWeight={[400, 600]} fontSize={['lg', 'lg', 'xl']}>
                linguas
              </Text>
            </Flex>
            <Flex flexDir="column" align={['flex-start', 'center']}>
              <Text
                fontWeight={600}
                fontSize={['2xl', '5xl']}
                color="yellow.400"
              >
                24
              </Text>
              <Text fontWeight={[400, 600]} fontSize={['lg', 'lg', 'xl']}>
                cidades +100
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Text ml={['5', '5', '0']} fontSize={['2xl', '4xl']} fontWeight={500}>
          Cidades +100
        </Text>

        <Flex
          mx={['0', '12', '0']}
          flexDir={['column', 'column', 'row']}
          gap="10"
          pb="6"
        >
          <Flex
            px={['45', '0']}
            flexDir="column"
            mt={['4', '10']}
            width={['100%', '256px']}
            height="280px"
          >
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
          <Flex
            px={['45', '0']}
            flexDir="column"
            mt={['4', '10']}
            width={['100%', '256px']}
            height="280px"
          >
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
        </Flex>
      </Box>
    </>
  );
}
