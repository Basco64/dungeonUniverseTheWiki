import Link from "next/link";
import Image from "next/image";
import TableXp from "../../components/table/tableXP";
import TableStats from "../../components/table/tableStats";
import { Box, Flex, Stack, VStack, Text } from "@chakra-ui/react";

export default function Player() {
  return (
    <Flex>
      <Stack>
        <Box>
          <TableXp />
        </Box>
      </Stack>
      <VStack spacing={4} justify={"center"}>
        <Link href={"/player/fighter"}>
          <Image
            src={"/Heroes/FighterIcon.png"}
            alt="Fighter Icon"
            width={144}
            height={144}
          ></Image>
          <Text as={"u"} fontWeight="bold">
            Fighter
          </Text>
        </Link>{" "}
        <Link href={"/player/scout"}>
          <Image
            src={"/Heroes/ScoutIcon.png"}
            alt="Scout Icon"
            width={144}
            height={144}
          ></Image>
          <Text as={"u"} fontWeight="bold">
            Scout
          </Text>
        </Link>
        <Link href={"/player/wizard"}>
          <Image
            src={"/Heroes/WizardIcon.png"}
            alt="Wizard Icon"
            width={144}
            height={144}
          ></Image>
          <Text as={"u"} fontWeight="bold">
            Wizard
          </Text>
        </Link>
      </VStack>
      <Stack>
        <Box>
          <TableStats />
        </Box>
      </Stack>
    </Flex>
  );
}
