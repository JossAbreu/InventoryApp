import * as React from "react";
import { View, Text,Dimensions, ScrollViewBase } from "react-native";
import { ThemeContext } from "../../src/Styles/ThemeContext";
import { Header, Button, Stack, Center,Icon, Heading,Input, Divider, ScrollView } from "native-base";
import { MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {state} from '../../src/data/Data'
export default function InventoryScreen({ navigation }) {
  const { theme } = React.useContext(ThemeContext);

  const { width, height } = Dimensions.get('window');



  
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
        <Heading style={{ color: theme.color }}>Inventory</Heading>
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
      <Stack flex={1}  style={{   alignItems: "center",     // backgroundColor: theme.backgroundColor, 
       }}
      >
          <Input
            style={{ backgroundColor: theme.inputBackgroundColor }}
            placeholder="Search Items "
            placeholderTextColor={theme.inputColor}
            w="95%"
            h={10}
            borderRadius="4"
            fontSize="14"
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
          <Divider/>
         <ScrollView  >
          <Stack  flex={1} w="100%" p="18" justifyItems="center" alignItems="center" paddingTop="30">
           
  <Table s style={{ width: width * 0.9, }} borderStyle={{ borderWidth: 0.5, borderRadius:"20",  borderColor: 'black' }}>

    <Row data={state.HeadTable} style={{ backgroundColor: 'gray', height: 50 }} textStyle={{  fontSize: width * 0.04, textAlign: 'center', margin: 5 }} />
    <Rows data={state.DataTable} textStyle={{ fontSize: width * 0.03, textAlign: 'center' }} style={{ height: 30 }} />
    
  </Table>
  
</Stack>
</ScrollView>
      </Stack>
    </Stack>
  );
}
