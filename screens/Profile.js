import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import firebase from '../config/firebase';
import style from'../utils/styles';

export default class ProfileScreen extends React.Component {

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
    title: 'Profiel',
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

    let tuinPicUrl = 'KiFthOFtGMSQRPRxyeHVNwRx2Ab2.jpg';
    var tuinReference = storage.refFromURL('gs://hackathon-berry.appspot.com/images/tuinPics/' + tuinPicUrl);

    tuinReference.getDownloadURL()
    .then((url) => {
        this.setState({tuinPic: {uri: url}});
        console.log(this.state.tuinPic.uri);
      
    })
    .catch(function(error) {
      // Handle Errors here.
      console.log('couldnt get photo ');
      // ...
    });

    let winkelPicUrl = 'KiFthOFtGMSQRPRxyeHVNwRx2Ab2.jpg';
    var winkelReference = storage.refFromURL('gs://hackathon-berry.appspot.com/images/winkelPics/' + winkelPicUrl);

    winkelReference.getDownloadURL()
    .then((url) => {
        this.setState({winkelPic: {uri: url}});
      
    })
    .catch(function(error) {
      // Handle Errors here.
      console.log('couldnt get photo ');
      // ...
    });
 

  }

  logOut(){
    let self = this;
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log('logged out successfully');
      self.props.navigation.navigate('Login');
    }, function(error) {
      // An error happened.
      console.log('error logging out');
    });
  }

  goToMijnBestellingen(){
    //this.props.navigation.navigate('Orders');
    
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
              <Text style={styles.profileText}>Jonas De Zeiler</Text>
              <Text style={styles.profileText}>jonny23@hotmail.be</Text>
              <Text style={styles.profileText}>04 94 12 32 12</Text>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => this.props.navigation.navigate('EditProfile')}
                >
                <Text style={styles.editButtonText}> Edit </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.profileMijnTuin}>
            <Text style={style.sub_title}>Mijn Tuin</Text>
            <Image style={styles.profileTuinPic} source={{uri: this.state.tuinPic.uri}}></Image>
          </View>

          <View style={styles.profileMijnWinkel}>
            <Text style={style.sub_title}>Mijn Winkel</Text>
            <Image style={styles.profileWinkelPic} source={{uri: this.state.winkelPic.uri}}></Image>
          </View>

          <TouchableOpacity
            style={[style.button_green, styles.mijnBestellingen]}
            onPress={() => this.props.navigation.navigate('Orders')}
            >
            <Text style={style.button_green_text}> Mijn Bestellingen </Text>
          </TouchableOpacity>
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
  profileMijnTuin: {
    flex: 0.3,
    marginHorizontal: 20
  },
  profileTuinPic: {
    flex: 1
  },
  profileMijnWinkel: {
    flex: 0.3,
    marginHorizontal: 20
  },
  profileWinkelPic: {
    flex: 1
  },
  editButton: {
    borderRadius: 10,
    backgroundColor: 'green',
    width: 60,
    height: 25,
  },
  editButtonText: {
    color: 'white',
    fontSize: 20
  },
  mijnAankopen: {
    marginHorizontal: 20
  }
  

  
});
