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

export default function ItemNav() {
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
        Items
      </MenuButton>

      <MenuList bg={"#171717"}>
        <Link href="/items/junks">
          <MenuItem
            color="white"
            bg={"#262626"}
            _hover={{
              bg: "#171717",
            }}
          >
            Junks
          </MenuItem>
        </Link>

        <Link href="/items/consumables">
          <MenuItem
            color="white"
            bg={"#262626"}
            _hover={{
              bg: "#171717",
            }}
          >
            Comsumables
          </MenuItem>
        </Link>

        <Link href="/items/materials">
          <MenuItem
            color="white"
            bg={"#262626"}
            _hover={{
              bg: "#171717",
            }}
          >
            Materials
          </MenuItem>
        </Link>

        {/* <Link href="/items/questitems">
          <MenuItem
            color="white"
            bg={"#262626"}
            _hover={{
              bg: "#171717",
            }}
          >
            Quest Items
          </MenuItem>
        </Link> */}

        <Link href="/items/recipes">
          <MenuItem
            color="white"
            bg={"#262626"}
            _hover={{
              bg: "#171717",
            }}
          >
            Recipes
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}
