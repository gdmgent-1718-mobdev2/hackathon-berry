import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import style from '../utils/styles';

import * as firebase from 'firebase';
import { initFirebase } from '../utils/firebaseInit';

console.log(style);

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
      password: ''
    }
  }

  componentWillMount(){
    //firebase wordt hier ingeladen   
    initFirebase(firebase);
    
  }


handleChangeEmail(newEmail){
  //moet een geldig email adres zijn
  this.setState({email: newEmail})
}

handleChangePassword(newPassword){
  //moet 6 tekens bevatten
  this.setState({password: newPassword})
}

  handleSubmit(event) {
    console.log(this.state);
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
    
}


  render() {
    
    return (
      <View style={style.container}>
        <Text style={style.app_title}>Tuinder</Text>
        <Text style={style.title}>Log in</Text>
        <FormLabel labelStyle={style.sub_title}>Email</FormLabel>
        <TextInput onChangeText={(text) => this.handleChangeEmail(text)} value={this.state.email} style={style.input_field}/>
        <FormLabel labelStyle={style.sub_title}>Password</FormLabel>
        <TextInput onChangeText={(text) => this.handleChangePassword(text)} value={this.state.password} style={[style.input_field, style.input_field_password]} />
        
        <TouchableOpacity
         style={style.button_green}
         onPress={this.handleSubmit}
       >
         <Text style={style.button_green_text}> Log in </Text>
       </TouchableOpacity>
      </View>
    );
  }
};
