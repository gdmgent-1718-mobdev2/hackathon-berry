import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Header from '../components/Header'
//import * as firebase from 'firebase';
//import { initFirebase } from '../utils/firebaseInit';
import firebase from '../config/firebase';

export default class LoginScreen extends React.Component {

  constructor(){
    super();
    
    //necessary?
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

    //necessary!
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
    }
  }

  componentWillMount(){
    
  }


handleChangeEmail(newEmail){
  this.setState({email: newEmail})
}

handleChangePassword(newPassword){
  this.setState({password: newPassword})
}

setStateFirebaseUid(){
  console.log(firebase.auth().currentUser.uid);
}

  handleSubmit(event) {
    console.log('sending user credentials');
    console.log(firebase.auth());
    console.log(this.state);
    
    //bind self to this so I can still call this in the firebase function
    var self = this;

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(function(){
      console.log('login successfull');
      self.setStateFirebaseUid();
    })

  
    
    .catch(function(error) {
      // Handle Errors here.
      console.log('error');
      
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
  }
  


  render() {
    
    return (
      <View style={styles.container}>
        <Header></Header>
        <Text>Log in</Text>
        <FormLabel>Email</FormLabel>
        <TextInput style={styles.emailField} onChangeText={(text) => this.handleChangeEmail(text)} value={this.state.email} />
        <Text value={this.state.emailErrorMessage}></Text>
        <FormLabel>Password</FormLabel>
        <TextInput style={styles.passwordField} onChangeText={(text) => this.handleChangePassword(text)} value={this.state.password} />
        
        <Button
          title='Log in'
          onPress={ this.handleSubmit }
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',

  },
  emailField: {
    width: 200,
    height: 50,
    backgroundColor: 'powderblue'
  },
  passwordField: {
    width: 200,
    height: 50,
    backgroundColor: 'powderblue'
  }
});
