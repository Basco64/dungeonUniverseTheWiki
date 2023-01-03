import React from "react";
import { useColorMode, Button, Flex, Box, Container } from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import ToggleDarkLight from "../ToggleDarkLight/ToggleDarkLight";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "#f7f7f7",
    dark: "#212121",
  };
  const navHoverBg = {
    light: "gray.600",
    dark: "gray.300",
  };

  const color = {
    light: '"#212121',
    dark: "#f7f7f7",
  };

  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <>
      <StickNav>
        <Box>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/player/wizard" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Feme
            </Button>
          </NextLink>
        </Box>
      </StickNav>
      <Flex
        as="main"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  );
};

export default Layout;
