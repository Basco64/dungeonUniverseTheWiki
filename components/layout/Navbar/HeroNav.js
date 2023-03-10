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
        Hero
      </MenuButton>

      <MenuList bg={"#171717"}>
        <Link href="/player">
          <MenuItem
            color="white"
            bg={"#262626"}
            _hover={{
              bg: "#171717",
            }}
          >
            Hero
          </MenuItem>
        </Link>
        <Link href="/player/fighter">
          <MenuItem
            color="white"
            bg={"#262626"}
            _hover={{
              bg: "#171717",
            }}
          >
            Fighter
          </MenuItem>
        </Link>
        <Link href="/player/scout">
          <MenuItem
            color="white"
            bg={"#262626"}
            _hover={{
              bg: "#171717",
            }}
          >
            Scout
          </MenuItem>
        </Link>
        <Link href="/player/wizard">
          <MenuItem
            color="white"
            bg={"#262626"}
            _hover={{
              bg: "#171717",
            }}
          >
            Wizard
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
