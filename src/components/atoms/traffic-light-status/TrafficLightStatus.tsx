import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLOR_GREEN, COLOR_RED, COLOR_WHITE } from '../../../styles/colors';
import { TRAFFIC_LIGHT_STATUSES } from '../../../utils/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Text from '../text/Text';

export const TrafficLightStatus = (props: any) => {
    let statusColor = COLOR_RED;

    if (props.safe == TRAFFIC_LIGHT_STATUSES.SAFE) {
        statusColor = COLOR_GREEN;
    } else {
        statusColor = COLOR_RED;
    }

    const styles = StyleSheet.create({
        container: {
            backgroundColor: statusColor,
            height: 90,
            borderRadius: 6,
            flexDirection: 'row',
            alignItems: 'center',
            ...props.style,
        },
        text: {
            color: COLOR_WHITE,
            paddingLeft: '8%',
            paddingRight: '42%'
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.text} text="Travessia segura" />
            <MaterialCommunityIcons name="timer-sand" color={COLOR_WHITE} size={24} />
        </View>
    );
};
