import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

//momenteel import ik firebase apart per pagina

//import screens
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import EditProfileScreen from './screens/EditProfile';
import OrdersScreen from './screens/Orders';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import PictureScreen from './screens/Picture';
import TuinToevoegenScreen from './screens/TuinToevoegen';
import VoegTuinToeScreen from './screens/VoegTuinToe';
import MijnTuinScreen from './screens/MijnTuin';
import KopenScreen from './screens/Kopen';
import BetalenScreen from './screens/Betalen';
import MenuScreen from './screens/Menu';
//const met alle routes opgelijst
const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    EditProfile: {
      screen: EditProfileScreen,
    },
    Orders: {
      screen: OrdersScreen,
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
    TuinToevoegen: {
      screen: TuinToevoegenScreen,
    },
    VoegTuinToe: {
      screen: VoegTuinToeScreen,
    },
    MijnTuin: {
      screen: MijnTuinScreen,
    },
    Kopen: {
      screen: KopenScreen,
    },
    Betalen: {
      screen: BetalenScreen,
    },
    Menu: {
      screen: MenuScreen,
    }

  },
  {

    initialRouteName: 'Login',

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
