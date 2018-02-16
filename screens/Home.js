import React from 'react';
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';
import firebase from '../config/firebase';

class FlatListItem extends React.Component {
  render() {
    console.log(this.props.imageUrl);
    return (
      <View>
        <Image style={styles.image} source={{uri:this.props.imageUrl} } />
      </View>
    )
  }
}

//main class
export default class HomeScreen extends React.Component {
  constructor(props) {

    super(props);
    this.state = {

      foto: '',
    }


  }
  static navigationOptions = {
    title: 'Home',
  };

  //load data of gebruiker1 from database
  componentWillMount() {
    var database = firebase.database().ref('Gebruikers/gebruiker1/winkel');
    console.log(database);
    database.once('value', function (snapshot) {
      foto = snapshot.val().foto;
    });

    //load foto tuin van databank
    let storage = firebase.storage();
    let tuinPicUrl = 'KiFthOFtGMSQRPRxyeHVNwRx2Ab2.jpg';
    var tuinReference = storage.refFromURL('gs://hackathon-berry.appspot.com/images/tuinPics/' + tuinPicUrl);

    tuinReference.getDownloadURL()
      .then((url) => {
        self.setState({ foto: url }
        );
       

      })
      .catch(function (error) {
        // Handle Errors here.
        console.log('couldnt get photo ');
        // ...
      });


  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={[{ key: '1', foto: this.state.foto }, { key: '2', foto: this.state.foto }]}
          renderItem={({ item }) => { return (<FlatListItem imageUrl={item.foto} />); }}
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
