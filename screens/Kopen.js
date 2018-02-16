import React from 'react';
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';
import firebase from '../config/firebase';
import ProductItem from './ProductItem';

class FlatListItem extends React.Component {
    render() {
        console.log(this.props.imageUrl);
        return (
            <View>
                <Text>Naam: {this.props.naam}</Text>
                <Text>€{this.props.prijs} / {this.props.eenheid}</Text>
                <Text></Text>
            </View>
        )
    }
}

var list = [];
//main class
export default class KopenScreen extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            product1: {
                foto: '', naam: '', prijs: 0, eenheid: '', beschrijving: ''
            },
            product2: {
                foto: '', naam: '', prijs: 0, eenheid: '', beschrijving: ''
            },
        }


    }
    static navigationOptions = {
        title: 'Kopen',
    };


    //load data of gebruiker1 from databased
    componentWillMount() {
        let self = this;

        var database = firebase.database().ref('Gebruikers/');
        console.log(database);
        database.on('value', function (snapshot) {
            list = snapshot.val();
            self.setState({ product1: { naam: list.gebruiker1.winkel.product.naam, prijs: list.gebruiker1.winkel.product.prijs, eenheid: list.gebruiker1.winkel.product.eenheid, beschrijving: list.gebruiker1.winkel.product.beschrijving } });
            self.setState({ product2: { naam: list.KiFthOFtGMSQRPRxyeHVNwRx2Ab2.winkel.producten.product.naam, prijs: list.KiFthOFtGMSQRPRxyeHVNwRx2Ab2.winkel.producten.product.prijs, eenheid: list.KiFthOFtGMSQRPRxyeHVNwRx2Ab2.winkel.producten.product.eenheid, beschrijving: list.KiFthOFtGMSQRPRxyeHVNwRx2Ab2.winkel.producten.product.beschrijving } });

            console.log('test:' + self.state.product1.foto);

        });

        self.getImages();

    }

    getImages() {

        let storage = firebase.storage();

        //should get profilePicName from registration, but for now:
        let fruitPicUrl = 'tomaten.jpg';
        var fruitReference = storage.refFromURL('gs://hackathon-berry.appspot.com/images/fruitPics/' + fruitPicUrl + '.jpg');

        fruitReference.getDownloadURL()
            .then((url) => {
                this.setState({ product1: { foto: url } });
                

            })
            .catch(function (error) {
                // Handle Errors here.
                console.log('couldnt get photo ');
                // ...
            });

        let fruit2PicUrl = 'tomaten.jpg';
        var fruit2Reference = storage.refFromURL('gs://hackathon-berry.appspot.com/images/fruitPics/' + fruit2PicUrl);

        fruit2Reference.getDownloadURL()
            .then((url) => {
                this.setState({ product2: { foto: url } });
             

            })
            .catch(function (error) {
                // Handle Errors here.
                console.log('couldnt get photo ');
                // ...
            });
    }
    //foto, naam, prijs, beschrijving
    render() {
        console.log('log:' + this.state.product1.foto);
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <FlatList
                    data={[{ key: '1', foto: this.state.product1.foto, naam: this.state.product1.naam, prijs: this.state.product1.prijs, eenheid: this.state.product1.eenheid, beschrijving: this.state.product1.beschrijving }, { key: '2', foto: this.state.product2.foto, naam: this.state.product2.naam, prijs: this.state.product2.prijs, eenheid: this.state.product2.eenheid, beschrijving: this.state.product2.beschrijving }]}
                    renderItem={({ item }) => { return (<ProductItem naam={item.naam} prijs={item.prijs} eenheid={item.eenheid} beschrijving={item.beschrijving} actie='Kopen' foto={item.foto} />); }}
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
