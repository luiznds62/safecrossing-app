import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SpeechService } from '../../../services/SpeechService';
import { API_CONSTS, SPEECHES, TRAFFIC_LIGHT_STATUSES } from '../../../utils/constants';
import { TrafficLightStatus } from '../../atoms/traffic-light-status/TrafficLightStatus';
import Heading from '../../molecules/heading/Heading';
class MainStatus extends React.Component<any> {
    private speechService: SpeechService;

    constructor(props: any) {
        super(props);
        this.speechService = new SpeechService();
        this.state = {
            trafficLightStatus: null,
        };
    }

    componentDidMount() {
        var socket = new WebSocket(API_CONSTS.TRAFFIC_LIGHT_WS);

        socket.onopen = () => this.onWsOpen();

        socket.onmessage = (e) => {
            this.speechService.stop();
            const payload = JSON.parse(e.data);
            if (payload.after.id === this.props.trafficLight.id) {
                this.speechService.speak(
                    `Status do semáforo atualizado: ${
                        payload.newStatus === TRAFFIC_LIGHT_STATUSES.SAFE
                            ? SPEECHES.MAIN_STATUS.SAFE
                            : SPEECHES.MAIN_STATUS.WAIT
                    }`
                );
                this.setState({ trafficLightStatus: payload.newStatus });
            }
        };
    }

    onWsOpen() {
        console.log('Successfully connected to WebSocket server');
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
                    block={this.props.block}
                    navigation={this.props.navigation}
                    status={(this.state as any).trafficLightStatus}
                    style={this.styles.trafficLightContainer}
                />
            </View>
        );
    }
}

export { MainStatus };
