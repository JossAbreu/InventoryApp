import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Box, Center, Heading, Icon, Stack } from "native-base";
import { data } from "../../src/data/Data";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { ThemeContext } from "../../src/Styles/ThemeContext";
import { styles } from "../../src/Styles/ScreenMode";

const Item = ({ title, description, setVista, setShowButton }) => {
  const handleClick = () => {
    setVista("item");
    setShowButton(true);
  };

  return (
    <TouchableOpacity onPress={handleClick}>
      <Stack p={4} direction="row" w="100%">
        <Box h="16" w="30%"   shadow={1} bg="gray.400" p={4} borderLeftRadius={10}>
          <Center>
            <Icon
              size={12}
              color="muted.600"
              as={<MaterialIcons name="apps" />}
            />
          </Center>
        </Box>
        <Box
          h="16"
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
  );
};

const CategoryScreen = ({ setVista, setShowButton }) => {

  const [items, setItems] = useState(data);

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      description={item.description}
      setVista={setVista}
      setShowButton={setShowButton}
    />
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
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

export default CategoryScreen;
