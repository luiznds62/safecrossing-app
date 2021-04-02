import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { FONT_FAMILY_BOLD, LINE_HEIGHT_26 } from '../../styles/typography';
import { COLOR_WHITE } from '../../styles/colors';
import { NavigateBack } from '../../components/atoms/navigate-back/NavigateBack';
import { SignUpHeader } from '../../components/organisms/sign-up-header/SignUpHeader';
import { SignUpForm } from '../../components/organisms/sign-up-form/SignUpForm';

class SignUp extends Component {
    navigation: any;

    constructor(props: any) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigateBack navigation={this.navigation} />
                <SignUpHeader/>
                <SignUpForm/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_WHITE,
        paddingLeft: '8%',
        paddingRight: '8%',
        paddingTop: '20%',
    },
    text: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: LINE_HEIGHT_26,
    },
});

export default SignUp;
