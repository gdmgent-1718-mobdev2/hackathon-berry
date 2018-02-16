import React from 'react';
import { StyleSheet, Text, View, ListView, FlatList, Button, TouchableOpacity, Image } from 'react-native';
import firebase from '../config/firebase';
import style from'../utils/styles';

class Bestelling extends React.Component{
  render(){
    return(
    <View style={styles.bestelling}>
      <Text style={styles.bestellingText}>Bestelling nr. {this.props.nr} - {this.props.type} </Text>
      <Text style={styles.bestellingText}>{this.props.adres} </Text>
      <Text style={styles.bestellingText}>Afhalen op {this.props.moment} </Text>
    </View>
    )
  }
}

export default class OrdersScreen extends React.Component {

  constructor(){
    super();

  }

  componentWillMount(){
    let self = this;

    // Check if user is signed in
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        self.setState({email: user.email});

        //test uid
        let testuid = "KiFthOFtGMSQRPRxyeHVNwRx2Ab2";
        self.setState({uid: testuid});

        self.getUserOrders();  
      } else {
        console.log('no user is logged in');
        // No user is signed in.
        //send user back to login screen
        self.props.navigation.navigate('Login');
      }
    });
  }

  getUserOrders(){
    console.log('getting user orders');

  }

  render() {
    return (
      <View style={styles.ordersPage}>
        <Text style={style.title}>Mijn Bestellingen</Text>
        <Bestelling nr="19328" type="Tomaten" adres="Frans Ackermanstraat 12 - 9000 Gent" moment="Vrijdag 16u"></Bestelling>
        <Bestelling nr="20192" type="Sla" adres="Frans Ackermanstraat 12 - 9000 Gent" moment="Vrijdag 16u"></Bestelling>
        <Bestelling nr="20231" type="Radijzen" adres="Kerkstraat 37 - 9000 Gent" moment="Maandag 16u"></Bestelling>
      </View>
    );
  }
}

/*
  <TouchableOpacity
  style={style.button_green}
  onPress={this.logOut}
  >
  <Text style={style.button_green_text}> Log out </Text>
  </TouchableOpacity>
*/

const styles = StyleSheet.create({
  ordersPage: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  bestelling: {
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 5,
    borderColor: 'green',
  },
  bestellingText: {
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  }

  
});
