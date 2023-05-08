import * as React from 'react';
import { View, Text } from 'react-native';
import {useThemeContext} from '../../src/Styles/ThemeContext'


export default function HomeScreen({ navigation }) {
    const [theme, toggleTheme] = useThemeContext();
    return (
        <View style={{backgroundColor: theme.backgroundColor, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text

                onPress={() => alert('This is the "Home" screen.')}
                style={{color:theme.color, fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
        </View>
    );
}