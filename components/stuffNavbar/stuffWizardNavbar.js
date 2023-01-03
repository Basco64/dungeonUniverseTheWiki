import React from "react";
import Link from "next/link";
import { Flex, Button, useColorModeValue } from "@chakra-ui/react";

export default function StuffWizardNavbar() {
  return (
    <Flex py={10} direction={"row"} align="center">
      <Link href="/stuff/wizard/armorset">
        <Button
          size={"lg"}
          fontWeight="bold"
          textTransform="uppercase"
          px={4}
          mx={"1em"}
          fontSize={"lg"}
          rounded={"full"}
          bg={"#262626"}
          color={"#35C9A5"}
          boxShadow={useColorModeValue(
            "0px 1px 25px -5px rgb( 0 0 0 / 48%), 0 9px 8px -5px rgb( 0 0 0 / 43%)",
            "0px 1px 25px -5px rgb( 53 201 165 / 48%), 0 9px 8px -5px rgb( 53 201 165 / 43%)"
          )}
          _hover={{
            bg: "#171717",
          }}
          _focus={{
            bg: "#171717",
          }}
        >
          Armor Set
        </Button>
      </Link>
      <Link href="/stuff/wizard/jewelryset">
        <Button
          size={"lg"}
          fontWeight="bold"
          textTransform="uppercase"
          px={4}
          mx={"1em"}
          fontSize={"lg"}
          rounded={"full"}
          bg={"#262626"}
          color={"#35C9A5"}
          boxShadow={useColorModeValue(
            "0px 1px 25px -5px rgb( 0 0 0 / 48%), 0 9px 8px -5px rgb( 0 0 0 / 43%)",
            "0px 1px 25px -5px rgb( 53 201 165 / 48%), 0 9px 8px -5px rgb( 53 201 165 / 43%)"
          )}
          _hover={{
            bg: "#171717",
          }}
          _focus={{
            bg: "#171717",
          }}
        >
          Jewelry Set
        </Button>
      </Link>{" "}
      <Link href="/stuff/wizard/offset">
        <Button
          size={"lg"}
          fontWeight="bold"
          textTransform="uppercase"
          px={4}
          mx={"1em"}
          fontSize={"lg"}
          rounded={"full"}
          bg={"#262626"}
          color={"#35C9A5"}
          boxShadow={useColorModeValue(
            "0px 1px 25px -5px rgb( 0 0 0 / 48%), 0 9px 8px -5px rgb( 0 0 0 / 43%)",
            "0px 1px 25px -5px rgb( 53 201 165 / 48%), 0 9px 8px -5px rgb( 53 201 165 / 43%)"
          )}
          _hover={{
            bg: "#171717",
          }}
          _focus={{
            bg: "#171717",
          }}
        >
          Off Set
        </Button>
      </Link>
      <Link href="/stuff/wizard/jewelryoffset">
        <Button
          size={"lg"}
          fontWeight="bold"
          textTransform="uppercase"
          px={4}
          mx={"1em"}
          fontSize={"lg"}
          rounded={"full"}
          bg={"#262626"}
          color={"#35C9A5"}
          boxShadow={useColorModeValue(
            "0px 1px 25px -5px rgb( 0 0 0 / 48%), 0 9px 8px -5px rgb( 0 0 0 / 43%)",
            "0px 1px 25px -5px rgb( 53 201 165 / 48%), 0 9px 8px -5px rgb( 53 201 165 / 43%)"
          )}
          _hover={{
            bg: "#171717",
          }}
          _focus={{
            bg: "#171717",
          }}
        >
          Jewelry Off Set
        </Button>
      </Link>
    </Flex>
  );
}
