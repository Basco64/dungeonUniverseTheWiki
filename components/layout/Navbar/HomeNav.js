import React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

export default function HomeNav() {
  return (
    <Link href="/" scroll={false}>
      <Button
        size={"md"}
        fontWeight="bold"
        textTransform="uppercase"
        mx={"1em"}
        px={4}
        fontSize={"lg"}
        bg={"#262626"}
        color={"#35C9A5"}
        _hover={{
          bg: "#171717",
        }}
        _active={{
          bg: "#171717",
        }}
        boxShadow={useColorModeValue(
          "0px 1px 25px -5px rgb( 0 0 0 / 48%), 0 9px 8px -5px rgb( 0 0 0 / 43%)",
          "0px 1px 25px -5px rgb( 53 201 165 / 48%), 0 9px 8px -5px rgb( 53 201 165 / 43%)"
        )}
      >
        Home
      </Button>
    </Link>
  );
}
