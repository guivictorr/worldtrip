import { Center, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';

export function Header() {
  const isWide = useBreakpointValue({
    base: false,
    sm: true,
  });

  const dimensions = {
    width: isWide ? 184 : 80,
    height: isWide ? 46 : 20,
  };

  return (
    <Center py={['4', '7']}>
      <Image src="/logo.svg" alt="World trip" {...dimensions} />
    </Center>
  );
}
