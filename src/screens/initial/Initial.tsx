import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FONT_FAMILY_BOLD, LINE_HEIGHT_26 } from '../../styles/typography';

class Initial extends Component {
    navigation: any;

    constructor(props: any) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Initial</Text>
                <Text onPress={() => this.navigation.navigate('Login')}>Go next</Text>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: LINE_HEIGHT_26,
    },
});

export default Initial;
