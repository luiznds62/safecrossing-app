import React from 'react';
import { View, StyleSheet, Vibration } from 'react-native';
import { SpeechService } from '../../../services/SpeechService';
import {
    API_CONSTS,
    MIN_DISTANCE_TO_ATTACH,
    SPEECHES,
    TRAFFIC_LIGHT_STATUSES
} from '../../../utils/constants';
import { TrafficLightStatus } from '../../atoms/traffic-light-status/TrafficLightStatus';
import Heading from '../../molecules/heading/Heading';
class MainStatus extends React.Component<any> {
    private socket: any;
    private speechService: SpeechService;

    constructor(props: any) {
        super(props);
        this.speechService = new SpeechService();
        this.state = {
            trafficLightStatus: null,
        };
    }

    componentDidMount() {
        this.connectWS();
    }

    componentWillUnmount() {
        this.speechService.stop();
    }

    connectWS() {
        this.socket = new WebSocket(API_CONSTS.TRAFFIC_LIGHT_WS);

        this.socket.onopen = () => this.onWsOpen();

        this.socket.onmessage = (e: any) => {
            this.speechService.stop();
            const payload = JSON.parse(e.data);
            if (payload.after.id === this.props.trafficLight.id) {
                this.notifyUserStateChanged(payload.newStatus);
                this.setState({ trafficLightStatus: payload.newStatus });
            }
        };
    }

    notifyUserStateChanged(newStatus: any) {
        Vibration.cancel();

        // Notifica o usuario conforme o valor da constante, em cenário de testes poderia ser diminuido para 0.05km
        if (this.props.metadata.distance < MIN_DISTANCE_TO_ATTACH) {
            Vibration.vibrate();
            this.speechService.speak(
                `Status do semáforo atualizado: ${
                    newStatus === TRAFFIC_LIGHT_STATUSES.SAFE ? SPEECHES.MAIN_STATUS.SAFE : SPEECHES.MAIN_STATUS.WAIT
                }`
            );
        }
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
