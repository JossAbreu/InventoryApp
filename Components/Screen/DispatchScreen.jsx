import React, { useState } from 'react';
import { StyleSheet, View,  TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { Center, Heading,FormControl, Stack,Input,Text, VStack,Box, Icon,Modal,Button,ScrollView, theme,IconButton, Divider } from 'native-base';
import {state} from '../../src/data/Data'

import { MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";
import {StylesTables} from '../../src/Styles/styles'




function DispachScreen ({navigation}) {
  const [showModal, setShowModal] = useState(false);






const AlertButton = () => (
  
  <TouchableOpacity  onPress={() => setShowModal(true)}>
    <Center > 
      <View shadow={5} style={StylesTables.btn}>
        <Text style={StylesTables.btnText}> Select </Text>
      </View>
    </Center>
  </TouchableOpacity>
);


  

    return (
      <VStack  flex={1} p={5} pt={35}>
        <Stack alignItems='center' >
          <Box    m={4} p={1} h={10} w='100%'>
            <Center alignItems="center" justifyContent='space-between'   h='100%' w='100%' flexDirection="row-reverse">
            <IconButton
        
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
        <Stack direction='row-reverse'>
            <Icon size="lg" color="red.500" as={<MaterialCommunityIcons name='truck-fast-outline'/>}></Icon>
           <Heading textAlign="center"  style={{color:theme.color}} fontSize="xl" >Dispach </Heading>
           </Stack>
           </Center>
          </Box>
        </Stack>
        <Divider mb={1}/>
        <Stack w="100%" bg="amber.500">
          <Table >
            <Row data={state.HeadTable} style={StylesTables.head} textStyle={StylesTables.text} />
            {state.DataTable.map((rowData, rowIndex) => (
              <TableWrapper key={rowIndex} style={StylesTables.row}>
                {rowData.map((cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    data={cellIndex === 4? (
                      <AlertButton  />
                    ) : (
                      cellData
                    )}
                    textStyle={StylesTables.text}
                  />
                ))}
              </TableWrapper>
            ))}
          </Table>
        </Stack>


        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Contact Us</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
                Cancel
              </Button>
              <Button onPress={() => {
              setShowModal(false);
            }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      </VStack>














    );
  }



export default DispachScreen;
