import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Heading from '../../components/molecules/heading/Heading';
import ImageLogo from '../../components/molecules/image-logo/ImageLogo';
import MutedText from '../../components/atoms/muted-text/MutedText';
import IconButton from '../../components/atoms/icon-button/IconButton';
import { COLOR_PRIMARY, COLOR_WHITE } from '../../styles/colors';
import { SCREENS } from '../../navigations/screens';
import { SpeechService } from '../../services/SpeechService';
import { SPEECHES } from '../../utils/constants';

class Initial extends Component {
    private speechService: SpeechService;
    private navigation: any;
    welcomeText = 'Bem-vindo';
    headingText = 'Este aplicativo irá te  auxiliar na travessia de ruas com semáforos';

    constructor(props: any) {
        super(props);
        this.navigation = props.navigation;
        this.speechService = new SpeechService();
    }

    componentDidMount() {
        this.speechService.speak(SPEECHES.INITIAL.ON_MOUNT);
    }

    componentWillUnmount() {
        this.speechService.stop();
    }

    moveToLogin() {
        this.navigation.navigate(SCREENS.LOGIN);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageLogo} accessible={true} accessibilityLabel={SPEECHES.INITIAL.IMAGE_SPEECH}>
                    <ImageLogo />
                </View>
                <View style={styles.heading}>
                    <MutedText style={styles.welcome} text={this.welcomeText} />
                    <Heading text={this.headingText} />
                </View>
                <View style={styles.bottomButton} accessible={true} accessibilityLabel={SPEECHES.INITIAL.BUTTON_SPEECH}>
                    <IconButton icon="arrow-right-circle" color={COLOR_PRIMARY} onPress={() => this.moveToLogin()} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_WHITE,
    },
    imageLogo: {
        flex: 0.85,
        marginTop: '30%',
    },
    heading: {
        paddingLeft: '8%',
        paddingRight: '8%',
    },
    welcome: {
        marginTop: '6%',
        marginBottom: '4%',
    },
    bottomButton: {
        marginTop: '6%',
        paddingRight: '8%',
        paddingLeft: '8%',
    },
});

export default Initial;
