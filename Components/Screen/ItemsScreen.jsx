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
    <TouchableOpacity onPress={handleClick}>
      <Stack p={4} direction="row" w="100%">
        <Box h={20}       shadow={1} w="30%" mb={1} bg="gray.400" p={4} borderLeftRadius={10}>
          <Center>
            <Icon
              size={12}
              color="#000000.500"
              as={<MaterialCommunityIcons name="view-list" />}
            />
          </Center>
        </Box>
        <Box
          h={20}
          w="70%"
          mb={1}
    
          p={4}
          bg="gray.100"
          borderRadius={2}
        >
          <Center>
            <Text style={stylesx.title}>{title}</Text>
          </Center>
        </Box>
      </Stack>
    </TouchableOpacity>
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

const stylesx = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default ItemScreen;
