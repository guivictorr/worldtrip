import { Flex, Text, Image } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      justify="center"
      flexDir="column"
      bgImage="url('/images/banner.png')"
      bgSize="cover"
      h={['40', '335']}
      px={['4', '8', '140']}
      color="gray.50"
      position="relative"
    >
      <Text mb="2" fontWeight={500} fontSize={['sm', '4xl']}>
        5 Continentes, <br />
        infinitas possibilidades.
      </Text>
      <Text fontSize={['xs', 'xl']}>
        Chegou a hora de tirar do papel a viagem que <br /> você sempre sonhou.
      </Text>
      <Image
        display={['none', 'none', 'none', 'none', 'block']}
        src="/airplane.svg"
        width={416}
        height={270}
        alt="Um avião cartoon com a parte superior amarela e inferior branca"
        style={{ position: 'absolute', right: 140, bottom: -40 }}
      />
    </Flex>
  );
}
