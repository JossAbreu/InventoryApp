import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, View,NativeBaseProvider } from "native-base";

function SingUpScreen  () {
  return (
    <Center  flex={1} px="3" w="100%" >
      <Box justifyContent="center"  safeArea p="2" w="90%" maxW="290" py="8">
        <Heading textAlign="center"  size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="800">
          Welcome to Hillsdale Premiun App
        </Heading>
        <Heading textAlign="center" mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="warmGray">
            Sign up
          </Button>
        </VStack>
      </Box>
      </Center>
  );
};

    export default  SingUpScreen