import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR_BLACK, COLOR_WHITE } from '../../../styles/colors';
import { LoginButtons } from '../../molecules/login-buttons/LoginButtons';
import { SCREENS } from '../../../navigations/screens';
import { UserService } from '../../../services/UserService';
import { HTTP_CODES, SPEECHES, TOKEN_EXPIRATION_MILLIS } from '../../../utils/constants';
import { store } from '../../../store';
import { Alert } from '../../atoms/alert/Alert';
import { extractErrorMessage } from '../../../utils/ErrorHandler';
import Input from '../../atoms/input/Input';
import { SpeechService } from '../../../services/SpeechService';
export class LoginForm extends React.Component<any> {
    private store: any;
    private userService: UserService;
    private speechService: SpeechService;

    constructor(props: any) {
        super(props);
        this.userService = new UserService();
        this.speechService = new SpeechService();
        this.store = store.getState().userReducer;
        this.state = {
            email: '',
            password: '',
            loading: false,
        };
    }

    componentDidMount() {
        if (this.store.user.name !== '') {
            const now: any = new Date();
            const insertionDate: any = new Date(this.store.insertionDate);
            const millisDiference: any = parseInt(((now as any) - insertionDate) as any);
            if (millisDiference < TOKEN_EXPIRATION_MILLIS) {
                console.log('caiu aqui');
                this.speechService.stop();
                this.props.navigation.navigate(SCREENS.MAIN);
            }
        } else {
            this.speechService.speak(SPEECHES.LOGIN.ON_MOUNT);
        }
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
            email: isGuess ? 'guest@guest.com' : (this.state as any).email,
            password: isGuess ? 'guest1234' : (this.state as any).password,
        };
    }

    setLoading(bool: boolean) {
        this.setState({ loading: bool });
    }

    async doLogin(isGuess: any) {
        try {
            this.setLoading(true);
            this.props.speech.stop();
            const login = this.buildLogin(isGuess);
            const response = await this.userService.login(login);
            if (response.status === HTTP_CODES.OK) {
                this.props.navigation.navigate(SCREENS.MAIN);
            }
        } catch (error) {
            Alert(
                'Erro',
                extractErrorMessage(error.response),
                false,
                () => {},
                () => {}
            );
        } finally {
            this.setLoading(false);
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
                    onChange={(value: any) => this.setState({ email: value })}
                    placeholderTextColor={COLOR_BLACK}
                />
                <Input
                    autoCapitalize="none"
                    style={this.styles.inputDistance}
                    secureTextEntry={true}
                    textContentType="password"
                    placeholder="Senha"
                    onChange={(value: any) => this.setState({ password: value })}
                    placeholderTextColor={COLOR_WHITE}
                />
                <LoginButtons
                    loading={(this.state as any).loading}
                    navigation={this.props.navigation}
                    doLogin={() => this.doLogin(false)}
                    loginAsGuest={() => this.doLogin(true)}
                />
            </View>
        );
    }
}
