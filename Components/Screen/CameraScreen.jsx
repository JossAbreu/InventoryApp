import React, { useState, useEffect,useRef  } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {Box, Center, Stack,Button, Heading} from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const scannerRef = useRef(null);
  const [barcodeData, setBarcodeData] = useState(null);


  const handleFlashToggle = () => {
    if (scannerRef.current) {
      if (flashOn) {
        Flasher.setFlashMode(Flasher.constants.FLASH_MODE_OFF);
        setFlashOn(false);
      } else {
        Flasher.setFlashMode(Flasher.constants.FLASH_MODE_TORCH);
        setFlashOn(true);
      }
    }
  };
  
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
       onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
       style={StyleSheet.absoluteFillObject}
       ref={scannerRef}
      />
    <Stack  justifyContent="center" p={5} w="100%" h="80%">
      <Center >
       
        <Box w="80%"   h="70%" borderWidth={5}  fontSize="2xl" justifyContent="center" borderColor="gray.400" borderRadius="xl" >
          <Center>
<Center borderColor="red.400" borderWidth={4} borderStyle={'dashed'} borderRadius="xl"  w="80%" h="80%">
        
        </Center>
        </Center>
        </Box>
        </Center>
        </Stack>
         
<Center>

<TouchableOpacity style={styles.flashButton} onPress={handleFlashToggle}>
        <Text style={styles.buttonText}>{flashOn ? 'Apagar Flash' : 'Encender Flash'}</Text>
      </TouchableOpacity>

        <Box w={20} h={20}   >
          
      {scanned && <Button w="100%" h="100%" bg="gray.500" borderRadius="full" borderColor="red.500" borderWidth={2}  fontSize="2xl" color={'amber.700'} onPress={() => setScanned(false)} >Scan</Button>}
      </Box>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  scannedLocation: {
    backgroundColor: 'black',
     
  },
  scannedContainer: {
    backgroundColor: '##ffffff',

  },
});
