import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker } from 'react-native';
import { Label } from 'react-native-elements';

//import * as firebase from 'firebase';
//import { initFirebase } from '../utils/firebaseInit';
import firebase from '../config/firebase';

export default class RegisterScreen extends React.Component {

    constructor() {
        super();

        //necessary?
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

        //necessary!
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            startTimeMonday: '',
            password: ''
        }
    }

    componentWillMount() {

    }


    handleChangeEmail(newEmail) {
        //moet een geldig email adres zijn
        this.setState({ email: newEmail })
    }

    handleChangePassword(newPassword) {
        //moet 6 tekens bevatten
        this.setState({ password: newPassword })
    }

    handleSubmit(event) {
        console.log(this.state);
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            // ...
        });

    }


    render() {

        return (
            <View style={styles.container}>
                <Text>Voeg een tuin toe</Text>
                <FormLabel>Periode</FormLabel>

                <Picker selectedValue={this.state.startTimeMonday}
                    onValueChange={(itemValue, itemIndex) => this.setState({ startTimeMonday: itemValue })} >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <FormLabel>Password</FormLabel>
                <TextInput style={styles.passwordField} onChangeText={(text) => this.handleChangePassword(text)} value={this.state.password} />

                <Button
                    title='Registreren'
                    onPress={this.handleSubmit}
                />
            </View >
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

});