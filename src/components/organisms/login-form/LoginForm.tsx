import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR_BLACK, COLOR_WHITE } from '../../../styles/colors';
import { LoginButtons } from '../../molecules/login-buttons/LoginButtons';
import { SCREENS } from '../../../navigations/screens';
import { UserService } from '../../../services/UserService';
import { HTTP_CODES } from '../../../utils/constants';
import { store } from '../../../store';
import Input from '../../atoms/input/Input';
export class LoginForm extends React.Component<any> {
    private store: any;
    private userService: UserService;

    constructor(props: any) {
        super(props);
        this.userService = new UserService();
        this.store = store.getState().userReducer;
        this.state = {
            email: '',
            password: '',
            loading: false,
        };
    }

    componentDidMount() {
        if(this.store.user.name !== "") {
            this.props.navigation.navigate(SCREENS.MAIN);
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
            const login = this.buildLogin(isGuess);
            const response = await this.userService.login(login);
            if (response.status === HTTP_CODES.OK) {
                this.props.navigation.navigate(SCREENS.MAIN);
            }
        } catch (error) {
            console.log(error);
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
