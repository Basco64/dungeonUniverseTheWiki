import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

export default function StuffNav() {
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
        Stuff
      </MenuButton>

      <MenuList bg={"#171717"} align="center">
        <MenuGroup
          fontWeight="bold"
          textTransform="uppercase"
          fontSize={"lg"}
          title="Fighter"
          color="white"
        >
          <Link href="/stuff/fighter/armorset">
            <MenuItem
              color="white"
              bg={"#262626"}
              _hover={{
                bg: "#171717",
              }}
            >
              Armor Set
            </MenuItem>
          </Link>
          <Link href="/stuff/fighter/jewelryset">
            <MenuItem
              color="white"
              bg={"#262626"}
              _hover={{
                bg: "#171717",
              }}
            >
              Jewelry Set
            </MenuItem>
          </Link>
          <Link href="/stuff/fighter/offset">
            <MenuItem
              color="white"
              bg={"#262626"}
              _hover={{
                bg: "#171717",
              }}
            >
              Off Set
            </MenuItem>
          </Link>
          <Link href="/stuff/fighter/jewelryoffset">
            <MenuItem
              color="white"
              bg={"#262626"}
              _hover={{
                bg: "#171717",
              }}
            >
              {" "}
              Jewelry Off Set
            </MenuItem>
          </Link>
          <Link href="/stuff/fighter/weapon">
            <MenuItem
              color="white"
              bg={"#262626"}
              _hover={{
                bg: "#171717",
              }}
            >
              {" "}
              Weapon & Shield
            </MenuItem>
          </Link>
        </MenuGroup>

        <MenuGroup
          fontWeight="bold"
          textTransform="uppercase"
          fontSize={"lg"}
          title="Scout"
          color="white"
        >
          <Link href="/stuff/scout/armorset">
            <MenuItem
              color="white"
              bg={"#262626"}
              _hover={{
                bg: "#171717",
              }}
            >
              Armor Set
            </MenuItem>
          </Link>
          <Link href="/stuff/scout/jewelryset">
            <MenuItem
              color="white"
              bg={"#262626"}
              _hover={{
                bg: "#171717",
              }}
            >
              Jewelry Set
            </MenuItem>
          </Link>
          <Link href="/stuff/scout/offset">
            <MenuItem
              color="white"
              bg={"#262626"}
              _hover={{
                bg: "#171717",
              }}
            >
              Off Set
            </MenuItem>
          </Link>
          <Link href="/stuff/scout/jewelryoffset">
            <MenuItem
              color="white"
              bg={"#262626"}
              _hover={{
                bg: "#171717",
              }}
            >
              {" "}
              Jewelry Off Set
            </MenuItem>
          </Link>
          <Link href="/stuff/scout/weapon">
            <MenuItem
              color="white"
              bg={"#262626"}
              _hover={{
                bg: "#171717",
              }}
            >
              {" "}
              Weapon
            </MenuItem>
          </Link>
        </MenuGroup>

        <MenuGroup
          fontWeight="bold"
          textTransform="uppercase"
          fontSize={"lg"}
          title="Wizard"
          color="white"
        >
          <Link href="/stuff/wizard/armorset">
            <MenuItem
              color="white"
              bg={"#262626"}
              _hover={{
                bg: "#171717",
              }}
            >
              Armor Set
            </MenuItem>
          </Link>
          <Link href="/stuff/wizard/jewelryset">
            <MenuItem
              color="white"
              bg={"#262626"}
              _hover={{
                bg: "#171717",
              }}
            >
              Jewelry Set
            </MenuItem>
          </Link>
          <Link href="/stuff/wizard/offset">
            <MenuItem
              color="white"
              bg={"#262626"}
              _hover={{
                bg: "#171717",
              }}
            >
              Off Set
            </MenuItem>
          </Link>
          <Link href="/stuff/wizard/jewelryoffset">
            <MenuItem
              color="white"
              bg={"#262626"}
              _hover={{
                bg: "#171717",
              }}
            >
              {" "}
              Jewelry Off Set
            </MenuItem>
          </Link>
          <Link href="/stuff/wizard/weapon">
            <MenuItem
              color="white"
              bg={"#262626"}
              _hover={{
                bg: "#171717",
              }}
            >
              Weapon
            </MenuItem>
          </Link>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
