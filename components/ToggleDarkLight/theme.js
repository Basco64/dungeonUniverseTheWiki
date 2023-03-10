import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const fonts = {
  ...chakraTheme.fonts,
  body: `Inter`,
  heading: `Inter`,
};

const overrides = {
  initialColorMode: "dark",
  useSystemColorMode: true,
  ...chakraTheme,
  fonts,
  baseStyle: {
    sm: "40em",
    md: "52em",
    lg: "64em",
  },
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#fAfAfA", "#191919")(props),
      },
    }),
  },
};

export const customTheme = extendTheme(overrides);

export default customTheme;
