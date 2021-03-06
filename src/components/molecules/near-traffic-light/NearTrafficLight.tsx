import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLOR_ACCENT, COLOR_PRIMARY } from '../../../styles/colors';
import { FONT_SIZE_20 } from '../../../styles/typography';
import { Marker } from 'react-native-maps';
import { TrafficLightService } from '../../../services/TrafficLightService';
import { LocationService } from '../../../services/LocationService';
import { Alert } from '../../atoms/alert/Alert';
import { MainStatus } from '../../organisms/main-status/MainStatus';
import { SpeechService } from '../../../services/SpeechService';
import Heading from '../heading/Heading';
import Text from '../../atoms/text/Text';
import MutedText from '../../atoms/muted-text/MutedText';
import MapView from 'react-native-maps';
class NearTrafficLight extends React.Component<any> {
    private locationService: LocationService;
    private trafficLightService: TrafficLightService;
    private speechService: SpeechService;

    constructor(props: any) {
        super(props);
        this.locationService = new LocationService();
        this.trafficLightService = new TrafficLightService();
        this.speechService = new SpeechService();
        this.state = {
            location: '',
            coordinate: {
                latitude: '',
                longitude: '',
            },
            nearbyTrafficLight: {},
            metadata: {},
            loading: false,
        };
    }

    setLoading(bool: boolean) {
        this.setState({ loading: bool });
    }

    async fetchData() {
        try {
            this.setLoading(true);
            this.speechService.stop();
            const location = await this.locationService.getCurrentLocation();
            const nearbyTrafficLight = await this.trafficLightService.findNearby(
                location.coords.latitude,
                location.coords.longitude
            );

            this.speechService.speak(
                `Semáforo mais próximo encontrado em: ${nearbyTrafficLight.metadata.destinationAddress}, a uma distância de: ${nearbyTrafficLight.metadata.distance} km`
            );

            this.setState({
                location: location,
                nearbyTrafficLight: nearbyTrafficLight.trafficLight,
                metadata: nearbyTrafficLight.metadata,
            });
        } catch (error) {
            Alert(
                'Erro ao buscar',
                'Ocorreu um erro ao buscar semáforos próximos, fique alerta!',
                false,
                () => {},
                () => {}
            );
        } finally {
            this.setLoading(false);
        }
    }

    async componentDidMount() {
        await this.fetchData();
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
            paddingLeft: '6%',
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
        mainStatus: {
            paddingTop: '16%',
        },
        cardStyle: {
            height: this.props.block ? '90%' : '77%',
        },
    });

    render() {
        return (
            <View style={this.styles.container}>
                <Heading text="Próximos" />
                <View style={this.styles.locationContainer}>
                    {!(this.state as any).loading ? (
                        <>
                            <MaterialCommunityIcons name="map-marker" size={24} color={COLOR_ACCENT} />
                            <View style={this.styles.streetContainer}>
                                <Text text={(this.state as any).metadata.destinationAddress} />
                                <MutedText
                                    text={`${(this.state as any).metadata.destinationCity}, ${
                                        (this.state as any).metadata.destinationState
                                    }, ${(this.state as any).metadata.destinationCountry}`}
                                />
                            </View>
                            <View style={this.styles.distanceContainer}>
                                <Text
                                    style={this.styles.distanceText}
                                    text={`${(this.state as any).metadata.distance}km apróx`}
                                />
                            </View>
                        </>
                    ) : (
                        <View>
                            <MutedText text="Carregando, aguarde..." />
                        </View>
                    )}
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
                <MainStatus
                    block={this.props.block}
                    metadata={(this.state as any).metadata}
                    trafficLight={(this.state as any).nearbyTrafficLight}
                    navigation={this.props.navigation}
                    style={this.styles.mainStatus}
                    cardStyle={this.styles.cardStyle}
                />
            </View>
        );
    }
}

export { NearTrafficLight };
