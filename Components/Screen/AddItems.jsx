import React, { useState,useEffect } from 'react';
import { Container, Item, Input, Button, Text, View, Center, Box,Icon, IconButton, Divider ,Stack,VStack, Heading} from 'native-base';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
export default function AddItemForm() {
  const navigation = useNavigation();


  const [NameItem, setNameItem] = useState("");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    setShowButton(NameItem.length > 0);
  }, [NameItem]);

  const handleButtonPress = () => {
    // Lógica para manejar el botón cuando se presiona
  }

  function handlePressclose() {
    // contenido de acceso a home 
    navigation.navigate('Main');
  }


function handleInputChange(input, value) {
  if (input === 'input1') {
    setInput1(value);
    if (!isNaN(value) && !isNaN(input2)) {
      setResult(parseFloat(value) * parseFloat(input2));
    } else {
      setResult('');
    }
  } else {
    setInput2(value);
    if (!isNaN(input1) && !isNaN(value)) {
      setResult(parseFloat(input1) * parseFloat(value));
    } else {
      setResult('');
    }
  }
}

  
  
  const handleAddItem = () => {
    // Aquí podrías hacer algo con los datos del formulario
  }
  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View  alignItems="center" justifyContent="center" w="100%" h="100%">
      <View mt="10" w="100%" h="30%" justifyContent="center" bg="">
        <Stack display="flex" m={2} direction="row" justifyContent="space-between">
        <Icon
          ml={5}
          size="8"
          color="black"
          as={<MaterialIcons name="close" />}
          onPress={handlePressclose}
        />
       {showButton &&
        <Button onPress={handleButtonPress} bg="error.600"  w={20} h={10} >Save</Button>
       }
        </Stack>
        <Divider />
        <Center>
          <Box
            alignItems="center"
            w="70%"
            h="70%"
            shadow={5}
            borderRadius={"md"}
            bg="gray.50"
            justifyContent="center"
          >
        
            <Icon
              m="2"
              ml="0"
              size="20"
              color="red.400"
              as={<MaterialIcons name="add-photo-alternate" size={2} />}
            />
            <Text fontWeight="semibold" fontSize="xl">
              Add Photo
            </Text>
          </Box>
        </Center>
      </View>
      <Divider />
      <View w="100%" h="70%" bg="gray.100">
        <VStack direction="column" mb="2.5" mt="1.5" space={3}>
          <Center>
            <Box
              p={1}
              size="16"
              h={90}
              w="95%"
              bg="lightText"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              <Stack  direction="row">
                <Icon
                  color={"gray.400"}
                  size="lg"
                  as={<MaterialIcons name="folder" />}
                />
                <Box>
                  <Text color="gray.800" fontSize="md">
                    Item name
                  </Text>
                </Box>
              </Stack>
              <Input
                placeholder="Enter Name Item"
                borderColor="trueGray.100"
                h="70%"
                borderBottomWidth={"3"}
                fontSize="2xl"
                size={10}
                onChangeText={setNameItem}
              />
            </Box>
          </Center>
        </VStack>
        {/* //contenido de items */}
        <VStack p={2}>
        
  
          <Stack direction="column">
            <Stack
              p={2}
              shadow={5}
              bg="lightText"
              justifyContent="center"
              w="100%"
              h="100px"
              mb={2}
              direction="row"
            >
              
              <Input
                w={{
                  base: "50%",
                  md: "50%",
                }}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="add" />}
                    size={6}
                    ml="2"
                    color="red.400"
                  />
                }
                m={1}
                fontSize="xl"
                keyboardType="numeric"
                placeholder="Quantity"
                value={input1}
        onChangeText={(value) => handleInputChange('input1', value)}
              />

              <Input
                w={{
                  base: "50%",
                  md: "50%",
                }}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="notifications" />}
                    size={6}
                    ml="2"
                    color="red.400"
                  />
                }
                m={1}
                fontSize="xl"
                keyboardType="numeric"
                placeholder="Min level"
              
               
              />
            </Stack>

            <Stack
              p={2}
              shadow={5}
              bg="lightText"
              justifyContent="center"
              w="100%"
              h="100px"
             direction="row"
            >
              <Input
                w={{
                  base: "50%",
                  md: "50%",
                }}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="attach-money" />}
                    size={6}
                    ml="2"
                    color="red.400"
                  />
                }
                m={1}
                fontSize="xl"
                keyboardType="numeric"
                placeholder="Price"
                value={input2}
                onChangeText={(value) => handleInputChange('input2', value)}
              />

              <Input
                w={{
                  base: "50%",
                  md: "50%",
                }}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="payments" />}
                    size={6}
                    ml="2"
                    color="red.400"
                  />
                }
                m={1}
                fontSize="xl"
                keyboardType="numeric"
                placeholder="Total Value"
                value={result.toString() || ''}
                editable={false}
              />
            </Stack>
            <Divider />
            <Center>
            <Stack
              p={5}
            
              mb={2}
      
             direction="column"
            >
               <Center>
              <Box m={2} flexDirection="row"  justifyContent="center" borderTopWidth={2} borderBottomWidth={2} borderColor="red.500">
              
                            <Icon
                             size={8}
                           
                              as={<MaterialIcons name='qr-code-scanner' />}
                              color="red.500"
                            />
                          
                <Text ml={2} fontSize="xl">QR / BARCODES</Text>
                
              </Box>
              </Center>
              <Stack   justifyContent="center" direction="column">
                <Center>
                  <Stack direction="row">
                    <Box
                      
                      w="80%"
                      justifyContent="center"
                   h={40}
                      m={2}
                      
                     
                    >
                      <Center>
                        <Button
                        shadow={2}
                        w="66%"
                        h="60%"
                        onPress={() =>
                          navigation.navigate("Camera", {
                            animationTypeForReplace: "push",
                          })
                        }
                          leftIcon={
                            <Icon
                             
                              as={<MaterialIcons name='qr-code-scanner' />}
                              color="white"
                            />
                          }
                          colorScheme="muted"
                        >
                          LINK QR / BARCODE
                        </Button>
                      </Center>
                    </Box>
                  </Stack>
                </Center>
              </Stack>
            </Stack>
            </Center>
          </Stack>
          

        </VStack>
      </View>
    </View>
    </KeyboardAwareScrollView>
  );
};

