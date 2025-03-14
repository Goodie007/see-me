import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { CustomInput } from "../components/input";

export default function Login() {
  return (
    <Box width={'100%'}>
      <Center display="flex" flexDirection="column" width={'100%'}>
        <Text>Login</Text>
        <Box
          width={{base: '100%', md: '40%', lg: '40%'}}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
           gap={10}
        >
          <CustomInput
            onChangeText={undefined}
            label="name"
            value={undefined}
            name="Name"
            width={"100%"}
          />
          <CustomInput
            onChangeText={undefined}
            label="name"
            value={undefined}
            name="Name"
            width={"100%"}
          />
        </Box>
      </Center>
    </Box>
  );
}
