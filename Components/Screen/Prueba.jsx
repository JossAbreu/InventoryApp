import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import {Box, Center, Icon, Stack} from 'native-base'
import {data} from '../../src/data/Tasks'
import { MaterialCommunityIcons, MaterialIcons,Ionicons } from '@expo/vector-icons';

const Item = ({ title, description }) => (
  <Stack p={4} direction="row" w="100%" >
  <Box h={20} bg="gray.50"  w="30%" mb={1}  shadow={6} p={4}  borderLeftRadius={10} >
    <Center>
   <Icon size={12} color="muted.600" as={<MaterialIcons name="folder"/>}></Icon>
   </Center>
  </Box>
  <Box h={20} w="70%"  mb={1}  shadow={1} p={4} bg="lightText" borderRadius={2} >
  <Center>
    <Text  style={styles.title}   >{title}</Text>
    </Center>
  </Box>
  </Stack>
);

const Prueba = () => {
  const [items, setItems] = useState(data);

  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} />
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default Prueba;
