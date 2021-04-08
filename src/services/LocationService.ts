import { Alert } from '../components/atoms/alert/Alert';
import { LOCATION } from '../utils/constants';
import * as Location from 'expo-location';
import axios from 'axios';

export class LocationService {
    private apiKey: string = 'AIzaSyCX8NCjW4ys8_a9-UNQ4_MjkEEZcyp-QkE';

    constructor() {
        this.getGrants();
    }

    async getGrants() {
        let { status } = await Location.requestPermissionsAsync();
        if ((status as any) !== LOCATION.STATUS_GRANTED) {
            Alert(
                'Erro',
                'O aplicativo necessita permissão de acesso á localização',
                false,
                () => {},
                () => {}
            );
            return;
        }
    }

    async reverseGeocode(lat: any, long: any) {
        const googleApiAddress: string = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${this.apiKey}`;

        const response = await axios.get(googleApiAddress);

        return response.data;
    }

    async getCurrentLocation() {
        const location = await Location.getCurrentPositionAsync({});
        // const addresss = await this.reverseGeocode(location.coords.latitude, location.coords.longitude);
        // console.log(addresss);
        return location;
    }
}
