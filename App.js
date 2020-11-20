import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown : false }}/>
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown : false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
