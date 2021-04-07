import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR_WHITE } from '../../../styles/colors';
import { ButtonGoogleSign } from '../../atoms/button-google-sign/ButtonGoogleSign';
import Button from '../../atoms/button/Button';
import NoBorderButton from '../../atoms/no-border-button/NoBorderButton';
import Text from '../../atoms/text/Text';
export class LoginButtons extends React.Component<any> {
    styles = StyleSheet.create({
        container: {
            flex: 2,
            backgroundColor: COLOR_WHITE,
            marginTop: '2%',
        },
        buttonsMargin: {
            marginTop: '4%',
        },
    });

    render() {
        return (
            <View style={this.styles.container}>
                {this.props.loading && <Text text="Aguarde" />}
                {!this.props.loading && (
                    <View>
                        <Button primary title="Login" onPress={this.props.doLogin} />
                        <NoBorderButton
                            title="Pular"
                            style={this.styles.buttonsMargin}
                            onPress={this.props.loginAsGuest}
                        />
                    </View>
                )}
            </View>
        );
    }
}
