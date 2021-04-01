import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLOR_WHITE } from '../../../styles/colors';
import MutedText from '../../atoms/muted-text/MutedText';
import Text from '../../atoms/text/Text';
import Heading from '../../molecules/heading/Heading';

export const LoginHeader = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLOR_WHITE,
        },
        header: {
            paddingTop: '40%',
            paddingLeft: '8%',
            paddingRight: '8%',
        },
        headerSubContent: {
            flexDirection: 'row',
            marginTop: '5%',
        },
        textMargin: {
            marginLeft: '2%',
        },
    });

    return (
        <View style={styles.header}>
            <Heading text="Olá," />
            <Heading text="Faça seu login." />
            <View style={styles.headerSubContent}>
                <MutedText text="Se preferir /" />
                <Text style={styles.textMargin} text="Criar nova conta" />
            </View>
        </View>
    );
};
