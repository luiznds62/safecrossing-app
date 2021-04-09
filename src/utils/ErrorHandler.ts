export const extractErrorMessage = (response: any): string => {
    let errorsArray = response.data.message.split(',');

    if (errorsArray.length === 1) {
        // aqui comeca a pressa
        if (errorsArray[0] === 'Invalid credentials') {
            return 'Credenciais inválidas';
        }
        return errorsArray[0];
    }

    let messageArray = errorsArray[0].split('[');
    let errorMessage = messageArray[1].replace(']', '');
    return errorMessage;
};
