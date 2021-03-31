import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Heading from '../../components/molecules/heading/Heading';
import ImageLogo from '../../components/molecules/image-logo/ImageLogo';
import MutedText from '../../components/atoms/muted-text/Text';
import IconButton from '../../components/atoms/icon-button/IconButton';
import { COLOR_PRIMARY } from '../../styles/colors';
import { SCREENS } from '../../navigations/screens';

class Initial extends Component {
    navigation: any;
    welcomeText = 'Bem-vindo';
    headingText = 'Este aplicativo irá te  auxíliar na travessia de ruas com semáforos';

    constructor(props: any) {
        super(props);
        this.navigation = props.navigation;
    }

    moveToLogin() {
        this.navigation.navigate(SCREENS.LOGIN);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageLogo}>
                    <ImageLogo />
                </View>
                <View style={styles.heading}>
                    <MutedText style={styles.welcome} text={this.welcomeText}/>
                    <Heading text={this.headingText} />
                </View>
                <View style={styles.bottomButton}>
                    <IconButton icon="arrow-right-circle" color={COLOR_PRIMARY} onPress={() => this.moveToLogin()}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    imageLogo: {
        flex: 0.7,
        marginTop: '30%'
    },
    heading: {
        paddingLeft: '8%',
        paddingRight: '8%'
    },
    welcome: {
        marginTop: '6%',
        marginBottom: '4%'
    },
    bottomButton: {
        marginTop: '6%',
        paddingRight: '8%',
        paddingLeft: '8%'
    }
});

export default Initial;
