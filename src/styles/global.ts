import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  
      &::before,
      &::after {
        box-sizing: inherit;
      }
    }
  
    ${({ theme }) => css`
      html {
        font-size: 62.5%;
      }

      body {
        background: ${theme.colors.white};
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
    `}
  `;

export default GlobalStyles;
