import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR_BLACK, COLOR_GRAY_MEDIUM, COLOR_PRIMARY, COLOR_WHITE } from '../../../styles/colors';
import Button from '../../atoms/button/Button';
import IconButton from '../../atoms/icon-button/IconButton';

export class LoginButtons extends Component {
    styles = StyleSheet.create({
        container: {
            flex: 2,
            backgroundColor: COLOR_WHITE,
            marginTop: '2%'
        },
        buttonsMargin: {
            backgroundColor: COLOR_WHITE,
            borderColor: COLOR_GRAY_MEDIUM,
            marginTop: '4%',
        },
    });

    render() {
        return (
            <View style={this.styles.container}>
                <Button primary title="Login" />
                <IconButton style={this.styles.buttonsMargin} icon="google" iconColor={COLOR_BLACK}/>
            </View>
        );
    }
}
