import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Menlo, monospace',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  colors: {
    primary: {
      '50': '#F2F2F2',
      '100': '#DBDBDB',
      '200': '#C4C4C4',
      '300': '#ADADAD',
      '400': '#969696',
      '500': '#808080',
      '600': '#666666',
      '700': '#4D4D4D',
      '800': '#333333',
      '900': '#1A1A1A',
      '1000': '#121212',
    },
  },
});

export default theme;
