import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.500',
      },
    },
  },
  colors: {
    yellow: {
      400: '#FFBA08',
    },
    gray: {
      50: '#F5F8FA',
      500: '#47585B',
    },
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
    mono: 'Poppins, sans-serif',
  },
});
