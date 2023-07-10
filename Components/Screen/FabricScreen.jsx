import React, { Component } from 'react';
import { StyleSheet, View,  TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { Center, Heading, Stack,Text, VStack,Box } from 'native-base';
import {state} from '../../src/data/Data'
import {StylesTables} from '../../src/Styles/styles'
const AlertButton = ({ index, onPress }) => (
  <TouchableOpacity onPress={() => onPress(index)}>
    <Center>
      <View shadow={5} style={StylesTables.btn}>
        <Text style={StylesTables.btnText}> Select </Text>
      </View>
    </Center>
  </TouchableOpacity>
);

class FabricScreen extends Component {
  
  
  _alertIndex(index,navigation) {
    
    Alert.alert(`This is row ${index + 1}`);
    // navigation.navigate('Forgot');
  }

  render() {
 
  

    return (
      <VStack  flex={1} p={5} pt={35}>
        <Stack  alignItems='center'>
          <Box bg="gray.500"  shadow={5}  borderRadius={5} m={4} p={2} h={10} w={40}>
            <Center>
           <Heading textAlign="center"  color="white" fontSize="xl" >Table Fabric </Heading>
           </Center>
          </Box>
        </Stack>
        <Stack w="100%" bg="amber.500">
          <Table >
            <Row data={state.HeadTable} style={StylesTables.head} textStyle={StylesTables.text} />
            {state.DataTable.map((rowData, rowIndex) => (
              <TableWrapper key={rowIndex} style={StylesTables.row}>
                {rowData.map((cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    data={cellIndex === 4? (
                      <AlertButton
                        index={rowIndex}
                        onPress={() => this._alertIndex(rowIndex, this.props.navigation)}
                      />
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
      </VStack>
    );
  }
}


export default FabricScreen;
