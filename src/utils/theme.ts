import {
  DarkTheme as Dark,
  DefaultTheme as Default,
} from '@react-navigation/native';
import { slate, gray } from 'tailwindcss/colors';

import type { Theme } from '@react-navigation/native';

export const DarkTheme: Theme = {
  ...Dark,
  colors: {
    ...Dark.colors,
    card: slate[900],
    background: '#0B1120',
    primary: gray[50],
    text: gray[200],
  },
};

export const DefaultTheme: Theme = {
  ...Default,
  colors: {
    ...Default.colors,
    background: slate[100],
  },
};
