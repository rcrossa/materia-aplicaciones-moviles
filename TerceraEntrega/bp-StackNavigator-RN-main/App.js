import React, {Component, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import {HomeScreen} from "./Screens/HomeScreen";
import {DetailsScreen} from "./Screens/DetailsScreen";
import Login from "./Screens/LoginScreen";
import {firebaseConfig} from './Screens/firebase';
import withFirebaseAuth from 'react-with-firebase-auth';
const Stack = createStackNavigator();


export default class App extends Component {


  render(){
    const { user} = this.props;
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        {!user ? (
            <Stack.Screen name="Login" component={Login} options={{title:"Login"}}/>
             
          ) : user > 1 (
            <>
              <Stack.Screen name="Home" component={HomeScreen} options={{title:"Inicio"}}/>
              <Stack.Screen name="Details" component={DetailsScreen} options={{title:"Detalles"}}/>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}
