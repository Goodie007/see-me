import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { CustomInput } from "../components/input";
import Button from "../components/buttons";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()
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
          marginTop={"40px"}
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
            label="Email"
            value={undefined}
            name="email"
            width={"100%"}
          />
          <Box mt={5} width={"100%"}>
            <CustomInput
              onChangeText={undefined}
              label="Password"
              value={undefined}
              name="password"
              width={"100%"}
            />
          </Box>
          <Box
            mt={10}
            width={"100%"}
            justifyContent={"center"}
            display={"flex"}
            flexDir={"column"}
          >
            <Button
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              label={"Login"}
              width={"100%"}
              bgColor="#022730"
              height={"48px"}
              borderRadius={"8px"}
              color="white"
            />
            <Text textAlign={"center"} mt={3} as="button" onClick={() => {
                navigate('/signup')
            }}>
              Sign up
            </Text>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}
