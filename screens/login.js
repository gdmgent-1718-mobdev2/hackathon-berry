import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

import style from '../utils/styles';

import Header from '../components/Header'
//import * as firebase from 'firebase';
//import { initFirebase } from '../utils/firebaseInit';
import firebase from '../config/firebase';

console.log(style);

export default class LoginScreen extends React.Component {

  constructor() {
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

  static navigationOptions = {
    title: 'Login',
  };

  componentWillMount() {

  }


  handleChangeEmail(newEmail) {
    this.setState({ email: newEmail })
  }

  handleChangePassword(newPassword) {
    this.setState({ password: newPassword })
  }

  setStateFirebaseUid() {
    console.log(firebase.auth().currentUser.uid);
  }

  handleSubmit(event) {
    console.log('sending user credentials');
    console.log(firebase.auth());
    console.log(this.state);

    //bind self to this so I can still call this in the firebase function
    var self = this;

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function () {
        console.log('login successfull');
        self.setStateFirebaseUid();
        this.props.navigation.navigate('Home');
      })



      .catch(function (error) {
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
      <View style={style.container}>
        <Header style={style.header}>
          <Text style={style.app_title}>Tuinder</Text>
        </Header>
        <Text style={style.title}>Log in</Text>
        <FormLabel labelStyle={style.sub_title}>Email</FormLabel>
        <TextInput onChangeText={(text) => this.handleChangeEmail(text)} value={this.state.email} style={style.input_field} />
        <Text value={this.state.emailErrorMessage}></Text>
        <FormLabel labelStyle={style.sub_title}>Password</FormLabel>
        <TextInput onChangeText={(text) => this.handleChangePassword(text)} value={this.state.password} style={[style.input_field, style.input_field_password]} />

        <TouchableOpacity
          style={style.button_green}
          onPress={this.handleSubmit}
        >
          <Text style={style.button_green_text}> Log in </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[style.button_white, style.button_register]}
          onPress={() => this.props.navigation.navigate('Register')}
        >
          <Text style={style.button_white_text}> Register </Text>
        </TouchableOpacity>
      </View>
    );
  }
};
