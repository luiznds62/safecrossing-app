import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Heading from '../../components/molecules/heading/Heading';
import ImageLogo from '../../components/molecules/image-logo/ImageLogo';
import MutedText from '../../components/atoms/muted-text/Text';

class Initial extends Component {
    navigation: any;
    welcomeText = 'Bem-vindo';
    headingText = 'Este aplicativo irá te  auxíliar na travessia de ruas com semáforos';

    constructor(props: any) {
        super(props);
        this.navigation = props.navigation;
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
        marginBottom: '6%'
    }
});

export default Initial;
