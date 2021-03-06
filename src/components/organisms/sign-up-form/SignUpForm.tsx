import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR_BLACK, COLOR_WHITE } from '../../../styles/colors';
import { SCREENS } from '../../../navigations/screens';
import { UserService } from '../../../services/UserService';
import { HTTP_CODES } from '../../../utils/constants';
import Input from '../../atoms/input/Input';
import MutedText from '../../atoms/muted-text/MutedText';
import Button from '../../atoms/button/Button';
import { Alert } from '../../atoms/alert/Alert';
import { extractErrorMessage } from '../../../utils/ErrorHandler';
export class SignUpForm extends React.Component<any> {
    private userService: UserService;

    navigation: any;

    constructor(props: any) {
        super(props);
        this.navigation = props.navigation;
        this.userService = new UserService();
        this.state = {
            name: '',
            email: '',
            password: '',
        };
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

    buildUser() {
        return {
            name: (this.state as any).name,
            email: (this.state as any).email,
            password: (this.state as any).password,
        };
    }

    async signUp() {
        try {
            const user = this.buildUser();
            const response = await this.userService.createAccount(user);
            if (response.status === HTTP_CODES.OK) {
                this.navigation.navigate(SCREENS.MAIN);
            }
        } catch (error) {
            Alert(
                'Erro',
                extractErrorMessage(error.response),
                false,
                () => {},
                () => {}
            );
        }
    }

    render() {
        return (
            <View style={this.styles.container}>
                <Input
                    secondary
                    autoCapitalize="words"
                    placeholder="Nome"
                    textContentType="name"
                    onChange={(value: any) => this.setState({ name: value })}
                    placeholderTextColor={COLOR_BLACK}
                />
                <Input
                    accent
                    autoCapitalize="none"
                    style={this.styles.inputDistance}
                    keyboardType="email-address"
                    placeholder="E-mail"
                    textContentType="emailAddress"
                    onChange={(value: any) => this.setState({ email: value })}
                    placeholderTextColor={COLOR_WHITE}
                />
                <Input
                    autoCapitalize="none"
                    style={this.styles.inputDistance}
                    secureTextEntry={true}
                    textContentType="password"
                    placeholder="Senha"
                    placeholderTextColor={COLOR_WHITE}
                    onChange={(value: any) => this.setState({ password: value })}
                />
                <MutedText style={this.styles.smallDistance} text="Deve ter mais de 6 caracteres" />
                <View style={this.styles.buttonDistance}>
                    <Button primary title="Cadastrar" onPress={() => this.signUp()} />
                </View>
            </View>
        );
    }
}
