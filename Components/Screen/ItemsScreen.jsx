import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  Box,
  Center,
  Icon,
  Fab,
  onOpen,
  Actionsheet,
  isOpen,
  onClose,
  useDisclose,
  Stack,
  Heading,
  PresenceTransition,
} from "native-base";
import { Items } from "../../src/data/Data";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { ThemeContext } from "../../src/Styles/ThemeContext";
import { styles } from "../../src/Styles/ScreenMode";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Item = ({ title, description, setVista, setShowButton }) => {
  const handleClick = () => {
    setVista("dataItem");
    setShowButton(true);
  };

  return (
    <PresenceTransition visible={true} initial={{
      opacity: 0,
    
      translateY: 100
    }} animate={{
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 400
      }
    }}> 

    <TouchableOpacity onPress={handleClick}>
      <Stack p={4} direction="row" w="100%">
        <Box h={20}shadow={1} w="30%" mb={1} bg="gray.400" p={4} borderLeftRadius={10}>
          <Center>
            <Icon
              size={12}
              color="black"
              as={<MaterialCommunityIcons name="view-list" />}
            />
          </Center>
        </Box>
        <Box
          h={20}
          w="70%"
          p={4}
          bg="gray.100"
          borderRadius={2}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
            <Heading fontSize="2xl">{title}</Heading>
        </Box>
      </Stack>
    </TouchableOpacity>
    </PresenceTransition> 
  );
};

const ItemScreen = ({ setVista, setShowButton }) => {
  const { theme } = React.useContext(ThemeContext);
  const [items, setItems] = useState(Items);
  const navigation = useNavigation();

  const { isOpen, onOpen, onClose } = useDisclose();

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      description={item.description}
      setVista={setVista}
      setShowButton={setShowButton}
    />
  );

  return (
    <>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View bg="amber.500" w="100%" alignItems="center">
        <Fab
          onPress={onOpen}
          h="16"
          w="16"
          left="70%"
          renderInPortal={false}
          shadow={3}
          bg="error.500"
          bottom={50}
          size="sm"
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
            <Actionsheet.Item onPress={() => navigation.navigate("AddItem")}>
              Receive Items
            </Actionsheet.Item>

            <Actionsheet.Item
              onPress={() => {
                setSelected(1);
              }}
            >
              Organize Items
            </Actionsheet.Item>
            <Actionsheet.Item>Prepare Items</Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </View>
    </>
  );
};



export default ItemScreen;
