import React from "react";
import { Text, Image, View, Button } from "react-native";
import firebase from 'firebase';
//import { initFirebase } from '../utils/firebaseInit';
//import ImagePicker from 'react-native-imagepicker'

const style = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 25
  }
};

export default class PictureScreen extends React.Component {

  componentWillMount(){
    initFirebase(firebase);
  }
  uploadImage() {
    /*const imageRef = firebase.storage().ref('images').child('image_001')
    var file = document.querySelector('img');
    console.log(file);*/
  }
  render() {
    return (
      <View style={style.container}>
        <Image source={ require('../images/Landschap.jpg') } />
        <Button title='Upload'
          onPress={this.uploadImage} />
      </View>
    );
  }
}


