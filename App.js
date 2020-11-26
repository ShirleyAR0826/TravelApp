import * as React from 'react';
import {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Flight from './src/screens/Flight';
import Hotel from './src/screens/Hotel';
import Transfers from './src/screens/Transfers';
import Tours from './src/screens/Tours';
import { useFonts } from 'expo-font';
import {AppLoading} from 'expo';

const Stack = createStackNavigator();

function App() {
let [isFontLoaded] = useFonts({
      'RobotoBold' : require('./src/fonts/Roboto-Bold.ttf'),
      'RobotoRegular' : require('./src/fonts/Roboto-Regular.ttf')
});

  return (
    isFontLoaded? 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown : false }}/>
        <Stack.Screen name="Flight" component={Flight} options={{ headerShown : false }}/>
        <Stack.Screen name="Hotel" component={Hotel} options={{ headerShown : false }}/>
        <Stack.Screen name="Transfers" component={Transfers} options={{ headerShown : false }}/>
        <Stack.Screen name="Tours" component={Tours} options={{ headerShown : false }}/>
      </Stack.Navigator>
    </NavigationContainer> :
    <AppLoading/>
  );
}

export default App;
