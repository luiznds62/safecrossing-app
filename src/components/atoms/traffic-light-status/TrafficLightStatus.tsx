import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { COLOR_GREEN, COLOR_RED, COLOR_WHITE } from '../../../styles/colors';
import { TRAFFIC_LIGHT_STATUSES } from '../../../utils/constants';
import { SCREENS } from '../../../navigations/screens';
import Text from '../text/Text';

export const TrafficLightStatus = (props: any) => {
    let statusColor = COLOR_RED;

    if (props.safe == TRAFFIC_LIGHT_STATUSES.SAFE) {
        statusColor = COLOR_GREEN;
    } else {
        statusColor = COLOR_RED;
    }

    const textStyle = {
        color: COLOR_WHITE,
    };

    const containerStyle = {
        backgroundColor: statusColor,
        height: 90,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...props.style,
    };

    if (props.block) {
        delete (textStyle as any).paddingLeft;
        delete (textStyle as any).paddingRight;
    }

    const styles = StyleSheet.create({
        container: containerStyle,
        text: textStyle,
    });

    function moveToStatus() {
        if (!props.block) {
            props.navigation.navigate(SCREENS.STATUS);
        }
    }

    return (
        <Pressable onPress={() => moveToStatus()}>
            <View style={styles.container}>
                <Text style={styles.text} text="Travessia segura" />
            </View>
        </Pressable>
    );
};
