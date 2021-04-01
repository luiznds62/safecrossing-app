import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR_BLACK, COLOR_WHITE } from '../../../styles/colors';
import { ForgotPassword } from '../../molecules/forgot-password/ForgotPassword';
import { LoginButtons } from '../../molecules/login-buttons/LoginButtons';
import Input from '../../atoms/input/Input';

export class LoginForm extends Component {
    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLOR_WHITE,
            marginTop: '12%',
            paddingLeft: '8%',
            paddingRight: '8%'
        },
        inputDistance: {
            marginTop: '6%'
        }
    });

    render() {
        return <View style={this.styles.container}>
            <Input secondary placeholder="E-mail" textContentType="email" placeholderTextColor={COLOR_BLACK}/>
            <Input style={this.styles.inputDistance} placeholder="Senha" placeholderTextColor={COLOR_WHITE}/>
            <ForgotPassword/>
            <LoginButtons/>
        </View>;
    }
}
