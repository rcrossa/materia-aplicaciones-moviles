import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import {HomeScreen} from "./Screens/HomeScreen";
import {DetailsScreen} from "./Screens/DetailsScreen";
;
const Stack = createStackNavigator();

export default class App extends Component {
  
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{title:"Inicio"}}/>
          <Stack.Screen name="Details" component={DetailsScreen} options={{title:"Detalles"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}
