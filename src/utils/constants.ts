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
        ON_MOUNT: 'Olá, bem vindo!. Esta é a tela inicial. Este aplicativo irá te auxiliar na travessia de ruas com semáforos. Acione o botão na parte inferior da tela para continuar!',
        BUTTON_SPEECH: 'Botão de continuar para próxima tela.',
        IMAGE_SPEECH: 'Aqui se encontra um desenho de uma homem caminhando alegremente por uma rua com semáforo.'
    },
    LOGIN: {
        ON_MOUNT: 'Esta é a tela de login. Nela você pode criar uma conta, informar seu e-mail e senha e logar ou pular essa etapa e seguir como convidado!'
    },
    SIGN_UP: {
        ON_MOUNT: 'Esta é a tela de criação de contas. Nela você informa seu nome, e-mail e uma senha com mais de 6 caractéres e ao final será direcionado para tela principal.'
    },
    MAIN: {
        ON_MOUNT: 'Olá Convidado, esta é a tela principal, estaremos a partir de agora procurando semáforos próximos a sua localização e emitiremos alertas de segurança, fique atento!'
    },
    MAIN_STATUS: {
        SAFE: 'Seguro para realizar travessia!',
        WAIT: 'Aguarde para atravessar!'
    }
};

export const TOKEN_EXPIRATION_MILLIS = 800000;
