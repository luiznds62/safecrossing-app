import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { COLOR_WHITE } from '../../styles/colors';
import Text from '../../components/atoms/text/Text';
import { NearTrafficLight } from '../../components/molecules/near-traffic-light/NearTrafficLight';
import { MainStatus } from '../../components/organisms/main-status/MainStatus';

class Status extends Component {
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
        nearTrafficLightContainer: {
            paddingTop: '24%',
        },
        mainStatus: {
            paddingTop: '8%',
        },
        cardStyle: {
            height: '85%',
        },
    });

    render() {
        return (
            <View style={this.styles.container}>
                <NearTrafficLight style={this.styles.nearTrafficLightContainer} showMap={false} />
                {/* <MainStatus
                    block={true}
                    navigation={this.navigation}
                    style={this.styles.mainStatus}
                    cardStyle={this.styles.cardStyle}
                /> */}
            </View>
        );
    }
}

export default Status;
