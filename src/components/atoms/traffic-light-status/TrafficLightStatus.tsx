import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLOR_GREEN, COLOR_RED } from '../../../styles/colors';
import { TRAFFIC_LIGHT_STATUSES } from '../../../utils/constants';
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
        },
    });
    return (
        <View style={styles.container}>
            <Text text="Travessia segura" />
        </View>
    );
};
