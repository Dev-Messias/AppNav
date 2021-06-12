import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Pages
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';

const Stack = createStackNavigator();

export default function App(){
  return(
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
       <Stack.Screen 
       name="Home" 
       component={Home} 
       options={{
         headerShown: true
       }}
       />
       <Stack.Screen name="Sobre" component={Sobre} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}