import { Center } from '@chakra-ui/react';
import Image from 'next/image';

export function Header() {
  return (
    <Center py="4">
      <Image src="/logo.svg" width={80} height={20} alt="World trip" />
    </Center>
  );
}
