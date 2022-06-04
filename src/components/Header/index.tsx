import { Center, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { IoIosArrowBack } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
  const isWide = useBreakpointValue({
    base: false,
    sm: true,
  });

  const router = useRouter();

  const dimensions = {
    width: isWide ? 184 : 80,
    height: isWide ? 46 : 20,
  };

  return (
    <Center py={['4', '7']} px={['4', '8']} position="relative">
      {router.pathname !== '/' && (
        <Link href="/" passHref>
          <IconButton
            display="flex"
            alignItems="center"
            justifyContent="center"
            variant="unstyled"
            icon={<Icon as={IoIosArrowBack} fontSize="lg" />}
            aria-label="Voltar"
            position="absolute"
            left="6"
          />
        </Link>
      )}
      <Image src="/logo.svg" alt="World trip" {...dimensions} />
    </Center>
  );
}
