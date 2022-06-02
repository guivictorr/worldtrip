import { Flex, Text } from '@chakra-ui/react';

export function Banner() {
  return (
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
        Chegou a hora de tirar do papel a viagem que <br /> você sempre sonhou.
      </Text>
    </Flex>
  );
}
