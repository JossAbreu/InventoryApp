import React, { useState, useRef, useEffect } from 'react';
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, useToast, NativeBaseProvider, Popover, Icon, Image, PresenceTransition } from "native-base";
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../src/Styles/ThemeContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import axios from 'axios';

export default function LoginScreen( props ) {


  //variables 
  const navigation = useNavigation(); //variable para  navegacion 
  const { theme, } = React.useContext(ThemeContext); //variable para definir el thema
  const { username,password,setUsername,setPassword } = props;
  
   

  const toast = useToast();


 useEffect(() => {
  // Restablecer los valores de los inputs
  setUsername('');
 setPassword('');
 
}, []);


const LoginButton = () => {
  if (username === '' && password === '') {
          toast.show({
            placement:'bottom',
              render: () => {
                return <Box  px="2" py="1" alignItems='center' flexDirection="row-reverse" rounded="sm"  >
                       <Heading style={{color:theme.color}} textAlign={'center'} size={'sm'}>Please insert User Id and password</Heading>
                       <Icon size={5} color="gray.800" as={<MaterialCommunityIcons  name='hand-pointing-up'/>}></Icon>
                      </Box>;
              }
            });
          
        }  
          else if (username === '') {
      toast.show({
        placement:'bottom',
          render: () => {
            return <Box  px="2" py="1" alignItems='center' flexDirection="row-reverse" rounded="sm"  >
                   <Heading color="yellow.500" fontWeight="normal" textAlign={'center'}  size={'sm'}>Invalid User</Heading>
                   <Icon size={5} color="yellow.500" as={<MaterialCommunityIcons  name='account-off'/>}></Icon>
                  </Box>;
          }
        });
    }
    else  if (password === ''){
      toast.show({
        
        placement:'bottom',
          render: () => {
            return <Box  px="2" py="1" alignItems='center' flexDirection="row-reverse" rounded="sm"  >
                   <Heading color="red.500" fontWeight="normal" textAlign={'center'} size={'sm'}>Invalid password</Heading>
                   <Icon size={5} color="red.500" as={<MaterialCommunityIcons  name='lock-open-remove'/>}></Icon>
                  </Box>;
          }
        });
    }else{
      AuthUser();
    }
  
 
};

function AuthUser(){
  axios
  .post('http://192.168.3.38:3000/login', { username, password })
  .then(response => {
    if (response.data.success) {
     
      // Realiza alguna acción adicional después del inicio de sesión exitoso
      toast.show({
              placement:'top',
                   render: () => {
                     return <Box  px="2" py="1" mt={8} alignItems='center' flexDirection="row-reverse" rounded="sm"  >
                           <Heading color="green.600" fontWeight="bold" textAlign={'center'} size={'sm'}>Welcome User : {username}</Heading>
                           <Icon size={5} color="green.500" as={<MaterialCommunityIcons  name='account-check-outline'/>}></Icon>
                         </Box>;
                 }
               });
                
                 navigation.navigate('Main', { screen: 'Home', params: { tab: 'Home', username: username } });
    } else {
     
    }
  })
  .catch(error => {
    console.log('Error al realizar la solicitud:', error);
    toast.show({
      placement:'bottom',
        render: () => {
          return <Box  px="2" py="1" alignItems='center' flexDirection="row-reverse" rounded="sm" >
                 <Heading color="red.500" fontWeight="normal" textAlign={'center'} size={'sm'}>Invalid access</Heading>
                 <Icon size={8} color="red.500" as={<MaterialCommunityIcons  name='account-remove'/>}></Icon>
                </Box>;
        }
      });
  });
}

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <PresenceTransition visible={true} initial={{
      opacity: 0,
      scale: 0
    }} animate={{
      opacity: 1,
      scale: 1,
      transition: {
        duration: 550
      }
    }}>
  
    <Center  style={{backgroundColor:theme.backgroundColor}}  w="100%" h="100%">

      <Box
      
        justifyContent="center"
        safeArea
        p="2"
        py="8"
        w="100%"
        maxW="290"
      >
        
       
        <Image  
                  height= {20}
                  source={require("../../assets/Image/Picture1.jpg")}
                  alt="Picture" />
        <Heading
          style={{color:theme.color}} 
          size="lg"
          textAlign="center"
          fontWeight="800"
          
        >
      Inventory Managament
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
            <Heading textAlign={"center"} mb={3}  fontSize={"sm"} style={{color:theme.color}}>
              User Id
            </Heading>
            <Input
            id='ipuser'
            type="text"
            borderRadius={15}
            placeholder='user code'
            keyboardType='number-pad'
            onChangeText={setUsername}
            value={username}
              fontSize={"lg"}
              style={{
                backgroundColor: theme.inputBackgroundColor,
                color: theme,
              }}
            />
          </FormControl>
          <FormControl>
            <Heading textAlign={"center"} mb={3} fontSize={"sm"} style={{color:theme.color}}>
              Password
            </Heading>
            <Input
           value={password}
            placeholder='you password'
             borderRadius={15}
              fontSize={"lg"}
              onChangeText={setPassword}
              style={{
                backgroundColor: theme.inputBackgroundColor,
                color: theme,
              }}
              type="password"
            />
            <Heading
              style={{color:theme.color}}
              onPress={() => navigation.navigate("Forgot")}
              fontSize="sm"
              alignSelf="flex-end"
              mt="3"
            >
              Forget Password?
            </Heading>
          </FormControl>

          
          <Button onPress={LoginButton} mt="2" colorScheme="warmGray">
            Sign in
          </Button>
          <HStack  mt="6" justifyContent="center">
            <Text fontSize="sm" style={{color:theme.color}}>
              I'm a new user.{" "}
            </Text>
            <Heading
            
              fontSize="sm"
              style={{color:theme.color}}
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign Up
            </Heading>
          </HStack>
        </VStack>
        <Box w="100%" mt={5} alignItems="flex-end">
      <Popover trigger={triggerProps => {
      return <Button {...triggerProps} style={{backgroundColor:theme.backgroundColor}}  w={8} alignContent="center" h={8}  >
              <Icon size="xl" color="gray.500" as={<MaterialCommunityIcons name="information"/>}></Icon>
            </Button>;
    }}>
        <Popover.Content accessibilityLabel="Delete Customerd" mr={10} w="40">
          <Popover.Arrow />
        
          <Popover.Body alignItems="center"  >
           <Text textAlign="center">Contact: Hillsdaledr.com</Text>
          </Popover.Body>
         
        </Popover.Content>
      </Popover>
    </Box>

      </Box>
   
    </Center>
   
    </PresenceTransition>
    </KeyboardAwareScrollView>
  );
};

