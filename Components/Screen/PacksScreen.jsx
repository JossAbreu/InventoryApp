
import React from "react";
import { Image } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { Container, Text,Fab, Heading,CheckIcon,IconButton , View,Center, NativeBaseProvider,Input,Icon,Box,Thumbnail,Button,onOpen,Actionsheet,isOpen,onClose,useDisclose, VStack, Spacer, ZStack, Flex } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {styles} from '../../src/Styles/styles'

export default function ItemsScreen({ navigation }) {

    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();




    return (
      //vontenido principal
      <View h="100%" w="100%">
        <Center>
        <Heading
       
          justifyContent="space-evenly"
          m="2"
          fontSize="3xl"
        >
          <Text textAlign="center">Iteeems</Text>
          
        </Heading>
        </Center>
<Heading  position="absolute"
            right={5}>
                <IconButton colorScheme="red"  _icon={{
        as: Ionicons,
        size:"8",
        color:"black",
        name: "barcode-outline",
      }} />

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
        </Center>

        <View h="85%" w="100%">
          <Center>
            <Box justifyContent="center" h="80%" w="80%">
              <Center>
                <View
                  justifyContent="center"
                  justifyItems="center"
                  h="80%"
                  w="80%"
                >
                  <Center>
                    <Image
                      shadow="2"
                      source={require("../../assets/Image/box2.png")}
                      style={{ width: 200, height: 200 }}
                    />
                  </Center>
                </View>
              </Center>
              <Center>
                <Text fontSize="lg" fontWeight="bold">
                  It's empty here{" "}
                </Text>
                <Text fontWeight="semibold">
                  add your first item by tapping the{" "}
                  <Text fontSize="lg" color="error.900">
                    "+"
                  </Text>{" "}
                </Text>
              </Center>
            </Box>
          </Center>
          <View w="100%" alignItems="center">
            <Fab
              onPress={onOpen}
              position="relative"
              h="20"
              w="20"
              top={0.5}
              left= {80}
              renderInPortal={false}
              shadow={8}
              bg="error.500"
              bottom={50}
              size="md"
              icon={<Icon color="white" as={AntDesign} name="plus" size="4" />}
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
                <Actionsheet.Item>Add Items</Actionsheet.Item>

                <Actionsheet.Item>Add Folder</Actionsheet.Item>
              </Actionsheet.Content>
            </Actionsheet>
          </View>
        </View>
      </View>
    );
}