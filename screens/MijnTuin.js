import React from 'react';
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';
import firebase from '../config/firebase';


//main class
export default class MijnTuinScreen extends React.Component {
    constructor(props) {

        super(props);
        this.state = {

            gebruiker: '',
            tuinPic: '',
            openingsuren: '',
        }


    }
    static navigationOptions = {
        title: 'Mijn Tuin',
    };


    componentWillMount() {

        let self = this;

        //load data of gebruiker1 from database
        var database = firebase.database().ref('Gebruikers/gebruiker1/');
        console.log(database);
        database.once('value', function (snapshot) {
            self.setState({gebruiker : snapshot.val()});
            self.setState({openingsuren : snapshot.val().winkel.openingsuren});
            
        });

        //load foto tuin van databank
        let storage = firebase.storage();
        let tuinPicUrl = 'KiFthOFtGMSQRPRxyeHVNwRx2Ab2.jpg';
        var tuinReference = storage.refFromURL('gs://hackathon-berry.appspot.com/images/tuinPics/' + tuinPicUrl);
        
        tuinReference.getDownloadURL()
            .then((url) => {
                self.setState({ tuinPic: { uri: url } });
                console.log(this.state.tuinPic.uri);
                 
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
                <Image style={styles.tuinPic} source={{uri: this.state.tuinPic.uri}} />
                <Text>Adres: {this.state.gebruiker.straat} {this.state.gebruiker.huisnummer} {this.state.gebruiker.postcode} {this.state.gebruiker.stad}</Text>
                <Text>Maandag: {this.state.openingsuren.maandag}</Text>
                <Text>Dinsdag: {this.state.openingsuren.dinsdag}</Text>
                <Text>Woensdag: {this.state.openingsuren.woensdag}</Text>
                <Text>Donderdag: {this.state.openingsuren.donderdag}</Text>
                <Text>Vrijdag: {this.state.openingsuren.vrijdag}</Text>
                <Text>Zaterdag: {this.state.openingsuren.zaterdag}</Text>
                <Text>Zondag: {this.state.openingsuren.zondag}</Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tuinPic: {
        height: 200,
        width: 200,
        
    }
   
});
