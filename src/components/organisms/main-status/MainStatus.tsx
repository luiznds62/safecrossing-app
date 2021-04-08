import React from 'react';
import { View, StyleSheet } from 'react-native';
import { API_CONSTS, TRAFFIC_LIGHT_STATUSES } from '../../../utils/constants';
import { TrafficLightStatus } from '../../atoms/traffic-light-status/TrafficLightStatus';
import Heading from '../../molecules/heading/Heading';
class MainStatus extends React.Component<any> {
    constructor(props: any) {
        super(props);
        this.state = {
            trafficLightStatus: null,
        };
    }

    componentDidMount() {
        var socket = new WebSocket(API_CONSTS.TRAFFIC_LIGHT_WS);

        socket.onopen = () => this.onWsOpen();

        socket.onmessage = (payload) => this.onMessageWs(payload);
    }

    onWsOpen() {
        console.log('ws connected');
    }

    onMessageWs(payload: any) {
        console.log(payload);
    }

    styles = StyleSheet.create({
        container: {
            ...this.props.style,
        },
        trafficLightContainer: {
            marginTop: '4%',
            ...this.props.cardStyle,
        },
    });

    render() {
        return (
            <View style={this.styles.container}>
                <Heading text="Status" />
                <TrafficLightStatus
                    navigation={this.props.navigation}
                    status={(this.state as any).trafficLightStatus}
                    style={this.styles.trafficLightContainer}
                />
            </View>
        );
    }
}

export { MainStatus };
