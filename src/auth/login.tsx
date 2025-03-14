import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { CustomInput } from "../components/input";

export default function Login() {
  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="flex-start">
      <Text>Login</Text>
      <CustomInput
        onChangeText={undefined}
        label="name"
        value={undefined}
        name="Name"
        width={'100%'}
      />
    </Box>
  );
}
