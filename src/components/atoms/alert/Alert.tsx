import { Alert as AlertComponent } from 'react-native';

export const Alert = (
    title: string,
    message: string,
    cancelable: boolean = true,
    onPressOk: any,
    onPressCancel: any
) => {
    AlertComponent.alert(
        title,
        message,
        [
            { text: 'OK', onPress: onPressOk },
            {
                text: 'Cancelar',
                onPress: onPressCancel,
                style: 'cancel',
            }
        ],
        { cancelable: cancelable }
    );
};
