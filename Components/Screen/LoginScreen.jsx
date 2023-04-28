import { View } from "native-base"; 
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { useNavigation } from '@react-navigation/native';




function LoginScreen() {
  const navigation = useNavigation();
 
  function handlePress() {
    // contenido de acceso a home 
    navigation.navigate('Main', { screen: 'Home', params: { tab: 'Home' } });
  }


  return (
    <Center  w="100%" >


      <Box justifyContent="center" safeArea p="2" py="8" w="90%" maxW="290" style={{ width: "100%", height: "100%" }}>
        <Heading size="lg" textAlign="center" fontWeight="800" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
          Inventori Managament
        </Heading>
        <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" textAlign="center" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>User Id</FormControl.Label>
            <Input  />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input  type="password" />
            <Link onPress={() => navigation.navigate('Forgot')} _text={{ fontSize: "xs", fontWeight: "500", color: "light.600" }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button onPress={handlePress} mt="2" colorScheme="warmGray">
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{ color: "light.600", fontWeight: "medium", fontSize: "sm" }}
              onPress={() => navigation.navigate('SignUp')}
            >
              
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
     
      </Center>
  );
};

export default LoginScreen;
