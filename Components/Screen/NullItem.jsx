import { Center,Box,Image ,Text,View} from 'native-base'
import React from 'react'
import { ThemeContext } from '../../src/Styles/ThemeContext'
 
function NullItem() {
  const { theme,} = React.useContext(ThemeContext);
  return (
   <Center>
<Box justifyContent="center" h="80%" w="80%">
        <Center>
          <View
            justifyContent="center"
            justifyItems="center"
            h="80%"
            w="80%"
          >
            <Center style={{elevation:theme.elevation}}>
              <Image
                
                source={require("../../assets/Image/box2.png")}
                style={{ width: 200, height: 200 }}
              />
            </Center>
          </View>
        </Center>
        <Center>
          <Text style={{color:theme.color}} fontSize="lg" fontWeight="bold">
            It's empty here{" "}
          </Text>
          <Text  style={{color:theme.color}} fontWeight="semibold">
            add your first item by tapping the{" "}
            <Text fontSize="lg" color="error.900">
              "+"
            </Text>{" "}
          </Text>
        </Center>
      </Box>

   </Center>
  )
}

export default NullItem