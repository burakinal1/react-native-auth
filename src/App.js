import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Header from './components/common/Header';
import LoginForm from './components/LoginForm'
import Button from './components/common/Button';
import Spinner from './components/common/Spinner';

export default class App extends Component {

	state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
    apiKey: 'AIzaSyC8B6dM3a8cxB4lLhffcyp2w23rCf_LE2Q',
    authDomain: 'authentication-6a4f9.firebaseapp.com',
    databaseURL: 'https://authentication-6a4f9.firebaseio.com',
    projectId: 'authentication-6a4f9',
    storageBucket: 'authentication-6a4f9.appspot.com',
    messagingSenderId: '413796223836'
  });

	firebase.auth().onAuthStateChanged((user) => {
		if(user) {
			this.setState({ loggedIn: true})
		 } else {
			this.setState({ loggedIn: false});
		  }	
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return(
					<Button onPress={() => firebase.auth().signOut()}> 
					Log Out 
					</Button>
					); 
			case false:
				return <LoginForm/>;
			default:
				return <Spinner size="large" />;
		}
	
	}

	render() {
		return(
			<View>
			<Header headerText= "Authentication" />
			{this.renderContent}
			</View> 
			);
	}
}