import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import firebase from '../config/firebase';

export default class Header extends React.Component {

  constructor(navigation){
    super();
    this.nav = navigation;
    console.log(this.nav);
    
    this.state = {

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
        
        
        self.setHeaderProfilePic();
      } else {
        console.log('user is logged out');
        // No user is signed in.
      }
    });
  }

  setHeaderProfilePic(){

  }

  render() {
    
    return (
      <View style={styles.headerStyle}>
      <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
      <Text> back </Text>
      </TouchableOpacity>
      <Text style={styles.headerTitleStyle}>{this.props.title}</Text>
      <TouchableOpacity style={styles.profileButton} onPress={() => this.props.navigation.goBack()}>
      <Text> profile </Text>
      </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: 'green',
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profileButton: {
    flex: 1,
    width: 30,
    height: 30,
    backgroundColor: 'red',
    marginRight: 20
  },
  headerTitleStyle: {
    flex: 5,
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    marginLeft: 20
  },

});
