import React from 'react';
import { Button as ButtonComponent } from 'react-native';

interface IButton {
    action?: any;
    accessibilityLabel?: string;
    title: string;
}

const Button = (props: IButton) => {
    return <ButtonComponent title={props.title} accessibilityLabel={props.accessibilityLabel} onPress={props.action} />;
};

export default Button;
