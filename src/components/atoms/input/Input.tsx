import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {
    COLOR_ACCENT,
    COLOR_BLACK,
    COLOR_GRAY_MEDIUM,
    COLOR_PRIMARY,
    COLOR_SECONDARY,
    COLOR_WHITE,
} from '../../../styles/colors';
import { FONT_FAMILY_BOLD, LINE_HEIGHT_16 } from '../../../styles/typography';

const Input = (props: any) => {
    let backgroundColor;

    if (props.primary) {
        backgroundColor = COLOR_PRIMARY;
    } else if (props.secondary) {
        backgroundColor = COLOR_SECONDARY;
    } else if (props.accent) {
        backgroundColor = COLOR_ACCENT;
    }

    const styles = StyleSheet.create({
        input: {
            height: 60,
            backgroundColor: backgroundColor || COLOR_GRAY_MEDIUM,
            fontFamily: FONT_FAMILY_BOLD,
            fontSize: LINE_HEIGHT_16,
            color: COLOR_WHITE,
            textAlign: 'left',
            borderRadius: 6,
            paddingLeft: '8%',
            ...props.style,
        },
    });

    return (
        <TextInput
            autoCapitalize={props.autoCapitalize}
            keyboardType={props.keyboardType || 'default'}
            secureTextEntry={props.secureTextEntry}
            value={props.value}
            textContentType={props.textContentType}
            onChangeText={props.onChange}
            placeholderTextColor={props.placeholderTextColor}
            placeholder={props.placeholder}
            style={styles.input}
        />
    );
};

export default Input;
