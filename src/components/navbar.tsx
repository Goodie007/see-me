import { Box, HStack, Text, useTheme } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  const theme = useTheme();

  return (
    <Box
      bgColor={"#022730"}
      height={"90px"}
      paddingX={"20px"}
      alignItems={"center"}
      display={"flex"}
      position={"fixed"}
      width={"100%"}
    >
      <HStack
        justifyContent={"space-between"}
        alignItems={"center"}
        display={"flex"}
        width={"100%"}
      >
        <Text as={"button"} color={theme.colors.white} fontSize={25}>
          Home
        </Text>
        <Text color={theme.colors.white}>TExt</Text>
      </HStack>
    </Box>
  );
}
