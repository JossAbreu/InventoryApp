import React, { useContext } from "react";
import { NativeBaseProvider, Button } from "native-base";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemeProvider } from "./src/Styles/ThemeContext";
import LoginScreen from "./Components/Screen/LoginScreen";
import SingUpScreen from "./Components/Screen/SingUp";
import CameraScreen from "./Components/Screen/CameraScreen";
import ForgotScreen from "./Components/Screen/ForgotPass";
import HomeScreen from "./Components/Screen/HomeScreen";
import PacksScreen from "./Components/Screen/PacksScreen";
import InventoryScreen from "./Components/Screen/InventoryScreen";
import DispatchScreen from "./Components/Screen/DispatchScreen";
import AddItemForm from "./Components/Screen/AddItems";
import AccountScreen from "./Components/Screen/AccountScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false, headerLeft: null }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SingUpScreen} />
            <Stack.Screen name="Forgot" component={ForgotScreen} />
            <Stack.Screen
              name="Main"
              options={{
                headerLeft: null,
                gestureEnabled: false,
                headerBackTitleVisible: false,
              }}
            >
              {() => (
                <Tab.Navigator
                  options={{}}
                  screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size, focused }) => {
                      let iconName;

                      if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                      } else if (route.name === "Pack") {
                        iconName = focused ? "package-variant" : "package";
                      } else if (route.name === "Inventory") {
                        iconName = focused
                          ? "text-box-search"
                          : "text-box-search-outline";
                      } else if (route.name === "Dispatch") {
                        iconName = focused ? "truck-delivery" : "truck";
                      }

                      return (
                        <MaterialCommunityIcons
                          name={iconName}
                          size={size}
                          color={color}
                        />
                      );
                    },
                    tabBarActiveTintColor: "red",
                    tabBarInactiveTintColor: "black",
                    tabBarActiveBackgroundColor: "white",
                    tabBarInactiveBackgroundColor: "white",

                    tabBarLabelStyle: {
                      fontSize: 12,
                    },
                    tabBarStyle: {},
                    tabStyle: {
                   borderRadius: 15,
                    tabBarActiveBackgroundColor: "white",
                    },
                  })}
                >
                  <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={({ navigation }) => ({
                      headerShown: false,
                      headerRight: () => (
                        <Button
                          p={0}
                          w={10}
                          h={10}
                          marginRight={2}
                          borderRadius={40}
                          bg="red.500"
                          color="white"
                          onPress={() => navigation.navigate("Account")}
                          rightIcon={
                            <MaterialCommunityIcons
                              name="menu"
                              size={30}
                              color="white"
                            />
                          }
                        ></Button>
                      ),
                    })}
                  />
                  <Tab.Screen
                    name="Pack"
                    component={PacksScreen}
                    options={({ navigation }) => ({
                      headerShown: false,
                      headerRight: () => (
                        <Button
                          p={0}
                          w={10}
                          h={10}
                          marginRight={2}
                          borderRadius={40}
                          bg="red.500"
                          color="white"
                          onPress={() => navigation.navigate("Account")}
                          rightIcon={
                            <MaterialCommunityIcons
                              name="account-circle"
                              size={30}
                              color="white"
                            />
                          }
                        ></Button>
                      ),
                    })}
                  />
                  <Tab.Screen
                    name="Inventory"
                    component={InventoryScreen}
                    options={({ navigation }) => ({
                      headerShown: false,
                    })}
                  />
                  <Tab.Screen
                    name="Dispatch"
                    component={DispatchScreen}
                    options={({ navigation }) => ({
                      headerShown: false,
                    })}
                  />
                </Tab.Navigator>
              )}
            </Stack.Screen>

            <Stack.Screen name="Camera" component={CameraScreen} />
            <Stack.Screen name="AddItem" component={AddItemForm} />
            <Stack.Screen name="Account" component={AccountScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}

export default App;
