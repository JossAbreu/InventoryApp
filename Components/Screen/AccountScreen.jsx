import { Heading,Box,Icon, Flex,Divider,Image,AspectRatio,Center, VStack, Stack } from 'native-base';
import * as React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityBase, TouchableHighlight } from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../src/Styles/ThemeContext'
import { Switch } from '@rneui/themed';

export default function AccountScreen({  }) {
  const { theme, FuntionchangeTheme,isDarkMode,themeText } = React.useContext(ThemeContext);
  


  const navigation = useNavigation();
    return (
      <VStack style={{backgroundColor:theme.backgroundColor}} space="2.5"  px="8">
       
        
          <Stack marginTop={6} p={2} justifyContent={"center"}  h="30%" direction="column"  >
    <Stack justifyContent="space-between" alignItems="center" flexDirection="row" >
    
          <Heading  style={{color:theme.color}} fontSize="xl">{themeText}</Heading>
              <Switch value={isDarkMode}  thumbColor={"red"} trackColor="#9e9e9e"  onValueChange={ FuntionchangeTheme} direction="end"  colorScheme="black"/>
              
              </Stack>
              <Box m={0}  >
              <Center>
            
             
                <Image
                  resizeMode="contain"
                  width="75%"
                  height="75%"
                  source={require("../../assets/Image/man.png")}
                  alt="Picture of User"
                  
                />
             
          

           
              <Heading style={{color:theme.color}}  fontSize="xl">My Account</Heading>
              </Center>
            </Box>
            
          </Stack>
   
        
        <Stack h="70%" mb="5.5"  direction="column">
          <Box
            borderRadius="md"
            justifyContent="center"
            h="10%"
            w="100%"
            bg="gray.400"
            shadow="2"
          >
            <TouchableOpacity>
            <Box direction="row" w="200px" h="40px">
              <Flex mt={1} ml={3} direction="row" alignItems="center">
                <Icon
                  size="2xl"
                  color="red.500"
                  as={<Ionicons name="person-circle" />}
                />
                <Heading fontWeight="normal" fontSize="lg" ml={2}>
                  User Profile
                </Heading>
              </Flex>
            </Box>
            </TouchableOpacity>
          </Box>
          
          <Divider my="3 " />
         
          <Box
            borderRadius="md"
            justifyContent="center"
            h="10%"
            w="100%"
            bg="gray.400"
            shadow={2}
          >
             <TouchableOpacity>
            <Box direction="row" w="200px" h="40px">
              <Flex mt={1} ml={3} direction="row" alignItems="center">
                <Icon
                  size="2xl"
                  color="red.500"
                  as={<Ionicons name="settings" />}
                />
                <Heading fontWeight="normal" fontSize="lg" ml={2}>
                  Settings
                </Heading>
              </Flex>
            </Box>
            </TouchableOpacity>
          </Box>
          <Divider my="3 " />
          <Box
            borderRadius="md"
            justifyContent="center"
            h="10%"
            w="100%"
            bg="gray.400"
            shadow={2}
          >
             <TouchableOpacity>
            <Box direction="row" w="200px" h="40px">
              <Flex mt={1} ml={3} direction="row" alignItems="center">
                <Icon
                  size="2xl"
                  color="red.500"
                  as={<MaterialIcons name="domain" />}
                />
                <Heading fontWeight="normal" fontSize="lg" ml={2}>
                  Company Details
                </Heading>
              </Flex>
            </Box>
            </TouchableOpacity>
          </Box>
          <Divider my="3 " />
          <Box
            borderRadius="md"
            justifyContent="center"
            h="10%"
            w="100%"
            bg="gray.400"
            shadow={2}
          >
            <TouchableOpacity>
            <Box direction="row" w="200px" h="40px">
              <Flex mt={1} ml={3} direction="row" alignItems="center">
                <Icon
                  size="2xl"
                  color="red.500"
                  as={<MaterialIcons name="description" />}
                />
                <Heading fontWeight="normal" fontSize="lg" ml={2}>
                  Reports
                </Heading>
              </Flex>
            </Box>
            </TouchableOpacity>
          </Box>
          <Divider my="3 " />
          <Box
            borderRadius="md"
            justifyContent="center"
            h="10%"
            w="100%"
            bg="gray.400"
            shadow={2}
          >
            <TouchableOpacity>
            <Box direction="row" w="200px" h="40px">
              <Flex mt={1} ml={3} direction="row" alignItems="center">
                <Icon
                  size="2xl"
                  color="red.500"
                  as={<MaterialIcons name="help" />}
                />
                <Heading fontWeight="normal" fontSize="md" ml={2}>
                  Help & Support
                </Heading>
              </Flex>
            </Box>
            </TouchableOpacity>
          </Box>
          <Divider my="2 " />
          <Box
            borderRadius="md"
            justifyContent="center"
            h="10%"
            w="100%"
            bg="gray.400"
            shadow={2}
          >
            <TouchableOpacity   onPress={() => navigation.navigate("Login")}>
            <Box  direction="row" w="200px" h="40px">
              <Flex mt={1} ml={3} direction="row" alignItems="center">
                <Icon
                  size="2xl"
                  color="red.500"
                  as={<Ionicons name="exit" />}
                />
                <Heading fontWeight="normal" fontSize="md" ml={2}>
                  Sign Out
                </Heading>
              </Flex>
            </Box>
            </TouchableOpacity>
          </Box>
        </Stack>
      </VStack>
    );
}