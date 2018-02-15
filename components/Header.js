import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import firebase from '../config/firebase';

export default class Header extends React.Component {

  constructor(){
    super();

    this.state = {
      email: '',
    }
  }

  componentWillMount(){
    console.log('get dat auth');
    console.log(firebase.auth());
    
    let self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log('user is logged in');
        console.log('');
        
        
        self.setHeaderEmail(user.email);
      } else {
        console.log('user is logged out');
        // No user is signed in.
      }
    });
  }

  setHeaderEmail(email){
    this.setState({email: email});
  }

  logOut(){

    //log out werk nog niet want header heeft geen toegang tot navigation
    //ToDo: log out function als aparte screen toevoegen

    let self = this;
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('logged out successfully');
      //self.props.navigation.navigate('Register');
    }, function(error) {
      // An error happened.
      console.log('error logging out');
      
    });
  }

  render() {
    
    return (
      <View style={styles.header}>
        <LoggedInAs email={this.state.email}></LoggedInAs>
      </View>
    );
  }
}

class LoggedInAs extends React.Component {
  render() {
    if(this.props.email) {
      return (
        <View style={styles.loggedInAs}>
            <Text>Logged in as {this.props.email}</Text>
        </View>
      );
    }else{
      return null;
    }
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0.1,
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loggedInAs: {

  }

});
