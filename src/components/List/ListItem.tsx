import {
  Flex,
  ListIcon,
  Text,
  ListItem as ChakraListItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { VscCircleFilled } from 'react-icons/vsc';

type ListItemProps = {
  children: React.ReactNode;
  icon: IconType;
};

export function ListItem({ children, icon }: ListItemProps) {
  const isWide = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
  });

  return (
    <ChakraListItem>
      <Flex flexDir={['row', 'row', 'column']} align="center" justify="center">
        <ListIcon
          as={isWide ? icon : VscCircleFilled}
          color="yellow.400"
          fontSize={['xl', 'xl', '7xl']}
          mb={['0', '0', '4']}
        />
        <Text fontSize={['lg', 'lg', '2xl']} fontWeight={['500', '500', '600']}>
          {children}
        </Text>
      </Flex>
    </ChakraListItem>
  );
}
