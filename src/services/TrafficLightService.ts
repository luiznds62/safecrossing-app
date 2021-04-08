import { API_CONSTS } from '../utils/constants';
import { store } from '../store/index';
import { TrafficLight } from './models/TrafficLight';
import axios from 'axios';
import { extractAddressFromMetadata } from '../utils/AddressUtils';
import { Metadata } from './models/Metadata';

export class TrafficLightService {
    private userStore: any = store.getState().userReducer;
    private address: String = API_CONSTS.ADDRESS;

    constructor() {
        axios.defaults.headers.common = { Authorization: `Bearer ${this.userStore.accessToken}` };
    }

    formatMetadata(metadata: any): Metadata {
        const originData: any = extractAddressFromMetadata(metadata.originAddress);
        const destinationData: any = extractAddressFromMetadata(metadata.destinationAddress);

        return {
            originAddress: originData.address,
            originNeighborhood: originData.neighborhood,
            originCity: originData.city,
            originState: originData.state,
            originCep: originData.cep,
            originCountry: originData.country,
            destinationAddress: destinationData.address,
            destinationNeighborhood: destinationData.neighborhood,
            destinationCity: destinationData.city,
            destinationState: destinationData.state,
            destinationCep: destinationData.cep,
            destinationCountry: destinationData.country,
            distance: metadata.distance,
            duration: metadata.duration,
        };
    }

    async findNearby(lat: any, long: any) {
        try {
            const response = await axios.get(`${this.address}/traffic-lights/nearby/${lat}, ${long}`);
            response.data.metadata = this.formatMetadata(response.data.metadata);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
