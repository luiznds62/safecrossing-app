import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR_BLACK, COLOR_WHITE } from '../../../styles/colors';
import { ForgotPassword } from '../../molecules/forgot-password/ForgotPassword';
import { LoginButtons } from '../../molecules/login-buttons/LoginButtons';
import { SCREENS } from '../../../navigations/screens';
import Input from '../../atoms/input/Input';
export class LoginForm extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLOR_WHITE,
            marginTop: '12%',
            paddingLeft: '8%',
            paddingRight: '8%',
        },
        inputDistance: {
            marginTop: '4%',
            marginBottom: '40%'
        },
    });

    doLogin() {
        this.props.navigation.navigate(SCREENS.MAIN);
    }

    render() {
        return (
            <View style={this.styles.container}>
                <Input
                    secondary
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="E-mail"
                    textContentType="emailAddress"
                    placeholderTextColor={COLOR_BLACK}
                />
                <Input
                    autoCapitalize="none"
                    style={this.styles.inputDistance}
                    secureTextEntry={true}
                    textContentType="password"
                    placeholder="Senha"
                    placeholderTextColor={COLOR_WHITE}
                />
                <LoginButtons navigation={this.props.navigation} doLogin={() => this.doLogin()} />
            </View>
        );
    }
}
