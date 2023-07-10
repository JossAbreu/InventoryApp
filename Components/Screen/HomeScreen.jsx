import React, { useContext } from "react";
import { View,Image } from "react-native";
import { ThemeContext } from "../../src/Styles/ThemeContext";
import { Header, Button, Stack, Center, Heading,Box,Avatar,Text,Icon,PresenceTransition } from "native-base";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const { theme, FuntionchangeTheme, isDarkMode } =
    React.useContext(ThemeContext);
 

  return (
   
    <Stack justifyContent='center'  h='100%' style={{ backgroundColor: theme.backgroundColor }}>
       <PresenceTransition visible={true} initial={{
      opacity: 0,
      
      scaleX: 0
    }} animate={{
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 500
      }
    }}>
      <Stack
        h="10%"
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
<Stack direction="row" alignItems="center" justifyContent="center" h="20%" >
  <Box shadow={8} p={1} m={1} bg="white" justifyContent="center" alignItems="center" w="40%" borderRadius="xl" h="150" >
    <Heading size="md">Welcome   </Heading>
   <Text textTransform="capitalize"  textAlign="center" >Thanks for choosing us ! 🎊 🎉</Text>
  </Box>
  <Box shadow={8} m={1} p={1} justifyContent="center" alignItems="center" bg="white" w="50%" borderRadius="xl" h="130" >
  
  <Heading textAlign="center" size="md">A fast and fun way to be in <Text color="red.500">control </Text>   </Heading>
  </Box>
</Stack>
<Stack direction="row" alignItems="center" justifyContent="center" h="20%" >
 
  <Box shadow={8}  m={1} p={1} justifyContent="center" alignItems="center" bg="white" w="90%" borderRadius="xl" h="130" >
  
  <Heading textTransform="capitalize"  textAlign="center" size="lg">improves <Text color="green.400">efficiency</Text> and <Text color="blue.700">organization</Text>  </Heading>
  </Box>
</Stack>

<Stack direction="row" alignItems="center" justifyContent="center" h="20%" >
<Box shadow={8} m={1} p={1} justifyContent="center" alignItems="center" bg="white"  w="50%" borderRadius="xl" h="130" >
  <Icon size={10} color="yellow.500" shadow={8} left= "70%" top="10%" position='absolute'  as={<MaterialCommunityIcons name="white-balance-sunny"/>}></Icon>

  <Icon size={8} color="blue.500" shadow={8} left= "10%" top="10%" position='absolute'  as={<MaterialCommunityIcons name="cloud"/>}></Icon>
  <Icon size={10} color="blue.500" left= "20%" top="15%" position='absolute'  as={<MaterialCommunityIcons name="cloud"/>}></Icon>


<Box w="99%" h="30%" left="4%" position="absolute"   top="76.9%"    bg="amber.200" borderBottomRadius={10} ></Box>
<Box w="20%" h="30%" position="absolute"  left={0} top="76.9%" borderRightWidth={2} borderRightColor="blue.400" borderRightRadius={6} borderBottomLeftRadius={10}  bg="blue.300" borderWidth={0} ></Box>

<Icon size={10} color="green.500" left= "70%" top="65%" position='absolute'  as={<MaterialCommunityIcons name="palm-tree"/>}></Icon>
<Icon size={8} color="green.500" left= "86%" shadow={5} top="80%" position='absolute'  as={<MaterialCommunityIcons name="palm-tree"/>}></Icon>
<Icon size={6} color="yellow.800" shadow={5} left= "60%" top="75%" position='absolute'  as={<MaterialCommunityIcons name="palm-tree"/>}></Icon>
<Icon size={8} color="red.400" left= "85%" top="50%" position='absolute'  as={<MaterialCommunityIcons name="lighthouse-on"/>}></Icon>
<Icon size={5} color="red.500" left= "30%" top="65%" position='absolute'  as={<MaterialCommunityIcons name="tower-beach"/>}></Icon>
<Icon size={3} color="blue.900" left= "5%" shadow={2} top="78%" position='absolute'  as={<MaterialCommunityIcons name="water-polo"/>}></Icon>

  </Box>
  
  <Box shadow={8} p={1} m={1} bg="white" justifyContent="center" alignItems="center" w="40%" borderRadius="xl" h="150" >
  <Heading textTransform="capitalize" textAlign="center" size="sm"> <Text size="lg" color="red.500">"</Text>Make inventory a simple task with our powerful app.<Text size="lg" color="red.500">"</Text></Heading>
  </Box>
  
</Stack>

<Stack direction="row" alignItems="center" justifyContent="center" h="25%" >
 
  <Box shadow={8} flexDirection="row" justifyContent="center"  m={1} p={1}  alignItems="center" bg="white" w="95%" borderRadius="xl" h="130" >
  
    <Image
    position="absolute"
          source={require('../../assets/Image/delivery.jpeg')}
          style={{ width: '100%', height: '100%' }}
        />
 
  </Box>
</Stack>
</PresenceTransition>
    </Stack>
  
  );
}
