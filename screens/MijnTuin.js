import React from 'react';
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';
import firebase from '../config/firebase';


//main class
export default class MijnTuinScreen extends React.Component {
  constructor(props) {

    super(props);
    this.state = {

      gebruiker: '',
    }


  }
  static navigationOptions = {
    title: 'Home',
  };

  //load data of gebruiker1 from database
  componentWillMount() {
    var database = firebase.database().ref('Gebruikers/gebruiker1/');
    console.log(database);
    database.once('value', function (snapshot) {
      gebruiker = snapshot.val();
    });

  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={[{ key:'1', foto: require('../images/Landschap.jpg') }, { key:'2', foto: require('../images/Landschap.jpg') }]}
          renderItem={({ item }) => {return(<FlatListItem imageUrl={item.foto} />);}}
        />

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
  image: {
    width: 300,
    height: 100,
  }
});
