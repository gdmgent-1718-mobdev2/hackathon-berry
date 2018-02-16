import React from 'react';
import { StyleSheet, Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import firebase from '../config/firebase';
import style from'../utils/styles';
class FlatListItem extends React.Component {
    render() {
        console.log(this.props.imageUrl);
        return (
            <View>
                <Text>{this.props.hoeveelheid} {this.props.eenheid} {this.props.naam}  = €{this.props.prijs}</Text>
            </View>
        )
    }
}

//main class
export default class BetalenScreen extends React.Component {
    constructor(props) {

        super(props);
        this.state = {

            product: { naam: '', hoeveelheid: '', prijs: 0, eenheid: '' },
            totaal: 0
        }


    }
    static navigationOptions = {
        title: 'Betalen',
    };

    reserveren(){
        navigate('TuinToevoegen', { gebruikerId: 1 })
    }

    //load data of gebruiker1 from database
    componentWillMount() {
        let self = this;

        var database = firebase.database().ref('Gebruikers/KiFthOFtGMSQRPRxyeHVNwRx2Ab2/winkelmandje');

        database.once('value', function (snapshot) {
            self.setState({ product: { naam: snapshot.val().product.naam, hoeveelheid: snapshot.val().product.hoeveelheid, prijs: snapshot.val().product.prijs * snapshot.val().product.hoeveelheid, eenheid: snapshot.val().product.eenheid } });
            console.log('test: ' + self.state.product.hoeveelheid);

            self.setState({ totaal: self.state.product.prijs });
            //self.setState({ product1: { naam: list.gebruiker1.winkel.product.naam, prijs: list.gebruiker1.winkel.product.prijs, eenheid: list.gebruiker1.winkel.product.eenheid, beschrijving: list.gebruiker1.winkel.product.beschrijving } });
            //self.setState({ product2: { naam: list.KiFthOFtGMSQRPRxyeHVNwRx2Ab2.winkel.producten.product.naam, prijs: list.KiFthOFtGMSQRPRxyeHVNwRx2Ab2.winkel.producten.product.prijs, eenheid: list.KiFthOFtGMSQRPRxyeHVNwRx2Ab2.winkel.producten.product.eenheid, beschrijving: list.KiFthOFtGMSQRPRxyeHVNwRx2Ab2.winkel.producten.product.beschrijving } });



        });

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <FlatList
                    data={[{ key: '1', naam: this.state.product.naam, prijs: this.state.product.prijs, hoeveelheid: this.state.product.hoeveelheid, eenheid: this.state.product.eenheid }]}
                    renderItem={({ item }) => { return (<FlatListItem naam={item.naam} prijs={item.prijs} hoeveelheid={item.hoeveelheid} eenheid={item.eenheid} />); }}
                />
                <Text>Totaal € {this.state.totaal}</Text>
                <TouchableOpacity
                    style={style.button_green}
                    onPress={this.reserveren}
                ><Text style={style.button_green_text}>Artikelen reserveren</Text>
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
        justifyContent: 'center',
    },
    image: {
        width: 300,
        height: 100,
    }
});
