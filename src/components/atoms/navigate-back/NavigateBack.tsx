import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { COLOR_BLACK, COLOR_GRAY_LIGHT, COLOR_WHITE } from '../../../styles/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SCREENS } from '../../../navigations/screens';
import Text from '../text/Text';

export const NavigateBack = (props: any) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            ...props.style,
        },
        text: {
            paddingLeft: '2%',
        },
    });

    function navigateBack() {
        props.navigation.navigate(SCREENS.LOGIN);
    }

    return (
        <View style={styles.container}>
            <TouchableHighlight activeOpacity={0.6} underlayColor={COLOR_GRAY_LIGHT} onPress={() => navigateBack()}>
                <MaterialCommunityIcons name="arrow-left" color={COLOR_BLACK} size={24} />
            </TouchableHighlight>
            <Pressable onPress={() => navigateBack()}>
                <Text style={styles.text} text="Voltar" />
            </Pressable>
        </View>
    );
};
