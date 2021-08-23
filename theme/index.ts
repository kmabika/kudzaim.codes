import { DefaultTheme } from 'styled-components';
import COLOUR from "styles";


const zIndex = {
  slider: 100,
  awwwards: 200,
  menu: 1000,
  cursor: 1100,
};


export const lightTheme: DefaultTheme = {
  zIndex,
  cursor: COLOUR.blue_universe,
  text: COLOUR.blue_universe,
  background: '#FFFFFF',
};
export const darkTheme: DefaultTheme = {
  zIndex,
  cursor: COLOUR.blue_universe,
  text: COLOUR.white_dark,
  background: '#0b151c',
};
