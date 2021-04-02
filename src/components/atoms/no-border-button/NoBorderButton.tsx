import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { COLOR_GRAY_LIGHT, COLOR_GRAY_MEDIUM, COLOR_WHITE } from '../../../styles/colors';
import { FONT_FAMILY_BOLD, LINE_HEIGHT_16 } from '../../../styles/typography';

const NoBorderButton = (props: any) => {
    const styles = StyleSheet.create({
        button: {
            height: 55,
            backgroundColor: COLOR_WHITE,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
            ...props.style,
        },
        buttonText: {
            fontFamily: FONT_FAMILY_BOLD,
            fontSize: LINE_HEIGHT_16,
            color: COLOR_GRAY_MEDIUM,
            textAlign: 'left',
        },
    });

    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={COLOR_GRAY_LIGHT}
            style={styles.button}
            onPress={props.onPress}
        >
            <View>
                <Text style={styles.buttonText}>{props.title}</Text>
            </View>
        </TouchableHighlight>
    );
};

export default NoBorderButton;
