import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider, Box, Text, VStack, Icon, HStack, Pressable } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ThemeContext } from '../../src/Styles/ThemeContext';
import styles from '../../src/Styles/styles';

function MainScreen() {
  const [selected, setSelected] = useState(0);
  const { theme } = React.useContext(ThemeContext);
  const navigation = useNavigation();

  const navigateToScreen = (index, screenName) => {
    setSelected(index);
    navigation.navigate(screenName);
  };



  return (
    <NativeBaseProvider >
      <VStack flex={1} bg="red" safeAreaTop width="100%" maxW="100%" alignSelf="center">
        {/* Contenido de la pantalla */}
        {selected === 0 && <HomeScreen />}
        {selected === 1 && <PacksScreen />}
        {selected === 2 && <SearchScreen />}
        {selected === 3 && <AccountScreen />}
        {selected === 4 && <DispatchScreen />}

        {/* Footer */}
        <HStack alignItems="center" safeAreaBottom shadow={7}>
          {/* <Pressable
            cursor="pointer"
            style={selected === 0 ? [selectedTabStyle, styles.selected] : [unselectedTabStyle, styles.text]}
            opacity={selected === 0 ? 1 : 0.8}
            py="2"
            flex={1}
            onPress={() => navigateToScreen(0, 'Home')}
          >
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 0 ? "home" : "home-outline"}
                />
              }
              color={selected === 0 ? "error.500" : theme.color}
              size={selected === 0 ? "xl" : "md"}
            />
            <Text style={selected === 0 ? styles.selecteTextFooter : { color: theme.color }} fontSize={12}>
              Home
            </Text>
          </Pressable>

          <Pressable
            cursor="pointer"
            style={selected === 1 ? [selectedTabStyle, styles.selected] : [unselectedTabStyle, styles.text]}
            opacity={selected === 1 ? 1 : 0.8}
            py="2"
            flex={1}
            onPress={() => navigateToScreen(1, 'Packs')}
          >
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 1 ? "package-variant" : "package"}
                />
              }
              color={selected === 1 ? "error.500" : theme.color}
              size={selected === 1 ? "xl" : "md"}
            />
            <Text style={selected === 1 ? styles.selecteTextFooter : { color: theme.color }} fontSize={12}>
              Packs
            </Text>
          </Pressable>

          Resto de botones... */}
        </HStack>
      </VStack>
    </NativeBaseProvider>
  );
}

export default MainScreen;
