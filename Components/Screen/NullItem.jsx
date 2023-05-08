import { Center,Box,Image ,Text,View} from 'native-base'
import React from 'react'

function NullItem() {
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
            <Center>
              <Image
                shadow="2"
                source={require("../../assets/Image/box2.png")}
                style={{ width: 200, height: 200 }}
              />
            </Center>
          </View>
        </Center>
        <Center>
          <Text fontSize="lg" fontWeight="bold">
            It's empty here{" "}
          </Text>
          <Text fontWeight="semibold">
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