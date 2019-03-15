import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Header from './components/common/Header';
import LoginForm from './components/LoginForm'


export default class App extends Component {

	componentWillMount() {
		firebase.initializeApp({
    apiKey: 'AIzaSyC8B6dM3a8cxB4lLhffcyp2w23rCf_LE2Q',
    authDomain: 'authentication-6a4f9.firebaseapp.com',
    databaseURL: "https://authentication-6a4f9.firebaseio.com",
    projectId: 'authentication-6a4f9',
    storageBucket: 'authentication-6a4f9.appspot.com',
    messagingSenderId: '413796223836'
  });
	}

	render() {
		return(
			<View>
			<Header headerText= "Authentication" />
			 <LoginForm />
			</View> 
			);
	}
}