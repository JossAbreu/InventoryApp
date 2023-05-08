
import React, { useImperativeHandle } from "react";
import { Alert, Image,TouchableOpacity,useState } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import {  Text,Fab, Heading,IconButton , View,Center, Input,Icon,Box,onOpen,Actionsheet,isOpen,onClose,useDisclose, VStack, Spacer, ZStack, Divider,  } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {styles} from '../../src/Styles/styles'
import { Camera } from 'expo-camera';
import {data} from '../../src/data/Tasks'
import Prueba from './Prueba'

import { useNavigation } from '@react-navigation/native';
import NullItem from "./NullItem";

export default function ItemsScreen() {
  const navigation = useNavigation();
    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();

      



      let Screen = null;


      if (data.length === 0) {
        Screen = <NullItem/>
      }

      else {
        Screen = <Prueba/>
      }
    

    return (
      //contenido principal
      
      <View h="100%" w="100%">
        
        <Center>
          <Heading justifyContent="space-evenly" m="2" fontSize="3xl">
            <Text textAlign="center">Items</Text>
          </Heading>
        </Center>

        {/* // icono de camara */}

        <Heading position="absolute" right={5}>
          <IconButton
            onPress={() =>
              navigation.navigate("Camera", {
                animationTypeForReplace: "push",
              })
            }
            colorScheme="red"
            _icon={{
              as: Ionicons,
              size: "8",
              color: "black",
              name: "barcode-outline",
            }}
          />
        </Heading>

        <Center>
         
          <View m="1">
            <Input
              placeholder="Search Items "
              width="80%"
              borderRadius="4"
              py="3"
              px="1"
              fontSize="14"
              InputLeftElement={
                <Icon
                  m="2"
                  ml="3"
                  size="6"
                  color="black"
                  as={<MaterialIcons name="search" />}
                />
              }
              InputRightElement={
                <Icon
                  m="2"
                  mr="3"
                  size="6"
                  color="black"
                  as={<MaterialIcons name="mic" />}
                />
              }
            />
          </View>
          <Divider m={1} />
        </Center>
{/* //contenido principal de items */}
        <View h="80%" w="100%">
        <Box id="Contenido" flex={1}>{
Screen
 }</Box>     
        </View>
  {/* /////////////////////////////       */}
        <View  bg="amber.500" w="100%" alignItems="center">
            <Fab
              onPress={onOpen}
              h="20"
              w="20"
              
              left="70%"
              renderInPortal={false}
              shadow={8}
              bg="error.500"
              bottom={50}
              size="md"
              icon={<Icon color="white" as={AntDesign} name="plus" size="5" />}
            />

            <Actionsheet isOpen={isOpen} onClose={onClose}>
              <Actionsheet.Content>
                <Box h={60} px={4} justifyContent="center">
                  <Text
                    fontSize="16"
                    color="gray.500"
                    _dark={{
                      color: "gray.300",
                    }}
                  >
                    Add
                  </Text>
                </Box>
                <Actionsheet.Item
                  onPress={() =>
                    navigation.navigate("AddItem" )
                  }
                >
                  Receive Items
                </Actionsheet.Item>

                <Actionsheet.Item
                  onPress={() => { 
                
                    setSelected(1);
                  }}
                
                >Organize Items</Actionsheet.Item>
                <Actionsheet.Item>Prepare Items</Actionsheet.Item>
              </Actionsheet.Content>
            </Actionsheet>
          </View>
         
      </View>
    
    );
}