import {
  Flex,
  ListIcon,
  Text,
  ListItem as ChakraListItem,
} from '@chakra-ui/react';
import { VscCircleFilled } from 'react-icons/vsc';

type ListItemProps = {
  children: React.ReactNode;
};

export function ListItem({ children }: ListItemProps) {
  return (
    <ChakraListItem>
      <Flex align="center" justify="center">
        <ListIcon as={VscCircleFilled} color="yellow.400" />
        <Text fontSize="lg">{children}</Text>
      </Flex>
    </ChakraListItem>
  );
}
