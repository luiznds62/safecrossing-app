import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../../styles/colors';
import MutedText from '../../atoms/muted-text/MutedText';
import Text from '../../atoms/text/Text';

export class ForgotPassword extends Component {
    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLOR_WHITE,
            marginTop: '4%',
            flexDirection: 'row',
        },
        textDistance: {
            marginLeft: '2%'
        }
    });

    render() {
        return (
            <View style={this.styles.container}>
                <MutedText text="Esqueceu sua senha? /" />
                <Text style={this.styles.textDistance} text="Resetar" />
            </View>
        );
    }
}
