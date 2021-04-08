import React, { useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { COLOR_GREEN, COLOR_RED, COLOR_WHITE, COLOR_GRAY_MEDIUM } from '../../../styles/colors';
import { TRAFFIC_LIGHT_STATUSES } from '../../../utils/constants';
import { SCREENS } from '../../../navigations/screens';
import Text from '../text/Text';

export const TrafficLightStatus = (props: any) => {
    const descriptionSafe: any = 'Travessia segura';
    const descriptionWait: any = 'Aguarde para atravessar';
    const descriptionSearching: any = 'Buscando semáforos...';

    const [description, setDescription] = React.useState(descriptionSearching);
    const [statusColor, setStatusColor] = React.useState(COLOR_GRAY_MEDIUM);

    useEffect(() => {
        console.log(props.status)
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
            <View style={styles.container}>
                <Text style={styles.text} text={description} />
            </View>
        </Pressable>
    );
};
