import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLOR_GRAY_LIGHT, COLOR_WHITE } from '../../../styles/colors';
import { TouchableHighlight } from 'react-native-gesture-handler';

const IconButton = (props: any) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 55,
            backgroundColor: props.color,
            borderRadius: 6,
            justifyContent: 'center',
            alignItems: 'center',
            ...props.style
        },
    });

    return (
        <TouchableHighlight activeOpacity={0.6} underlayColor={COLOR_GRAY_LIGHT} onPress={props.onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name={props.icon} color={props.iconColor || COLOR_WHITE} size={24}/>
            </View>
        </TouchableHighlight>
    );
};

export default IconButton;
