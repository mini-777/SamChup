import { NativeBaseProvider } from 'native-base';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from './src/screen/Chat';
import Main from './src/screen/Main';
import Scan from './src/screen/Scan';
import Login from './src/screen/Login';
import Release from './src/screen/Release';
import Stock from './src/screen/Stock';
import Receipt from './src/screen/Receipt';
import Order from './src/screen/Order';
import StockOrder from './src/screen/StockOrder';
import OrderCount from './src/screen/OrderCount';

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
            name='Login'
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='Main'
            component={Main}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='Chat' component={Chat} />
          <Stack.Screen name='Scan' component={Scan} />
          <Stack.Screen
            name='OrderCount'
            component={OrderCount}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='Release'
            component={Release}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='Stock' component={Stock} />
          <Stack.Screen
            name='Receipt'
            component={Receipt}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='Order' component={Order} />
          <Stack.Screen name='StockOrder' component={StockOrder} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
