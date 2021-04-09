export enum TRAFFIC_LIGHT_STATUSES {
    SAFE = 'SAFE',
    WAIT = 'WAIT',
}

export enum API_CONSTS {
    ADDRESS = 'http://safecrossing-api.herokuapp.com',
    TRAFFIC_LIGHT_WS = 'ws://safecrossing-api.herokuapp.com:80/traffic-light',
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

export const SPEECHES = {
    INITIAL: {
        ON_MOUNT: 'Olá, bem vindo!. Este aplicativo irá te auxiliar na travessia de ruas com semáforos. Acione o botão na parte inferior da tela para continuar!',
        BUTTON_SPEECH: 'Botão de continuar para próxima tela.',
        IMAGE_SPEECH: 'Aqui se encontra um desenho de uma homem caminhando alegremente por uma rua com semáforo.'
    },
};

export const TOKEN_EXPIRATION_MILLIS = 800000;
