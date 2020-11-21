import React, {Component} from 'react';
import witFirebaseAuth  from 'react-with-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';

const firebaseApp =  firebase.initializeApp(firebaseConfig);

class Login extends Component{
    render(){
        const { user, SignOut, SignInWithGoogle} = this.props;
        return (
            <div>
                { user ? <p>
                    Hello,  { user.displayName}</p>: 
                    <p>Please, Sign in</p>
                }
                {
                    user ? <button onClick={SignOut}> Sign Out</button>
                    : <button onClick={SignInWithGoogle}> Sign in With</button>
                }
            </div>
        )
    }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider : new firebase.auth.GoogleAuthProvider(),
};
export default witFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);