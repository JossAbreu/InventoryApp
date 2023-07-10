import React, { useState, useEffect, useRef } from 'react';
import {  StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { Box, Center,Icon, Stack, Button, Heading, Text, VStack,useToast } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const cameraRef = useRef(null);
  const toast = useToast();
  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);

    toast.show({
      duration: 1700,
      placement:'top',
        render: () => {
          return <Box  bg='white' h='50%' shadow={5} w='100%' ml={5} justifyContent='center' flexDirection='row-reverse'  p={1}  mt={20} alignItems='center'  rounded="lg"  >
                 <Heading color="black" fontWeight="bold" textAlign={'center'} size={'sm'}> <Text color='red.500' >{data}</Text> has been scanned!</Heading>
                <Icon color='green.500' size={8} as={<MaterialCommunityIcons name='check'/>}></Icon>
                </Box>;
        }
      });

  
  };

  const toggleFlash = () => {
    setFlashOn(!flashOn);
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <VStack flex={1} justifyContent="center">
     
      <Camera
      
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        ref={cameraRef}
        flashMode={flashOn ? Camera.Constants.FlashMode.torch : Camera.Constants.FlashMode.off}
      />
       <Stack left='80%' top='10%' position='absolute'>
      <TouchableOpacity onPress={toggleFlash}>
          <Ionicons
            name={flashOn ? 'flash' : 'flash-off'}
            size={26}
            color="white"
            style={{ marginHorizontal: 10 }}
          />
        </TouchableOpacity>
      </Stack>
      <Stack alignItems="center" justifyContent="center">
        <Box
          w="50%"
          h="50%"
          borderWidth={5}
          p={4}
          fontSize="2xl"
          justifyContent="center"
          borderColor="white"
          borderRadius="xl"
        >
          <Center>
            <Center
              borderColor="white"
              borderWidth={4}
              borderStyle={'dashed'}
              borderRadius="xl"
              w="80%"
              h="80%"
            ></Center>
          </Center>
        </Box>
      </Stack>
      <Center>
        <Box mt='30%' w={20} h={20}>
          {scanned && (
            <Button
              w="100%"
              h="100%"
              bg="white"
              shadow={5}
              borderRadius="full"
              borderColor="white"
              borderWidth={2}
              fontSize="2xl"
              color={'black'}
              onPress={() => setScanned(false)}
            >
              <Text>Scan</Text>
            </Button>
          )}
        </Box>
       
      </Center>
    </VStack>
  );
}
