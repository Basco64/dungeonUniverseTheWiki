import { Flex, Heading, VStack, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function StuffPage() {
  return (
    <>
      <Flex>
        <Heading as={"b"} pb={"8"}>
          Choose your Classe
        </Heading>
      </Flex>
      <VStack>
        <Link href={"/stuff/fighter"}>
          <Image
            src={"/Heroes/FighterIcon.png"}
            alt="Fighter Icon"
            width={144}
            height={144}
          />
        </Link>

        <Text as={"b"}>Fighter</Text>

        <Link href={"/stuff/wizard"}>
          <Image
            src={"/Heroes/WizardIcon.png"}
            alt="Wizard Icon"
            width={144}
            height={144}
          />
        </Link>
        <Text as={"b"}>Wizard</Text>

        <Link href={"/stuff/scout"}>
          <Image
            src={"/Heroes/ScoutIcon.png"}
            alt="Scout Icon"
            width={144}
            height={144}
          />
        </Link>
        <Text as={"b"}>Scout</Text>
      </VStack>
    </>
  );
}
