import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { FONT_FAMILY_BOLD, LINE_HEIGHT_26 } from '../../styles/typography';
import { COLOR_WHITE } from '../../styles/colors';
import { NavigateBack } from '../../components/atoms/navigate-back/NavigateBack';
import { SignUpHeader } from '../../components/organisms/sign-up-header/SignUpHeader';
import { SignUpForm } from '../../components/organisms/sign-up-form/SignUpForm';
import { SpeechService } from '../../services/SpeechService';
import { SPEECHES } from '../../utils/constants';
class SignUp extends Component {
    private speechService: SpeechService;
    private navigation: any;

    constructor(props: any) {
        super(props);
        this.navigation = props.navigation;
        this.speechService = new SpeechService();
    }

    componentDidMount() {
        this.speechService.speak(SPEECHES.SIGN_UP.ON_MOUNT);
    }

    componentWillUnmount() {
        this.speechService.stop();
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigateBack navigation={this.navigation} />
                <SignUpHeader />
                <SignUpForm navigation={this.navigation} />
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
