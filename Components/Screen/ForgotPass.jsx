import * as React from "react";
import { Input, KeyboardAvoidingView, Text, Button, VStack, Heading, Center, NativeBaseProvider } from "native-base";
import { Platform } from "react-native";
const ForgotScreen = () => {
    return <KeyboardAvoidingView h={{
      base: "400px",
      lg: "auto"
    }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Center  flex={1} px="3" w="100%" > 
          <VStack flex="1" justifyContent="flex-end" w="100%" maxW="300">
            <Heading mb="3">Forgot Password</Heading>
            <Text color="muted.400">
              Not to worry! Enter email address associated with your account and
              we’ll send a link to reset your password.
            </Text>
            <Input placeholder="Email Address" mt="10" mb="4" />
            <Button colorScheme="warmGray" mb="4">Proceed</Button>
          </VStack>
        </Center>
      </KeyboardAvoidingView>;
  };


    export default ForgotScreen