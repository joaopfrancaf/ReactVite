import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      gray100: '#e1e1e6',
      gray300: '#c4c4cc',
      gray400: '#8d8d99',
      gray600: '#323238',
      gray700: '#29292e',
      gray800:' #202024',
      gray900: '#121214',

      green300: '#00B37E',
      green500: '#00875f',

      red500: '#F75A68',
    },
  },
});