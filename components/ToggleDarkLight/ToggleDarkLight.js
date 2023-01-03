"use client";

import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";
import { Box, Button, Switch } from "@chakra-ui/react";
import React, { useState } from "react";

export default function ToggleDarkLight() {
  const { colorMode, toggleColorMode } = useColorMode();

  const iconColor = {
    light: "black",
    dark: "white",
  };

  return (
    <Box m="1em" mr="2em" style={{ float: "right", clear: "both" }}>
      <IconButton
        mt={4}
        aria-label="theme toggle"
        icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        // color={iconColor[colorMode]}
      ></IconButton>
    </Box>
  );
}
