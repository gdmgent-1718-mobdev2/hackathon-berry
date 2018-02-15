import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

//momenteel import ik firebase apart per pagina

//import screens
<<<<<<< HEAD
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import LoginScreen from './screens/Login';
import PictureScreen from './screens/Picture';
=======
import   HomeScreen   from './screens/Home';
import   ProfileScreen   from './screens/Profile';
import   LoginScreen   from './screens/Login';
import   RegisterScreen from './screens/Register';
>>>>>>> 348ef41ab64fe7c6147da4cd7dab6a048b38d584

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
    },
    Register: {
      screen: RegisterScreen,
    },
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
