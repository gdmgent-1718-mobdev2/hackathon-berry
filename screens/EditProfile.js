import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, Image, TextInput } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import Header from '../components/Header';
import firebase from '../config/firebase';
import style from'../utils/styles';

export default class EditProfileScreen extends React.Component {

  constructor(){
    super();

    this.state = {
      email: '',
      uid: '',
      profilePicUrl: '',
      profilePic: '',
      tuinPic: '',
      winkelPic: '',
    }
  }

  static navigationOptions = {
    title: 'Profiel Aanpassen',
  };

  componentWillMount(){
    let self = this;

    // Check if user is signed in
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        self.setState({email: user.email});
        self.setState({uid: user.uid});
        console.log(self.state);
        self.getUserInfo();    
      } else {
        console.log('no user is logged in');
        // No user is signed in.
        //send user back to login screen
        self.props.navigation.navigate('Login');
      }
    });
  }

  getUserInfo(){
    console.log('getting user info');
    //ToDo: add personal information
    let storage = firebase.storage();

    //should get profilePicName from registration, but for now:
    let profilePicUrl = 'farmer.jpg';
    var profileReference = storage.refFromURL('gs://hackathon-berry.appspot.com/images/profilePics/' + 'test' + '.jpg');

    profileReference.getDownloadURL()
    .then((url) => {
        this.setState({profilePic: {uri: url}});
        console.log(this.state.profilePic.uri);
      
    })
    .catch(function(error) {
      // Handle Errors here.
      console.log('couldnt get photo ');
      // ...
    });

  }

  render() {
    return (
      <View style={styles.profilePage}>
          <View style={styles.identity}>
            <Image
              source={{uri: this.state.profilePic.uri}}
              style={styles.profilePic}
            />
            <View style={styles.profileInfo}>
              <TouchableOpacity
                  style={styles.editButton}
                  onPress={this.editProfile}
                  >
                  <Text style={styles.editButtonText}> Nieuwe foto uploaden </Text>
                </TouchableOpacity>
            </View>
          </View>

          <View style={style.container}>
            <FormLabel labelStyle={style.sub_title}>Voornaam</FormLabel>
            <TextInput defaultValue="Jonas" style={style.input_field}></TextInput>
            <FormLabel labelStyle={style.sub_title}>Naam</FormLabel>
            <TextInput defaultValue="De Zeiler" style={style.input_field}></TextInput>
            <FormLabel labelStyle={style.sub_title}>Email</FormLabel>
            <TextInput defaultValue="zezz13@gmail.com" style={style.input_field}></TextInput>
            <FormLabel labelStyle={style.sub_title}>Tel. nr</FormLabel>
            <TextInput defaultValue="0497193912" style={style.input_field}></TextInput>
            
            <TouchableOpacity
              style={style.button_green}
              onPress={() => this.props.navigation.navigate('Profile')}
              >
              <Text style={style.button_green_text}> Opslaan </Text>
        </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profilePage: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  profileScrollView: {

  },

  identity: {
    flex: 0.2,
    //height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 30
  },
  profileInfo: {
    flex: 2,
    marginLeft: 10,
    
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 80,
    marginLeft: 10,
    borderWidth: 5,
    borderColor: 'green',
  },
  profileText: {
    fontSize: 15
  },
  editButton: {
    borderRadius: 10,
    backgroundColor: 'green',
    width: 200,
    height: 25,
  },
  editButtonText: {
    color: 'white',
    fontSize: 20
  },
  editProfileInfo: {
    marginHorizontal: 20
  }
  

  
});
