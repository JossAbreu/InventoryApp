import * as React from "react";
import { Input, KeyboardAvoidingView, Text, Button, VStack, Heading, Center, PresenceTransition,NativeBaseProvider } from "native-base";
import { Platform } from "react-native";
import { ThemeContext } from '../../src/Styles/ThemeContext'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
 

const ForgotScreen = () => {
  const { theme } = React.useContext(ThemeContext);


  
    return (
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
       
        <Center style={{backgroundColor:theme.backgroundColor}}     > 
        <PresenceTransition visible={true} initial={{
      opacity: 0,
      translateY: 200,
      rotate: "45deg"
    }} animate={{
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 800
      }
    }}>
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
          </PresenceTransition>
        </Center>
    
        </KeyboardAwareScrollView>

    );
  };


    export default ForgotScreen