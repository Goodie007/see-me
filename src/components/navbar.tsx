import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  return (
    <Box
      bgColor={"red"}
      height={"90px"}
      paddingX={"20px"}
      alignItems={"center"}
      display={"flex"}
      position={'fixed'}
      width={'100%'}
      
    >
      <HStack
        justifyContent={"space-between"}
        alignItems={"center"}
        display={"flex"}
        width={'100%'}
      >
        <Text as={"button"}>Home</Text>
        <Text>TExt</Text>
      </HStack>
    </Box>
  );
}
