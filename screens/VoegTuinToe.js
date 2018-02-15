import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//main app
export default class VoegTuinToeScreen extends React.Component {
    static navigationOptions = {
        title: 'Register',
    };
  
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Wilt u al een tuin toevoegen?</Text>
                <Button title="Ja" onPress={() =>
                    navigate('TuinToevoegen', { gebruikerId: 1 })}></Button>
                <Button title="Nee" onPress={() =>
                    navigate('Home', { gebruikerId: 1 })}></Button>
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
});
