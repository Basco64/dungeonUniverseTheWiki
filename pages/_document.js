import { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import customTheme from "../components/ToggleDarkLight/theme";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <Main />
      <NextScript />
    </Html>
  );
}
