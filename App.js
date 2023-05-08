import React from 'react';
import {ThemeProvider} from './src/Styles/ThemeContext'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider, Box } from 'native-base';
import LoginScreen from './Components/Screen/LoginScreen';
import SingUpScreen from './Components/Screen/SingUp';
import CameraScreen from './Components/Screen/CameraScreen';
import ForgotScreen from './Components/Screen/ForgotPass';
import MainScreen from './Components/Screen/MainContainer';
import AddItemForm from './Components/Screen/AddItems';
import Prueba from './Components/Screen/Prueba';

const Stack = createStackNavigator();

function App() {
 

  

  return (
   
    <NativeBaseProvider>
  
        <NavigationContainer>
        <ThemeProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen}  />
            <Stack.Screen name="SignUp" component={SingUpScreen} />
            <Stack.Screen name="Forgot" component={ForgotScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Camera" component={CameraScreen} />
            <Stack.Screen name="AddItem" component={AddItemForm} />
            
          </Stack.Navigator>
          </ThemeProvider>
        </NavigationContainer>
       
    </NativeBaseProvider>
    
  );
}

export default App;
