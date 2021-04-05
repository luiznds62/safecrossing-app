import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { FONT_FAMILY_BOLD, LINE_HEIGHT_26 } from '../../styles/typography';
import { MainHeader } from '../../components/organisms/main-header/MainHeader';
import { COLOR_WHITE } from '../../styles/colors';
import { NearTrafficLight } from '../../components/molecules/near-traffic-light/NearTrafficLight';
import { MainStatus } from '../../components/organisms/main-status/MainStatus';

class Main extends Component {
    navigation: any;

    constructor(props: any) {
        super(props);
        this.navigation = props.navigation;
    }

    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLOR_WHITE,
            paddingLeft: '8%',
            paddingRight: '8%',
        },
        text: {
            fontFamily: FONT_FAMILY_BOLD,
            fontSize: LINE_HEIGHT_26,
        },
        nearTrafficLight: {
            paddingTop: '8%',
        },
        mainStatus: {
            paddingTop: '16%',
        },
    });

    render() {
        return (
            <View style={this.styles.container}>
                <MainHeader name="Luiz" />
                <NearTrafficLight style={this.styles.nearTrafficLight} showMap={true} />
                <MainStatus style={this.styles.mainStatus} />
            </View>
        );
    }
}

export default Main;
