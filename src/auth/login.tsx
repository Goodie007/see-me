import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { CustomInput } from "../components/input";
import Button from "../components/buttons";

export default function Login() {
  return (
    <Box width={"100%"} paddingX={"20px"}>
      <Center
        display="flex"
        flexDirection="column"
        width={"100%"}
        paddingTop={10}
      >
        <Text fontSize={20} fontWeight={"600"}>
          Login
        </Text>
        <Box
          width={{ base: "100%", md: "40%", lg: "40%" }}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap={8}
          marginTop={'40px'}
        >
          <Button
            onClick={function (): void {}}
            label={"Sign in with Google"}
            width={"100%"}
            bgColor="transparent"
            borderWidth={1}
            height={"48px"}
            borderRadius={"8px"}
          />
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
          <Button
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            label={"Login"}
            width={"100%"}
            bgColor="red"
            height={"48px"}
            borderRadius={"8px"}
          />
        </Box>
      </Center>
    </Box>
  );
}
