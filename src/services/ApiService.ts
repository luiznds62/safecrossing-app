import { Login } from './models/Login';
import { User } from './models/User';
import { API_CONSTS, HTTP_CODES } from '../utils/constants';
import axios from 'axios';

export class ApiService {
    private address: String = API_CONSTS.ADDRESS;
    private bearerToken: String = '';

    constructor() {}

    async createAccount(body: User) {
        return await axios.post(`${this.address}/users`, body);
    }

    async login(body: Login) {
        try {
            const response = await axios.post(`${this.address}/auth`, body);

            if (response.status === HTTP_CODES.OK) {
                this.bearerToken = response.data.accessToken;
            }

            return response;
        } catch (error) {
            throw error;
        }
    }
}
