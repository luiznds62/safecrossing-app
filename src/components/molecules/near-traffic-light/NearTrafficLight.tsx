import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLOR_ACCENT, COLOR_PRIMARY } from '../../../styles/colors';
import { FONT_SIZE_20 } from '../../../styles/typography';
import Heading from '../heading/Heading';
import Text from '../../atoms/text/Text';
import MutedText from '../../atoms/muted-text/MutedText';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

class NearTrafficLight extends React.Component<any> {
    constructor(props: any) {
        super(props);
        this.state = {
            coordinate: {
                latitude: -28.665847,
                longitude: -49.425230,
            },
            region: {
                latitude: -28.665847,
                longitude: -49.425230,
                latitudeDelta: 0.006,
                longitudeDelta: 0.006,
            },
        };
    }

    styles = StyleSheet.create({
        container: {
            ...this.props.style,
        },
        locationContainer: {
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: '2%',
        },
        streetContainer: {
            flexDirection: 'column',
            paddingLeft: '4%',
        },
        distanceContainer: {
            paddingLeft: '12%',
        },
        distanceText: {
            fontSize: FONT_SIZE_20,
            color: COLOR_PRIMARY,
        },
        mapContainer: {
            paddingTop: '8%',
            height: 160,
            borderRadius: 6,
        },
    });

    render() {
        return (
            <View style={this.styles.container}>
                <Heading text="Próximos" />
                <View style={this.styles.locationContainer}>
                    <MaterialCommunityIcons name="map-marker" size={24} color={COLOR_ACCENT} />
                    <View style={this.styles.streetContainer}>
                        <Text text="Avenida Universitária" />
                        <MutedText text="Criciúma, SC, Brasil" />
                    </View>
                    <View style={this.styles.distanceContainer}>
                        <Text style={this.styles.distanceText} text="50m apróx" />
                    </View>
                </View>
                {this.props.showMap && (
                    <View style={this.styles.mapContainer}>
                        <MapView style={this.styles.mapContainer} region={(this.state as any).region}>
                            <Marker
                                key={1}
                                coordinate={(this.state as any).coordinate}
                                title={'Semáforo'}
                                description={'Localização do semáforo mais próximo'}
                            />
                        </MapView>
                    </View>
                )}
            </View>
        );
    }
}

export { NearTrafficLight };
