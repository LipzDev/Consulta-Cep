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
        background: ${theme.colors.mainBg};
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};

        b{
          font-weight: 600;
        }

        /* ESTILOS DO SWEET ALERT */

        .swal2-popup{
            .swal2-html-container {
              font-size: 14px;
            }

            .swal2-actions{
              button{
                background: ${theme.colors.primary};
                font-size: 14px;
              }
            }
          } 

        /* CODIGOS DO SCROLL */

        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-button {
          width: 0px;
          height: 0px;
        }
        ::-webkit-scrollbar-thumb {
          background: #232323;
          border: 0px none #ffffff;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #ffffff;
        }
        ::-webkit-scrollbar-thumb:active {
          background: #000000;
        }
        ::-webkit-scrollbar-track {
          background: #f8f8f8;
          border: 0px none #ffffff;
        }
        ::-webkit-scrollbar-track:hover {
          background: #ffffff;
        }
        ::-webkit-scrollbar-track:active {
          background: #ffffff;
        }
        ::-webkit-scrollbar-corner {
          background: transparent;
        }
    `}
  `;

export default GlobalStyles;
