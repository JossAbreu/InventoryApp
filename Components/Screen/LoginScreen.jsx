import React from 'react'
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../src/Styles/ThemeContext'
import { Switch } from '@rneui/themed';
export default function LoginScreen() {

  const navigation = useNavigation();
  const { theme, FuntionchangeTheme,isDarkMode } = React.useContext(ThemeContext);
  


  
  function handlePress() {
    // contenido de acceso a home 
    navigation.navigate('Main', { screen: 'Home', params: { tab: 'Home' } });
  }



  return (
    <Center style={{backgroundColor:theme.backgroundColor}} flex={1} w="100%" h="100%">
      <Box
      
        justifyContent="center"
        safeArea
        p="2"
        py="8"
        w="100%"
        maxW="290"
      >
        <Heading
          style={{color:theme.color}} 
          size="lg"
          textAlign="center"
          fontWeight="800"
          
        >
          Inventory Managament prueba 2 t
        </Heading>
        <Heading
          style={{color:theme.color}}
          mt="1"    
          textAlign="center"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <Heading fontSize={"sm"} style={{color:theme.color}}>
              User Id
            </Heading>
            <Input
              fontSize={"xl"}
              style={{
                backgroundColor: theme.inputBackgroundColor,
                color: theme,
              }}
            />
          </FormControl>
          <FormControl>
            <Heading fontSize={"sm"} style={{color:theme.color}}>
              Password
            </Heading>
            <Input
              fontSize={"xl"}
              style={{
                backgroundColor: theme.inputBackgroundColor,
                color: theme,
              }}
              type="password"
            />
            <Heading
              style={{color:theme.color}}
              onPress={() => navigation.navigate("Forgot")}
              fontSize="md"
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Heading>
          </FormControl>

          <Switch value={isDarkMode} onValueChange={ FuntionchangeTheme}  mt="2" colorScheme="warmGray">
          
          </Switch>
          <Button onPress={handlePress} mt="2" colorScheme="warmGray">
            Sign in
          </Button>
          <HStack  mt="6" justifyContent="center">
            <Text fontSize="sm" style={{color:theme.color}}>
              I'm a new user.{" "}
            </Text>
            <Heading
              fontSize="sm"
              style={{color:theme.color}}
              
            >
              Sign Up
            </Heading>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

