import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import {
  mode,
  StyleFunctionProps,
} from '@chakra-ui/theme-tools';

import { ButtonStyles as Button } from './components/buttonStyles';
// import { BodyStyles as Styles } from './components/bodyStyles';
// import { Card } from './components/cardStyles';
// import { Box } from './components/boxStyles';
import { Grid } from './components/gridStyles';

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
};
/* Pallete 1 */
const black = '#000000';

const lightDark = '#121318';

const white = '#ffffff';
const whitish = '#F9FAFB';
const brownGold = '#996515';
const oldGold = '#da9100';
const silver = '#bfbfbf';
// const manatee = '#96939b';
// const dodgerBlue = '#1e90ff';
const mangoTango = '#fc814a';
const denim = '#1071E5';
const venetianRed = '#C90612ff';
const background = { _light: white, _dark: black };

// const config: ThemeConfig = {
//   initialColorMode: 'light',
//   useSystemColorMode: false,
// };

export const mologoTheme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: 'default',
        bg: mode(background._light, background._dark)(props),
      },
    }),
  },
  fonts: {
    heading: "'Roboto Serif', serif, 'Open Sans', sans-serif",
    body: "'montserrat', sans-serif",
  },
  colors: {
    primary: oldGold,
    secondary: brownGold,
    tertiary: silver,
    cardColor: lightDark,
    warning: mangoTango,
    danger: venetianRed,
    darken: black,
  },
  breakpoints,
  components: {
    Button,
    // Styles,
    // Card,
    // Box,
    // Grid,
  },
});
