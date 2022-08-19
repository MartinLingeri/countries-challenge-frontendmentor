import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";

import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "hsl(209, 23%, 22%)",
  secondary: "hsl(207, 26%, 17%)",
  tertiary: "hsl(200, 15%, 8%)",
  darkGray: "hsl(0, 0%, 52%)",
  lightGray: "hsl(0, 0%, 98%)",
  white: "hsl(0, 0%, 100%)",
};

const fonts = {
  global: {
    "*": "'Nunito Sans', sans-serif",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
