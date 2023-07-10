import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { Box, Center, Heading, Icon, Stack } from "native-base";
import axios from "axios";

const Item = ({ id,name, setVista, setShowButton }) => {
  const handleClick = () => {
    // setVista("item");
    setShowButton(true);
    alert(`ID de la categoría: ${id}`);
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
            <Heading fontSize="2xl">{name}</Heading>
        </Box>
      </Stack>
    </TouchableOpacity>
  );
};

const CategoryScreen = ({ setVista, setShowButton }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.3.38:3000/category")
      .then((response) => {
        const categoriesData = response.data.map((category) => ({
          id: category.Id,
          name: category.Name,
        }));
        setCategories(categoriesData); 
       
      })
      .catch((error) => {
        console.log("Error al obtener las categorías:", error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <Item id={item.id} name={item.name} setVista={setVista} setShowButton={setShowButton} />
  );
  

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 4,
    backgroundColor: "#dadada",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default CategoryScreen;
