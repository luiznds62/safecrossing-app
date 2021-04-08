import React from 'react';
import { View, StyleSheet } from 'react-native';
import { API_CONSTS } from '../../../utils/constants';
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

        socket.onmessage = (e) => {
            const payload = JSON.parse(e.data);
            //console.log('Message from server:', JSON.parse(e.data));
            if (payload.after.id === this.props.trafficLight.id) {
                this.setState({ trafficLightStatus: payload.newStatus });
            }
        };
    }

    onWsOpen() {
        console.log('ws connected');
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
