import { Heading,Box,Icon, Flex,Divider,Image,AspectRatio, Center, VStack, Stack } from 'native-base';
import * as React from 'react';
import { View, Text ,} from 'react-native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
export default function AccountScreen({ navigation }) {
    return (
        <VStack space="2.5" mt="2" px="8">
      
      <Stack h="30%"   direction="column" >
         
            <Box
              w="50%"
              shadow={5}
              borderWidth="2"
              borderRadius="md"
              h="70%"
              bg="amber.800"
              m="2"
           
            >
              
                <Image
                  resizeMode="cover"
                  width={100}
                  height={100}
                  source={require("../../assets/Image/man.png")}
                  alt="Picture of User"
                />
              
              
            </Box>
      
      
          <Box bg="amber.50"  position="relative" m="1">
            <Text >My Account</Text>
          </Box>
          </Stack>
        <Divider my="1" />
        <Stack h="70%" mb="2.5"  direction="column" >
        <Box borderRadius="md" justifyContent="center" h="10%" w="100%" bg="lightText" shadow="2">
        <Box   direction="row" w="200px" h="40px" >
           <Flex mt={1} ml={3} direction='row' alignItems="center">
            <Icon size="2xl" color="error.900" as={<Ionicons name="person-circle" />} />
            <Heading fontWeight="normal" fontSize="lg" ml={2}>User Profile</Heading>
            </Flex>   
          </Box>
     </Box>
        <Divider my="3 " />
        <Box borderRadius="md" justifyContent="center" h="10%" w="100%" bg="lightText" shadow="2">
        <Box   direction="row" w="200px" h="40px" >
           <Flex mt={1} ml={3} direction='row' alignItems="center">
            <Icon size="2xl" color="error.900" as={<Ionicons name="settings" />} />
            <Heading fontWeight="normal" fontSize="lg" ml={2}>Settings</Heading>
            </Flex>
          </Box>
     </Box>
        <Divider my="3 " />
        <Box borderRadius="md" justifyContent="center" h="10%" w="100%" bg="lightText" shadow="2">
        <Box   direction="row" w="200px" h="40px" >
           <Flex mt={1} ml={3} direction='row' alignItems="center">
            <Icon size="2xl" color="error.900" as={<MaterialIcons name="domain" />} />
            <Heading fontWeight="normal" fontSize="lg" ml={2}>Company Details</Heading>
            </Flex>
          </Box>
     </Box>
        <Divider my="3 " />
        <Box borderRadius="md" justifyContent="center" h="10%" w="100%" bg="lightText" shadow="2">
        <Box   direction="row" w="200px" h="40px" >
           <Flex mt={1} ml={3} direction='row' alignItems="center">
            <Icon size="2xl" color="error.900" as={<Ionicons name="exit" />} />
            <Heading fontWeight="normal" fontSize="lg" ml={2}>Reports</Heading>
            </Flex>
          </Box>
     </Box>
        <Divider my="3 " />
        <Box borderRadius="md" justifyContent="center" h="10%" w="100%" bg="lightText" shadow="2">
        <Box   direction="row" w="200px" h="40px" >
           <Flex mt={1} ml={3} direction='row' alignItems="center">
            <Icon size="2xl" color="error.900" as={<Ionicons name="exit" />} />
            <Heading fontSize="md" ml={2}>pue</Heading>
            </Flex>
          </Box>
     </Box>
        <Divider my="2 " />
        <Box borderRadius="md" justifyContent="center" h="10%" w="100%" bg="lightText" shadow="2">
        <Box   direction="row" w="200px" h="40px" >
           <Flex mt={1} ml={3} direction='row' alignItems="center">
            <Icon size="2xl" color="error.900" as={<Ionicons name="exit" />} />
            <Heading fontSize="md" ml={2}>Sign Out</Heading>
            </Flex>
          </Box>
     </Box>
          </Stack>
      </VStack>
    );
}