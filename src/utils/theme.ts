import {
  DarkTheme as Dark,
  DefaultTheme as Default,
} from '@react-navigation/native';
import { slate } from 'tailwindcss/colors';

import type { Theme } from '@react-navigation/native';

export const DarkTheme: Theme = {
  ...Dark,
  colors: {
    ...Dark.colors,
    card: slate[900],
  },
};

export const DefaultTheme: Theme = {
  ...Default,
};
