import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLOR_PRIMARY, COLOR_WHITE } from '../../../styles/colors';
import MutedText from '../../atoms/muted-text/MutedText';
import Heading from '../../molecules/heading/Heading';

export const MainHeader = (props: any) => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLOR_WHITE,
            paddingTop: '35%',
        },
        headerHeading: {
            color: COLOR_PRIMARY,
        },
        bottomHeader: {
            paddingTop: '10%',
        },
        textDistance: {
            paddingTop: '2%',
            textAlign: 'left',
            lineHeight: 25
        }
    });

    return (
        <View style={styles.container}>
            <Heading style={styles.headerHeading} text={`Olá, ${props.name || 'amigo'}`} />
            <MutedText text="Bem-vindo!" />

            <View style={styles.bottomHeader}>
                <Heading text="Procurando semáforos..." />
                <MutedText
                    style={styles.textDistance}
                    text="Ao se aproximar de um semáforo serão disparados alertas sonoros e vibratórios para te alertar se é seguro realizar a travessia."
                />
            </View>
        </View>
    );
};
