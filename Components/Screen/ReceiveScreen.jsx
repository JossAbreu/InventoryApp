import * as React from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "../../src/Styles/ThemeContext";
import { Header, Button, Stack, Center, Heading, PresenceTransition } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

function ReceiveScreen({ navigation }) {
  const { theme } = React.useContext(ThemeContext);
  const isFocused = useIsFocused();
  const [isVisible, setIsVisible] = React.useState(false); // Establecer el estado inicial en false

  React.useEffect(() => {
    setIsVisible(isFocused); // Actualizar el estado isVisible cuando la pantalla está enfocada

    return () => {
      setIsVisible(false); // Restablecer el estado isVisible cuando la pantalla pierde el enfoque
    };
  }, [isFocused]);

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
        <Heading style={{ color: theme.color }}>Receive</Heading>
        <Button
          p={0}
          w={10}
          h={10}
          marginRight={0}
          borderRadius={40}
          bg="red.500"
          color="white"
          onPress={() => navigation.navigate("Account")}
          rightIcon={<MaterialCommunityIcons name="cog" size={30} color="white" />}
        ></Button>
      </Stack>

      <Stack alignItems={"center"} justifyContent="center" flex={1}>
        <PresenceTransition
          visible={isVisible} // Utilizar el estado isVisible para controlar la visibilidad de la animación
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 550,
            },
          }}
        >
          <Heading textAlign="center" m={3}>
            Select Option
          </Heading>

          <Stack
            direction={"row"}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: theme.backgroundColor,
            }}
          >
            <Button onPress={() => navigation.navigate("Hadware")} shadow={5} bg={"gray.600"} w={32} h={12} m={2}>
              Hadware
            </Button>
            <Button onPress={() => navigation.navigate("Fabric")} shadow={5} bg={"gray.600"} w={32} h={12} m={2}>
              Fabric
            </Button>
          </Stack>
        </PresenceTransition>
      </Stack>
    </Stack>
  );
}

export default ReceiveScreen;
