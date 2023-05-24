import { NativeBaseProvider } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './src/screen/Chat';
import Main from './src/screen/Main';
import Scan from './src/screen/Scan';

const MainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer theme={MainTheme}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Main'
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='Chat' component={Chat} />
          <Stack.Screen name='Scan' component={Scan} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
