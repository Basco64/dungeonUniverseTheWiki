import { Button, useColorModeValue } from "@chakra-ui/react";
export default function ReturnButton() {
  return (
    <>
      <Button
        size={"md"}
        fontWeight="bold"
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
        Return
      </Button>
    </>
  );
}
