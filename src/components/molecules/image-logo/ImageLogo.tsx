import React from 'react';
import { View, StyleSheet } from 'react-native';
import TrafficLightMan from '../../svgs/TrafficLightMan';

const ImageLogo = () => {
    return (
        <View style={styles.container}>
            <TrafficLightMan />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
});

export default ImageLogo;
