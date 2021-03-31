import React from 'react';
import { Text as TextComponent } from 'react-native';

const Text = (props: any) => {
    return <TextComponent style={props.style}>{props.text}</TextComponent>;
};

export default Text;
