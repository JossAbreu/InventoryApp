import React, { useImperativeHandle, useState } from "react";
import { Alert, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  Text,
  Heading,
  IconButton,
  View,
  Center,
  Input,
  Icon,
  Box,
  Button,
  PresenceTransition,
  Divider,
  Stack,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../src/Styles/styles";
import { Camera } from "expo-camera";
import { data } from "../../src/data/Data";
import CategoryScreen from "./CategoryScreen";
import ItemScreen from "./ItemsScreen";
import DataItemScreen from "./DataItemScreen";
import { ThemeContext } from "../../src/Styles/ThemeContext";

import NullItem from "./NullItem";
import { color } from "@rneui/base";

export default function ItemsScreen({ navigation }) {
  const { theme } = React.useContext(ThemeContext);
  const [Vista, setVista] = useState("category");
  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    setVista("category");
    setShowButton(false);
  };

  let ComponentesVista;

  if (Vista === "category") {
    ComponentesVista = (
      <CategoryScreen
        setShowButton={setShowButton}
        setVista={setVista}
      />
    );
  } else if (Vista === "item") {
    ComponentesVista = (
      <ItemScreen
        setShowButton={setShowButton}
        setVista={setVista}
      />
    );
  } else if (Vista === "dataItem") {
    ComponentesVista = (
      <DataItemScreen
        setShowButton={setShowButton}
        setVista={setVista}
      />
    );
  } else {
    ComponentesVista = (
      <CategoryScreen
        setShowButton={setShowButton}
        setVista={setVista}
      />
    );
  }

  // Ignorar estas lineas de codigo
  // let Screen = null;

  // if (data.length === 0) {
  //   Screen = <NullItem />;
  // } else {
  //   Screen = <CategoryScreen />;
  // }

  return (
    //contenido principal

    <Stack style={{ backgroundColor: theme.backgroundColor }} h="100%" w="100%">
      <Stack
        h="20"
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        p={5}
        mt={8}
        style={{ backgroundColor: theme.backgroundColor }}
      >
        <Heading style={{ color: theme.color }}>Pack</Heading>
        <Button
          p={0}
          w={10}
          h={10}
          marginRight={0}
          borderRadius={40}
          bg="red.500"
          color="white"
          onPress={() => navigation.navigate("Account")}
          rightIcon={
            <MaterialCommunityIcons name="cog" size={30} color="white" />
          }
        ></Button>
      </Stack>

      {/* // icono de camara */}

      <Stack
        flexDirection={"row-reverse"}
        w="100%"
        mb={2}
        h="5%"
        justifyContent={"center"}
        style={{
          elevation: theme.elevation,
          shadowColor: theme.shadowColor,
          shadowRadius: theme.shadowRadius,
        }}
      >
        <Stack justifyContent={"center"} w="60%">
          <Input
            style={{ backgroundColor: theme.inputBackgroundColor }}
            placeholder="Search"
            fontSize="xl"
            placeholderTextColor={theme.inputColor}
            w="95%"
            h={10}
            borderRadius="4"
            m={2}
            InputRightElement={
              <View
                bg={"red.500"} // Cambia el fondo del InputRightElement aquí
                justifyContent="center" // Centra verticalmente
                alignItems="center" // Centra horizontalmente
                roundedRight="4"
                h={"100%"} // Opcional: para redondear la esquina derecha del fondo
                p="2" // Opcional: para agregar relleno al fondo
              >
                <Icon
                  size="6"
                  color={theme.color}
                  as={<MaterialIcons name="search" />}
                />
              </View>
            }
          />
        </Stack>
        <IconButton
          m={2}
          onPress={() =>
            navigation.navigate("Camera", {
              animationTypeForReplace: "push",
            })
          }
          colorScheme="red"
          _icon={{
            as: Ionicons,
            size: "8",
            color: theme.color,
            name: "barcode-outline",
          }}
        />
        {showButton && (
          <IconButton
            m={2}
            onPress={handleClick}
            colorScheme="red"
            _icon={{
              as: Ionicons,
              size: "8",
              color: theme.color,
              name: "close",
            }}
          />
        )}
      </Stack>
      <Divider m={1} />

      {/* //contenido principal de items */}
      <View h="80%" w="100%">
     
        <Box  h='100%' id="Contenido"  >
   
          {ComponentesVista}
         
        </Box>
     
      </View>
      {/* /////////////////////////////       */}
    </Stack>
  );
}
