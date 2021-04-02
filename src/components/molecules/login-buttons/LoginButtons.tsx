import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../../styles/colors';
import { ButtonGoogleSign } from '../../atoms/button-google-sign/ButtonGoogleSign';
import Button from '../../atoms/button/Button';
import NoBorderButton from '../../atoms/no-border-button/NoBorderButton';
export class LoginButtons extends Component {
    styles = StyleSheet.create({
        container: {
            flex: 2,
            backgroundColor: COLOR_WHITE,
            marginTop: '2%',
        },
        buttonsMargin: {
            marginTop: '4%',
        },
    });

    render() {
        return (
            <View style={this.styles.container}>
                <Button primary title="Login" onPress={() => console.log('Login')} />
                <ButtonGoogleSign style={this.styles.buttonsMargin} />
                <NoBorderButton title="Pular" style={this.styles.buttonsMargin} onPress={() => console.log('Pular')} />
            </View>
        );
    }
}
