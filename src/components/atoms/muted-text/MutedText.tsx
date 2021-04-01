import React from 'react';
import { StyleSheet } from 'react-native';
import { Text as TextComponent } from 'react-native';
import { FONT_FAMILY_BOLD, LINE_HEIGHT_16 } from '../../../styles/typography';
import { COLOR_GRAY_MEDIUM } from '../../../styles/colors';

const MutedText = (props: any) => {
    const styles = StyleSheet.create({
        text: {
            fontFamily: FONT_FAMILY_BOLD,
            fontSize: LINE_HEIGHT_16,
            color: COLOR_GRAY_MEDIUM,
            textAlign: 'left',
            ...props.style
        },
    });

    return <TextComponent style={styles.text}>{props.text}</TextComponent>;
};
export default MutedText;
