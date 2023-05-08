import * as React from "react";
import { Input, KeyboardAvoidingView, Text, Button, VStack, Heading, Center, NativeBaseProvider } from "native-base";
import { Platform } from "react-native";
import { ThemeContext } from '../../src/Styles/ThemeContext'


const ForgotScreen = () => {
  const { theme } = React.useContext(ThemeContext);


  
    return <KeyboardAvoidingView >
        <Center style={{backgroundColor:theme.backgroundColor}}     > 
          <VStack justifyContent="center" w="100%" h="100%" maxW="300">
            <Heading style={{color:theme.color}}  mb="3">Forgot Password</Heading>
            <Text style={{color: theme.color}}  color="muted.400">
              Not to worry! Enter email address associated with your account and
              we’ll send a link to reset your password.
            </Text>
            <Input fontSize={'xl'}  
            style={{
                backgroundColor: theme.inputBackgroundColor,
                color: theme.inputColor,
              }} placeholder="Email Address" placeholderTextColor={theme.inputColor} mt="10" mb="4" />
            <Button colorScheme="warmGray" mb="4">Proceed</Button>
          </VStack>
        </Center>
      </KeyboardAvoidingView>;
  };


    export default ForgotScreen