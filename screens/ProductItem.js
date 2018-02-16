import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

import style from'../utils/styles';

export default class ProductItem extends React.Component {
    handle(){
        if(this.props.actie==='Kopen'){
            
        }
    }

    render() {

        return (
            <View>
                <Image source={{uri: this.props.foto}} />
                <Text>Naam: {this.props.naam}</Text>
                <Text>{this.props.prijs} / {this.props.eenheid}</Text>
                <Text>{this.props.beschrijving}</Text>
                <TouchableOpacity
                    style={style.button_green}
                    onPress={this.handle}
                ><Text style={style.button_green_text}>{this.props.actie} </Text>
                </TouchableOpacity>
            </View>
        )
    }
}