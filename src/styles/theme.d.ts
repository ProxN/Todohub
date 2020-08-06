import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        dark: string;
        mid: string;
        light: string;
      };
      secondary: {
        dark: string;
        mid: string;
        light: string;
      };
      gray: {
        dark: string;
        mid: string;
        light: string;
        light2: string;
      };
      red: string;
      //   dark: {
      //     dark: string;
      //     mid: string;
      //     light: string;
      //   };
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    fontSizes: {
      xsmall: string;
      small: string;
      regular: string;
      medium: string;
      large: string;
      h1: string;
      h2: string;
      h3: string;
    };
    headerWidth: string;
  }
}
