import * as React from 'react';
import {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
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
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown : false }}/>
      </Stack.Navigator>
    </NavigationContainer> :
    <AppLoading/>
  );
}

export default App;
