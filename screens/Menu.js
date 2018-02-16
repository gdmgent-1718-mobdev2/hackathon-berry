import React from 'react';
import { StyleSheet, Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import firebase from '../config/firebase';
import style from '../utils/styles';


//main class
export default class MenuScreen extends React.Component {
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
       


    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={style.button_white}
                    onPress={() =>
                        navigate('Kopen', { gebruikerId: 1 })}
                ><Text style={style.button_white_text}>Kopen </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.button_white}
                    onPress={() =>
                        navigate('Betalen', { gebruikerId: 1 })}
                ><Text style={style.button_white_text}>Betalen </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.button_white}
                    onPress={() =>
                        navigate('Profile', { gebruikerId: 1 })}
                ><Text style={style.button_white_text}>Profile </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.button_white}
                    onPress={() =>
                        navigate('MijnTuin', { gebruikerId: 1 })}
                ><Text style={style.button_white_text}>MijnTuin </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.button_white}
                    onPress={() =>
                        navigate('Home', { gebruikerId: 1 })}
                ><Text style={style.button_white_text}>Home </Text>
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
