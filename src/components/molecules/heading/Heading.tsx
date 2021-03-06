import React from 'react';
import { StyleSheet } from 'react-native';
import { COLOR_BLACK } from '../../../styles/colors';
import { FONT_FAMILY_BOLD, LINE_HEIGHT_26 } from '../../../styles/typography';
import Text from '../../atoms/text/Text';

interface IHeading {
    text: string;
    style?: any
}

const Heading = (props: IHeading) => {

    const styles = StyleSheet.create({
        text: {
            fontFamily: FONT_FAMILY_BOLD,
            fontSize: LINE_HEIGHT_26,
            color: COLOR_BLACK,
            textAlign: 'left',
            ...props.style
        },
    });
    
    return <Text text={props.text} style={styles.text} />;
};

export default Heading;
