import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR_BLACK, COLOR_WHITE } from '../../../styles/colors';
import { SCREENS } from '../../../navigations/screens';
import Input from '../../atoms/input/Input';
import MutedText from '../../atoms/muted-text/MutedText';
import Button from '../../atoms/button/Button';
export class SignUpForm extends React.Component<any> {
    navigation: any;

    constructor(props: any) {
        super(props);
        this.navigation = props.navigation;
    }

    styles = StyleSheet.create({
        container: {
            flex: 4,
            backgroundColor: COLOR_WHITE,
        },
        inputDistance: {
            marginTop: '4%',
        },
        smallDistance: {
            marginTop: '2%',
        },
        buttonDistance: {
            paddingTop: '15%',
        },
    });

    signUp() {
        this.navigation.navigate(SCREENS.MAIN);
    }

    render() {
        return (
            <View style={this.styles.container}>
                <Input
                    secondary
                    autoCapitalize="words"
                    placeholder="Nome"
                    textContentType="name"
                    placeholderTextColor={COLOR_BLACK}
                />
                <Input
                    accent
                    autoCapitalize="none"
                    style={this.styles.inputDistance}
                    keyboardType="email-address"
                    placeholder="E-mail"
                    textContentType="emailAddress"
                    placeholderTextColor={COLOR_WHITE}
                />
                <Input
                    autoCapitalize="none"
                    style={this.styles.inputDistance}
                    secureTextEntry={true}
                    textContentType="password"
                    placeholder="Senha"
                    placeholderTextColor={COLOR_WHITE}
                />
                <MutedText style={this.styles.smallDistance} text="Deve ter mais de 6 caracteres" />
                <View style={this.styles.buttonDistance}>
                    <Button primary title="Cadastrar" onPress={() => this.signUp()} />
                </View>
            </View>
        );
    }
}
