import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "../../src/Styles/ThemeContext";
import { Header, Button, Stack, Center, Heading } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function HomeScreen({ navigation }) {
  const { theme, FuntionchangeTheme, isDarkMode } =
    React.useContext(ThemeContext);

  return (
    <Stack flex={1} style={{ backgroundColor: theme.backgroundColor }}>
      <Stack
        h="20"
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        p={5}
        mt={8}
        style={{ backgroundColor: theme.backgroundColor }}
      >
        <Heading style={{ color: theme.color }}>DashBoard</Heading>
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
    </Stack>
  );
}
