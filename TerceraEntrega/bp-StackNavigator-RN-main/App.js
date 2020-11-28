import React, {Component, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import {HomeScreen} from "./Screens/HomeScreen";
import {DetailsScreen} from "./Screens/DetailsScreen";
import Login from "./Screens/LoginScreen";
const Stack = createStackNavigator();


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      logged:false
    }
  }

  render(){
    const { logged} = this.state;
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        {!logged ? (
            <Stack.Screen name="Login" component={Login}  initialParams={{ onLoginSuccess:() =>this.setState({logged:true})  }} options={{title:"Login"}}/>
             
          ) :  (
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
