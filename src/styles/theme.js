import { extendTheme } from '@chakra-ui/react';
import breakpoints from './breakpoints';
import { ButtonStyles as Button } from './components/ButtonStyles';
import { ContainerStyles as Container } from './components/ContainerStyles';
import { HeadingStyles as Heading } from './components/HeadingStyles';
import { ImageStyles as Img } from './components/ImageStyles';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#fcfcf9',
      200: '#f5f5f4',
      300: '#e2e6e3',
      400: 'rgba(205, 209, 206, 0.8)',
      500: '#4b5548',
      600: '#2b2e2b',
    },
  },
  fonts: {
    heading: 'Freight Display Pro',
    body: 'FF Bau Regular',
    medium: 'FF Bau Medium, FF Bau Regular',
  },
  styles: {
    global: {
      body: {
        bg: 'brand.200',
        color: 'black',
        fontFamily: 'body',
        fontSize: '13px',
        fontWeight: 'normal',
        lineHeight: '20px',
      },
      '::-moz-selection': {
        background: 'brand.500',
        color: 'white',
        opacity: '1',
        textShadow: 'none',
      },
      '::selection': {
        background: 'brand.500',
        color: 'white',
        opacity: '1',
        textShadow: 'none',
      },
    },
  },
  shadows: { header: '0 2px 3px -3px #808080' },
  components: {
    Button,
    Heading,

    Container,
    Img,
  },
  breakpoints: breakpoints,
});

export default theme;
