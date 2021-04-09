import * as Speech from 'expo-speech';

export class SpeechService {
    
    options: any = {
        language: 'pt-br'
    }

    speak(message: string) {
        console.log('Speaking: ' + message);
        Speech.speak(message, this.options);
    }

    stop() {
        Speech.stop();
    }
}