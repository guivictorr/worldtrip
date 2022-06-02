import { List as ChakraList } from '@chakra-ui/react';

type ListProps = {
  children: React.ReactNode;
};

export function List({ children }: ListProps) {
  return (
    <ChakraList
      display="flex"
      flexWrap="wrap"
      my={['8', '16', '20']}
      justifyContent="center"
      gap={['8', '24']}
    >
      {children}
    </ChakraList>
  );
}
