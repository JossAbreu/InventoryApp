
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  { NativeBaseProvider } from 'native-base'
import LoginScreen from './Components/Screen/LoginScreen';
import SingUpScreen from './Components/Screen/SingUp';


import ForgotScreen from './Components/Screen/ForgotPass'
import MainScreen from './Components/Screen/MainContainer';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
      <Stack.Navigator  screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SingUpScreen} />
      <Stack.Screen name="Forgot" component={ForgotScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}



export default App;
