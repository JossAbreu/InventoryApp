import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, View,NativeBaseProvider } from "native-base";
import {useThemeContext} from '../../src/Styles/ThemeContext'


function SingUpScreen  () {
  const [theme, toggleTheme] = useThemeContext();
  return (
    <Center style={theme}    flex={1} px="3" w="100%" >
      <Box style={theme}   justifyContent="center"  safeArea p="2" w="90%" maxW="290" py="8">
        <Heading textAlign="center"  size="lg" style={theme}   fontWeight="800">
          Welcome to Hillsdale Premiun App
        </Heading>
        <Heading textAlign="center" mt="1" style={theme}   fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <Heading style={theme} fontSize={"sm"} >Email</Heading>
            <Input fontSize={'xl'} style={{backgroundColor:theme.inp,color:theme.color}}  />
          </FormControl>
          <FormControl>
            <Heading style={theme} fontSize={"sm"} >Password</Heading>
            <Input fontSize={'xl'} style={{backgroundColor:theme.inp,color:theme.color}}  type="password" />
          </FormControl>
          <FormControl>
            <Heading style={theme} fontSize={"sm"} >Confirm Password</Heading>
            <Input fontSize={'xl'} style={{backgroundColor:theme.inp,color:theme.color}}  type="password" />
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