import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { FONT_FAMILY_BOLD, LINE_HEIGHT_26 } from '../../styles/typography';
import { MainHeader } from '../../components/organisms/main-header/MainHeader';
import { COLOR_WHITE } from '../../styles/colors';
import { NearTrafficLight } from '../../components/molecules/near-traffic-light/NearTrafficLight';
import { MainStatus } from '../../components/organisms/main-status/MainStatus';
import { store } from '../../store/index';
class Main extends Component {
    private store: any;
    private navigation: any;

    constructor(props: any) {
        super(props);
        this.navigation = props.navigation;
        this.store = store.getState().userReducer;
        this.state = {
            location: '',
        };
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
            paddingTop: '16%',
        }
    });

    render() {
        return (
            <View style={this.styles.container}>
                <MainHeader name={this.store.user.name} />
                <NearTrafficLight block={false} navigation={this.navigation} style={this.styles.nearTrafficLight} showMap={false} />
            </View>
        );
    }
}

export default Main;
