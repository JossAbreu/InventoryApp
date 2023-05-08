import { Heading,Box,Icon, Flex,Divider,Image,AspectRatio,Center, VStack, Stack } from 'native-base';
import * as React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityBase, TouchableHighlight } from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

  

export default function AccountScreen({  }) {
  const navigation = useNavigation();
    return (
      <VStack space="2.5" mt="2" px="8">
        <Stack h="30%" direction="column">
          <Center>
            <Box shadow={2} w="50%" h="85%" m="2">
              <Center>
                <Image
                  resizeMode="contain"
                  width="100%"
                  height="100%"
                  source={require("../../assets/Image/man.png")}
                  alt="Picture of User"
                  
                />
              </Center>
            </Box>

            <Box position="relative" >
              <Heading mb="5" fontSize="2xl">My Account</Heading>
            </Box>
          </Center>
        </Stack>
        <Divider my="1" />
        <Stack h="70%" mb="2.5" direction="column">
          <Box
            borderRadius="md"
            justifyContent="center"
            h="10%"
            w="100%"
            bg="lightText"
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
            bg="lightText"
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
            bg="lightText"
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
            bg="lightText"
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
            bg="lightText"
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
            bg="lightText"
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