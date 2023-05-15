import React, { useState } from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import { ThemeContext } from "../../src/Styles/ThemeContext";
import { Header, Button, Stack, Center, Heading } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { dateItems } from "../../src/data/Data";

import {
  Table,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";

export default function DataItemScreen({ navigation, setCurrentView, ses }) {
  const [dataItems, setDataItems] = useState(dateItems);

  const handleClick = () => {
    setCurrentView("item");
  };
 

  const addData = (newData) => {
    const updatedDataTable = [...dataItems.DataTable, newData];
    setDataItems({ ...dataItems, DataTable: updatedDataTable });
  };

  const removeData = (index) => {
    const updatedDataTable = [...dataItems.DataTable];
    updatedDataTable.splice(index, 1);
    setDataItems({ ...dataItems, DataTable: updatedDataTable });
  };

  const { width, height } = Dimensions.get("window");
  const { theme } = React.useContext(ThemeContext);

  return (
    <ScrollView>
      <Stack flex={1} w="100%" p="18" justifyItems="center" alignItems="center" paddingTop="30">
        <Table
          style={{ width: width * 0.9 }}
          borderStyle={{
            borderWidth: 0.5,
            borderRadius: 20,
            borderColor: "black",
          }}
        >
          <Row
            data={dataItems.HeadTable}
            style={{
              backgroundColor: "gray",
              height: 50,
            }}
            textStyle={{
              fontSize: width * 0.04,
              textAlign: "center",
              margin: 5,
            }}
          />
          <Rows
            data={dataItems.DataTable}
            textStyle={{
              fontSize: width * 0.03,
              textAlign: "center",
              color:theme.color,
            }}
            style={{ backgroundColor:theme.backgroundColor, height: 30 }}
          />
        </Table>
      </Stack>

      <Stack alignItems="center">
        <Button bg="blue.500" w={20} m={3}  onPress={() => addData(["New Name", "Red", "10", "15,000"])}>
          Add
        </Button>
        <Button bg="red.500" w={20} m={3} onPress={() => removeData(0)}>Remove</Button>
      </Stack>
    </ScrollView>
  );
}
