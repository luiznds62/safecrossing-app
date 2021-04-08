export enum TRAFFIC_LIGHT_STATUSES {
    SAFE = 'Safe',
    WAIT = 'Wait',
}

export enum API_CONSTS {
    ADDRESS = 'http://safecrossing-api.herokuapp.com',
    TRAFFIC_LIGHT_WS = 'ws://safecrossing-api.herokuapp.com:80/traffic-light'
}

export enum HTTP_CODES {
    OK = 200,
    CREATED = 201,
}

export enum REDUX_CONTS {
    LOGGED_IN = 'LOGGED_IN',
    LOGGED_OUT = 'LOGGED_OUT',
}

export enum LOCATION {
    STATUS_GRANTED = 'granted',
}
