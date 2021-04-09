import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { COLOR_GRAY_LIGHT, COLOR_GRAY_MEDIUM } from '../../../styles/colors';
import GoogleIcon from '../../svgs/GoogleIcon';
import Text from '../text/Text';

class ButtonGoogleSign extends React.Component<any> {
    styles: any = {};

    constructor(props: any) {
        super(props);
        this.styles = StyleSheet.create({
            container: {
                height: 55,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
                borderColor: COLOR_GRAY_MEDIUM,
                borderStyle: 'solid',
                borderWidth: 0.5,
                ...this.props.style,
            },
            iconAndText: {
                flexDirection: 'row',
            },
            text: {
                marginLeft: '2%'
            }
        });
    }

    sign() {
    }

    render() {
        return (
            <TouchableHighlight
                style={this.styles.container}
                activeOpacity={0.6}
                underlayColor={COLOR_GRAY_LIGHT}
                onPress={() => this.sign()}
            >
                <View style={this.styles.iconAndText}>
                    <GoogleIcon />
                    <Text text="Google" style={this.styles.text}/>
                </View>
            </TouchableHighlight>
        );
    }
}

export { ButtonGoogleSign };
