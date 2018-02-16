import React from 'react';
import { StyleSheet, Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import firebase from '../config/firebase';
import ProductItem from './ProductItem';
import style from '../utils/styles';
//main class
export default class MijnTuinScreen extends React.Component {
    constructor(props) {

        super(props);
        this.state = {

            gebruiker: '',
            tuinPic: '',
            openingsuren: '',
            product: {
                foto: '', naam: '', prijs: 0, eenheid: '', beschrijving: ''
            },
        }


    }
    static navigationOptions = {
        title: 'Mijn Tuin',
    };


    componentWillMount() {

        let self = this;

        //load data of gebruiker1 from database
        var database = firebase.database().ref('Gebruikers/KiFthOFtGMSQRPRxyeHVNwRx2Ab2/');
        console.log(database);
        database.once('value', function (snapshot) {
            self.setState({ gebruiker: snapshot.val() });
            self.setState({ openingsuren: snapshot.val().winkel.openingsuren });
            self.setState({ product: { naam: snapshot.val().winkel.producten.product.naam, prijs: snapshot.val().winkel.producten.product.prijs, eenheid: snapshot.val().winkel.producten.product.eenheid, beschrijving: snapshot.val().winkel.producten.product.beschrijving } });

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

        let fruitPicUrl = 'tomaten.jpg';
        var fruitReference = storage.refFromURL('gs://hackathon-berry.appspot.com/images/fruitPics/' + fruitPicUrl + '.jpg');

        fruitReference.getDownloadURL()
            .then((url) => {
                this.setState({ product: { foto: url } });


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
                <Image style={styles.tuinPic} source={{ uri: this.state.foto }} />
                


                

                <Text>Mijn producten</Text>
                <FlatList
                    data={[{ key: '1', foto: this.state.product.foto, naam: this.state.product.naam, prijs: this.state.product.prijs, eenheid: this.state.product.eenheid, beschrijving: this.state.product.beschrijving }]}
                    renderItem={({ item }) => { return (<ProductItem naam={item.naam} prijs={item.prijs} eenheid={item.eenheid} beschrijving={item.beschrijving} actie='Aanpassen' foto={item.foto} />); }}
                />
                <TouchableOpacity
                    style={style.button_green}
                    onPress={() =>
                        navigate('TuinToevoegen', { gebruikerId: 1 })}
                ><Text style={style.button_green_text}>Toevoegen</Text>
                </TouchableOpacity>


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
