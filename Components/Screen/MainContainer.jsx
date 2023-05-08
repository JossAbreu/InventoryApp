import React from 'react'; 
import { NativeBaseProvider, Box, Text,View, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {styles} from '../../src/Styles/styles'
import HomeScreen from './HomeScreen'
import ItemsScreen from './PacksScreen'
import SearchScreen from './SearchScreen'
import AccountScreen from './AccountScreen'
function MainScreen({ }) {
 
  const [selected, setSelected] = React.useState(0)

  let Screen = null;
  switch (selected) {
    case 0:
      Screen = <HomeScreen/>
      break;
    case 1:
      Screen = <SearchScreen/> 
      break;
      case 2:
        Screen = <ItemsScreen/>
        break;
        case 3:
            Screen = <AccountScreen/>
            break;
    default:
      Screen = null;
      break;
  }

  return (

    <NativeBaseProvider>
      <VStack
        flex={1}
        bg="white"
        safeAreaTop
        width="100%"
        maxW="100%"
        alignSelf="center"
      >
 <Box id="Contenido" flex={1}>{
Screen
 }</Box>
 
    

       



        {/* Footer */}
        <HStack bg="white" alignItems="center" safeAreaBottom shadow={7}>
          <Pressable
          
            cursor="pointer"
            style={selected === 0 ? styles.selected : styles.text}
            opacity={selected === 0 ? 1 : 0.8}
            py="2"
            flex={1}
            onPress={() => { 
                
                setSelected(0);
              }}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? "home" : "home-outline"}
          
                  />
                }
                color= {selected === 0 ? "error.500"  : "black"}
                size={selected === 0 ? "xl"  : "md"}
              />
              <Text style={selected === 0 ? styles.selecteTextFooter : styles.FooterText  }   color="danger.500"  fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>

          <Pressable
            cursor="pointer"
            style={selected === 2 ? styles.selected : styles.text}
            opacity={selected === 2 ? 1 : 0.8}
            py="2"
            flex={1}
            onPress={() => { 
              
              setSelected(2);
            }}
          > 

            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 2 ? "package-variant" : "package"}
                  />
                }
                color= {selected === 2 ? "error.500"  : "black"}
                size={selected === 2 ? "xl"  : "md"}
              />
              <Text style={selected === 2 ? styles.selecteTextFooter : styles.FooterText  }   color="error.500" fontSize="12">
                Items
              </Text>
            </Center>
          </Pressable>

          <Pressable
            cursor="pointer"
              style={selected === 1 ? styles.selected : styles.text }
            opacity={selected === 1 ? 1 : 0.8}
            py="2"
            flex={1}
            onPress={() => { 
              
              setSelected(1);
            }}
          >
            <Center>
              <Icon
                mb="1"
                as={<MaterialIcons name="search" />}
                color= {selected === 1 ? "error.500"  : "black"}
                size={selected === 1 ? "xl"  : "md"}
              />
              <Text style={selected === 1 ? styles.selecteTextFooter : styles.FooterText  }  color="black" fontSize="12">
                Search
              </Text>
            </Center>
          </Pressable>
          <Pressable
           cursor="pointer"
            style={selected === 3 ? styles.selected : {}}
            opacity={selected === 3 ? 1 : 0.8}
            py="2"
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 3 ? "menu-open" : "menu"}
                  />
                }
                color= {selected === 3 ? "error.500"  : "black"}
                size={selected === 3 ? "xl"  : "md"}
              />
              <Text style={selected === 3 ? styles.selecteTextFooter : styles.FooterText  }  color="error.500" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </VStack>
    </NativeBaseProvider>
  );





  
}
  


  export default MainScreen;
  