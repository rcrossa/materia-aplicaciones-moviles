import React, {Component} from 'react';
import {View, TextInput, Text, Button, Alert} from "react-native";
import {StyleSheet} from "react-native";
import  firebase from 'firebase';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebaseConfig from './firebase';
import { HomeScreen } from './HomeScreen';

const firebaseApp =  firebase.initializeApp(firebaseConfig);


class Login extends Component{
    
    render(){
        
        const { user, signOut, signInWithGoogle} = this.props;
        return (
            <View>
                { user ? <Text>
                    Hola,  { user.displayName}</Text>: 
                    <Text>Please, Sign in</Text>
                }
                {
                    <Button onPress={signInWithGoogle} title='Sign in With Google' />
                }
            </View>
        )
    }
}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);
