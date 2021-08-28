import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    white: {
      300: '#DADADA',
      50: '#F5F8FA',
    },
    yellow: {
      900: '#FFBA08',
    },
    gray: {
      900: '#47585B',
      800: '#999999',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    textCard: 'Barlow',
  },
  styles: {
    global: {
      body: {
        bg: 'white.50',
        color: 'gray.900',
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
      },
    },
  },
})
