import { ColorSchemeName } from 'react-native/types';

export const color = {
  dark: {
    backgroundColor: '#212121', // light grey
    primaryColor: '#DE3848', // bright blue
    secondaryColor: '#dcdcdc', // dark grey
    textColor: '#f8f9fa', // off-white
    white: '#fff'
  },
  light: {
    backgroundColor: '#f8f9fa', // grey
    primaryColor: '#000080', // blue
    secondaryColor: '#6c757d', // off-white
    textColor: '#343a40', // dark grey
    white: '#fff'
  },

};

export type Palette = (typeof color)[keyof typeof color];

export type Theme = ColorSchemeName | keyof typeof color;
