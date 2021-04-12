import * as Speech from 'expo-speech';
import { store } from '../store';

export class SpeechService {
    haveToSpeak: boolean = true;

    constructor() {
        const speakReducer: any = store.getState().speakReducer;
        console.log(speakReducer)
        this.haveToSpeak = speakReducer.speak;
    }

    options: any = {
        language: 'pt-br',
    };

    speak(message: string) {
        console.log(this.haveToSpeak)
        if (this.haveToSpeak) {
            console.log('Speaking: ' + message);
            Speech.speak(message, this.options);
        }
    }

    stop() {
        Speech.stop();
    }
}
