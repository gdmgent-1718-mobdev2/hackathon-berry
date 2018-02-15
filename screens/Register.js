import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

import style from '../utils/styles'

//import * as firebase from 'firebase';
//import { initFirebase } from '../utils/firebaseInit';
import firebase from '../config/firebase';

export default class RegisterScreen extends React.Component {

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
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(function(){
      this.props.navigation.navigate('Home');
    })
    .catch(function(error) {
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
        <Text style={style.title}>Registreren</Text>
        <FormLabel labelStyle={style.sub_title}>Email</FormLabel>
        <TextInput onChangeText={(text) => this.handleChangeEmail(text)} value={this.state.email} style={style.input_field}/>
        <Text value={this.state.emailErrorMessage}></Text>
        <FormLabel labelStyle={style.sub_title}>Paswoord</FormLabel>
        <TextInput onChangeText={(text) => this.handleChangePassword(text)} value={this.state.password} style={[style.input_field, style.input_field_password]} />
        <FormLabel labelStyle={style.sub_title}>bevestig paswoord</FormLabel>
        <TextInput onChangeText={(text) => this.handleChangePassword(text)} value={this.state.password} style={[style.input_field, style.input_field_password]} />
        
        <TouchableOpacity
        style={style.button_green}
        onPress={this.handleSubmit}
        onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text style={style.button_green_text}> Registreren </Text>
        </TouchableOpacity>
      </View>
    );
  }
};
