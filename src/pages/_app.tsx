/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import type { AppProps } from "next/app";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global";
import { ThemeProvider } from "styled-components";
import { CardProvider } from "../contexts/CardContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Consulta de CEP</title>
          <link rel="shortcut icon" href="/icon-512.png" />
          <link rel="apple-touch-icon" href="/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <GlobalStyles />
        <CardProvider>
          <Component {...pageProps} />
        </CardProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
