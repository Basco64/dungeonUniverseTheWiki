import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import customTheme from "../components/ToggleDarkLight/theme";
import ToggleDarkLight from "../components/ToggleDarkLight/ToggleDarkLight";
import Layout from "../components/layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dungeon Universe Wiki</title>
        <link
          rel="icon"
          href="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://dungeonuniverse.com/"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"
        />
      </Head>
      <ChakraProvider theme={customTheme}>
        <ToggleDarkLight />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}
