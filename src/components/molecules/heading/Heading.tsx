import React from 'react';
import { StyleSheet } from 'react-native';
import { FONT_FAMILY_BOLD, LINE_HEIGHT_26 } from '../../../styles/typography';
import Text from '../../atoms/text/Text';

interface IHeading {
    text: string;
}

const Heading = (props: IHeading) => {
    return <Text text={props.text} style={styles.text} />;
};

const styles = StyleSheet.create({
    text: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: LINE_HEIGHT_26,
        textAlign: 'left'
    },
});

export default Heading;