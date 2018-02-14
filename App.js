import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { initFirebase } from './utils/firebaseInit';

//import screens
import   HomeScreen   from './screens/Home';
import   ProfileScreen   from './screens/Profile';

//const met alle routes opgelijst
const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

//main app
export default class App extends React.Component {

  constructor(){
    super();

  }

  componentWillMount(){
    //firebase wordt hier ingeladen   
    initFirebase(firebase);

    //test genereren firebase key
    var newPostKey = firebase.database().ref().child('testTable').push().key;
    console.log(newPostKey);
    
  }

  componentDidMount() {

  }
  
  render() {
    return (
      <RootStack> </RootStack>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
