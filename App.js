import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

//momenteel import ik firebase apart per pagina

//import * as firebase from 'firebase';
//import { initFirebase } from './utils/firebaseInit';

//import screens
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import LoginScreen from './screens/Login';
import PictureScreen from './screens/Picture';

//const met alle routes opgelijst
const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Picture: {
      screen: PictureScreen,
    }
  },
  {
    initialRouteName: 'Picture',
  }
);

//main app
export default class App extends React.Component {

  constructor() {
    super();

  }

  componentWillMount() {

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
