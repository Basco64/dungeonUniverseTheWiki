import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavBar from "./Navbar";
import ToggleDarkLight from "../ToggleDarkLight/ToggleDarkLight";
import { Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Box align="center" as="a" maxW={500}>
        <Link href={"/"} maxW={500}>
          <Image
            alt="DU-Banner"
            src="/Dungeon-Universe-Banner-Without-bg.png"
            width={500}
            height={500}
          />
        </Link>
      </Box>
      <NavBar />
    </>
  );
}
