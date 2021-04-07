import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR_BLACK, COLOR_WHITE } from '../../../styles/colors';
import { ForgotPassword } from '../../molecules/forgot-password/ForgotPassword';
import { LoginButtons } from '../../molecules/login-buttons/LoginButtons';
import { SCREENS } from '../../../navigations/screens';
import Input from '../../atoms/input/Input';
import { ApiService } from '../../../services/ApiService';
import { HTTP_CODES } from '../../../utils/constants';
export class LoginForm extends React.Component<any> {
    private apiService: ApiService;

    constructor(props: any) {
        super(props);
        this.apiService = new ApiService();
        this.state = {
            email: '',
            password: '',
        };
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
            marginBottom: '40%',
        },
    });

    buildLogin(isGuess: boolean = false) {
        return {
            email: isGuess ? 'guessuser@safecrossing.com' : (this.state as any).email,
            password: isGuess ? 'guessuser' : (this.state as any).password,
        };
    }

    async doLogin(isGuess: any) {
        try {
            const login = this.buildLogin(isGuess);
            console.log(login)
            const response = await this.apiService.login(login);
            if (response.status === HTTP_CODES.OK) {
                this.props.navigation.navigate(SCREENS.MAIN);
            }
        } catch (error) {
            console.log(error);
        }
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
                    onChange={(value: any) => this.setState({email: value})}
                    placeholderTextColor={COLOR_BLACK}
                />
                <Input
                    autoCapitalize="none"
                    style={this.styles.inputDistance}
                    secureTextEntry={true}
                    textContentType="password"
                    placeholder="Senha"
                    onChange={(value: any) => this.setState({password: value})}
                    placeholderTextColor={COLOR_WHITE}
                />
                <LoginButtons navigation={this.props.navigation} doLogin={() => this.doLogin(false)} loginAsGuest={() => this.doLogin(true)}/>
            </View>
        );
    }
}
