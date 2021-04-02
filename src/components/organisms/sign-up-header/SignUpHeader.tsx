import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLOR_WHITE } from '../../../styles/colors';
import MutedText from '../../atoms/muted-text/MutedText';
import Heading from '../../molecules/heading/Heading';

export const SignUpHeader = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLOR_WHITE,
            paddingTop: '25%'
        },
        textDistance: {
            paddingTop: '2%',
        },
    });

    return (
        <View style={styles.container}>
            <Heading text="Criar nova conta" />
            <MutedText
                style={styles.textDistance}
                text="Faça seu cadastro para ficar por dentro de todas as novidades"
            />
        </View>
    );
};
