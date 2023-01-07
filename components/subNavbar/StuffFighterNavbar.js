import React from "react";
import Link from "next/link";
import { Flex, Button, useColorModeValue, Text } from "@chakra-ui/react";

export default function StuffFighterNavbar() {
  return (
    <>
      <Flex py={10} direction={"row"} align="center">
        <Link href="/stuff/fighter/armorset">
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
            Armor Set
          </Button>
        </Link>
        <Link href="/stuff/fighter/jewelryset">
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
            Jewelry Set
          </Button>
        </Link>{" "}
        <Link href="/stuff/fighter/offset">
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
            Off Set
          </Button>
        </Link>
        <Link href="/stuff/fighter/jewelryoffset">
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
            Jewelry Off Set
          </Button>
        </Link>
      </Flex>
      <Flex align="center">
        <Text>For see more about the stuff , click on the image</Text>
      </Flex>
    </>
  );
}
