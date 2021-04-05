import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TRAFFIC_LIGHT_STATUSES } from '../../../utils/constants';
import {TrafficLightStatus} from '../../atoms/traffic-light-status/TrafficLightStatus';
import Heading from '../../molecules/heading/Heading';
class MainStatus extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }

    styles = StyleSheet.create({
        container: {
            ...this.props.style,
        },
        trafficLightContainer: {
            marginTop: '4%'
        }
    });

    render() {
        return (
            <View style={this.styles.container}>
                <Heading text="Status" />
                <TrafficLightStatus style={this.styles.trafficLightContainer} safe={TRAFFIC_LIGHT_STATUSES.SAFE} />
            </View>
        );
    }
}

export { MainStatus };
