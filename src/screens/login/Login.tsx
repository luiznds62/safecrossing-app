import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { LoginForm } from '../../components/organisms/login-form/LoginForm';
import { LoginHeader } from '../../components/organisms/login-header/LoginHeader';
import { COLOR_WHITE } from '../../styles/colors';
class Login extends Component {
    private navigation: any;

    constructor(props: any) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        return (
            <View style={styles.container}>
                <LoginHeader navigation={this.navigation} />
                <LoginForm navigation={this.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_WHITE,
    },
});

export default Login;
