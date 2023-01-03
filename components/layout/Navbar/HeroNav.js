import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function HeroNav() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        size={"lg"}
        fontWeight="bold"
        textTransform="uppercase"
        mx={"1em"}
        px={4}
        fontSize={"lg"}
        rounded={"full"}
        bg={"#262626"}
        color={"#35C9A5"}
        _hover={{
          bg: "#171717",
        }}
        boxShadow={useColorModeValue(
          "0px 1px 25px -5px rgb( 0 0 0 / 48%), 0 9px 8px -5px rgb( 0 0 0 / 43%)",
          "0px 1px 25px -5px rgb( 53 201 165 / 48%), 0 9px 8px -5px rgb( 53 201 165 / 43%)"
        )}
        _focus={{
          bg: "#171717",
        }}
      >
        Hero
      </MenuButton>

      <MenuList>
        <Link href="/player" passHref scroll={false}>
          <MenuItem>Hero</MenuItem>
        </Link>
        <Link href="/player/fighter" passHref scroll={false}>
          <MenuItem>Fighter</MenuItem>
        </Link>
        <Link href="/player/scout" passHref scroll={false}>
          <MenuItem>Scout</MenuItem>
        </Link>
        <Link href="/player/wizard" passHref scroll={false}>
          <MenuItem>Wizard</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
