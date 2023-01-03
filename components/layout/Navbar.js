import Link from "next/link";
import { Flex, useColorModeValue } from "@chakra-ui/react";

import HeroNav from "./Navbar/HeroNav";
import StuffNav from "./Navbar/StuffNav";
import EnemiesNav from "./Navbar/EnemiesNav";
import HomeNav from "./Navbar/HomeNav";
import ItemNav from "./Navbar/ItemNav";
import NpcNav from "./Navbar/NpcNav";
import QuestNav from "./Navbar/QuestNav";

export default function NavBar() {
  return (
    <Flex py={10} direction={"row"} align="center">
      <HomeNav />
      <HeroNav />
      <EnemiesNav />
      <StuffNav />
      <QuestNav />
      <ItemNav />
      <NpcNav />
    </Flex>
  );
}
