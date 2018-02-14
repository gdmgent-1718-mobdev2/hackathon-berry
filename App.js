import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { initFirebase } from './utils/firebaseInit';


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
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
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
