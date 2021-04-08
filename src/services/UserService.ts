import { Login } from './models/Login';
import { User } from './models/User';
import { API_CONSTS, HTTP_CODES, REDUX_CONTS } from '../utils/constants';
import { store } from '../store';
import axios from 'axios';

export class UserService {
    private address: String = API_CONSTS.ADDRESS;

    constructor() {}

    async createAccount(body: User) {
        try {
            const response = await axios.post(`${this.address}/users`, body);
            if (response.status === HTTP_CODES.CREATED) {
                return await this.login({
                    email: body.email,
                    password: body.password,
                });
            }else{
                return response;
            }
        } catch (error) {
            throw error;
        }
    }

    async login(body: Login) {
        try {
            const response = await axios.post(`${this.address}/auth`, body);
            
            store.dispatch({
                type: REDUX_CONTS.LOGGED_IN,
                user: {
                    id: response.data.id,
                    name: response.data.name,
                    email: response.data.email,
                },
                accessToken: response.data.accessToken,
            });

            return response;
        } catch (error) {
            throw error;
        }
    }
}
