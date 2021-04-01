import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { COLOR_ACCENT, COLOR_GRAY_MEDIUM, COLOR_PRIMARY, COLOR_SECONDARY, COLOR_WHITE } from '../../../styles/colors';
import { FONT_FAMILY_BOLD, LINE_HEIGHT_16 } from '../../../styles/typography';

const Button = (props: any) => {
    let backgroundColor;

    if (props.primary) {
        backgroundColor = COLOR_PRIMARY;
    } else if (props.secondary) {
        backgroundColor = COLOR_SECONDARY;
    } else if (props.accent) {
        backgroundColor = COLOR_ACCENT;
    }

    const styles = StyleSheet.create({
        button: {
            height: 55,
            backgroundColor: backgroundColor || COLOR_GRAY_MEDIUM,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
            ...props.style,
        },
        buttonText: {
            fontFamily: FONT_FAMILY_BOLD,
            fontSize: LINE_HEIGHT_16,
            color: COLOR_WHITE,
            textAlign: 'left',
        }
    });

    return (
        <TouchableHighlight style={styles.button} onPress={props.onPress}>
          <View>
            <Text style={styles.buttonText}>{props.title}</Text>
          </View>
        </TouchableHighlight>
    );
};

export default Button;
