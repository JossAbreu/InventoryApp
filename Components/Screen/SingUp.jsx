import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center,PresenceTransition, View,NativeBaseProvider } from "native-base";
import {useThemeContext} from '../../src/Styles/ThemeContext'
import { ThemeContext } from '../../src/Styles/ThemeContext'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function SingUpScreen  () {


  const { theme, } = React.useContext(ThemeContext);

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
     
    <Center
      style={{ backgroundColor: theme.backgroundColor }}
      
      h='100%'
      px="3"
      w="100%"
    >
      <PresenceTransition visible={true} initial={{
      opacity: 0,
    
      translateY: 100
    }} animate={{
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 800
      }
    }}>
      <Box justifyContent="center" safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          textAlign="center"
          size="lg"
          style={{ color: theme.color }}
          fontWeight="800"
        >
          Welcome to Hillsdale Premiun App
        </Heading>
        <Heading
          textAlign="center"
          mt="1"
          style={{ color: theme.color }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <Heading style={{ color: theme.color }} fontSize={"sm"}>
              Email
            </Heading>
            <Input
               borderRadius={15}
              fontSize={"xl"}
              style={{
                backgroundColor: theme.inputBackgroundColor,
                color: theme,
              }}
            />
          </FormControl>
          <FormControl>
            <Heading style={{ color: theme.color }} fontSize={"sm"}>
              Password
            </Heading>
            <Input
              fontSize={"xl"}
              style={{
                backgroundColor: theme.inputBackgroundColor,
                color: theme,
              }}
              type="password"
              borderRadius={15}
            />
          </FormControl>
          <FormControl>
            <Heading style={{ color: theme.color }} fontSize={"sm"}>
              Confirm Password
            </Heading>
            <Input
              fontSize={"xl"}
              style={{
                backgroundColor: theme.inputBackgroundColor,
                color: theme,
              }}
              type="password"
              borderRadius={15}
            />
          </FormControl>
          <Button mt="2" colorScheme="warmGray">
            Sign up
          </Button>
        </VStack>
      </Box>
      </PresenceTransition>
    </Center>
   
    </KeyboardAwareScrollView>
  );
};

    export default  SingUpScreen