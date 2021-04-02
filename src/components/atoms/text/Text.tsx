import React from 'react';
import { Text as TextComponent, StyleSheet } from 'react-native';
import { COLOR_BLACK } from '../../../styles/colors';
import { FONT_FAMILY_BOLD, LINE_HEIGHT_16 } from '../../../styles/typography';

const Text = (props: any) => {
    const styles = StyleSheet.create({
        text: {
            fontFamily: FONT_FAMILY_BOLD,
            fontSize: LINE_HEIGHT_16,
            color: COLOR_BLACK,
            textAlign: 'left',
            ...props.style,
        },
    });

    return <TextComponent onPress={props.onPress} style={styles.text}>{props.text}</TextComponent>;
};

export default Text;
