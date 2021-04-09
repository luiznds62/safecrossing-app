import React, { useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { COLOR_GREEN, COLOR_RED, COLOR_WHITE, COLOR_GRAY_MEDIUM, COLOR_GRAY_LIGHT } from '../../../styles/colors';
import { TRAFFIC_LIGHT_STATUSES } from '../../../utils/constants';
import { SCREENS } from '../../../navigations/screens';
import Text from '../text/Text';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

export const TrafficLightStatus = (props: any) => {
    const descriptionSafe: any = 'Travessia segura';
    const descriptionWait: any = 'Aguarde para atravessar';
    const descriptionSearching: any = 'Aguardando conexão com semáforo...';

    const [description, setDescription] = React.useState(descriptionSearching);
    const [statusColor, setStatusColor] = React.useState(COLOR_GRAY_MEDIUM);

    useEffect(() => {
        if (props.status) {
            if (props.status === TRAFFIC_LIGHT_STATUSES.SAFE) {
                setStatusColor(COLOR_GREEN as any);
                setDescription(descriptionSafe);
            } else if (props.status === TRAFFIC_LIGHT_STATUSES.WAIT) {
                setStatusColor(COLOR_RED as any);
                setDescription(descriptionWait);
            }
        }
    }, [props.status]);

    const containerStyle = {
        backgroundColor: statusColor,
        height: 90,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...props.style,
    };

    const styles = StyleSheet.create({
        container: containerStyle,
        text: {
            color: COLOR_WHITE,
        },
    });

    function moveToStatus() {
        if (!props.block) {
            props.navigation.navigate(SCREENS.STATUS);
        }
    }

    return (
        <Pressable onPress={() => moveToStatus()}>
            <TouchableOpacity activeOpacity={0.6}>
                <View style={styles.container}>
                    <Text style={styles.text} text={description} />
                </View>
            </TouchableOpacity>
        </Pressable>
    );
};
