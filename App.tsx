import 'react-native-gesture-handler';
import { useFonts, NunitoSans_700Bold, NunitoSans_800ExtraBold } from '@expo-google-fonts/nunito-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { STACK_NAVIGATIONS_OPTIONS } from './src/navigations/options';
import { SCREENS } from './src/navigations/screens';
import React from 'react';
import AppLoading from 'expo-app-loading';
import Initial from './src/screens/initial/Initial';
import Login from './src/screens/login/Login';
import Main from './src/screens/main/Main';
import SignUp from './src/screens/sign-up/SignUp';
import Status from './src/screens/status/Status';

export default function App() {
    let [fontsLoaded] = useFonts({
        NunitoSans_700Bold,
        NunitoSans_800ExtraBold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={STACK_NAVIGATIONS_OPTIONS}>
                <Stack.Screen name={SCREENS.INITIAL} component={Initial} />
                <Stack.Screen name={SCREENS.LOGIN} component={Login} />
                <Stack.Screen name={SCREENS.MAIN} component={Main} />
                <Stack.Screen name={SCREENS.STATUS} component={Status} />
                <Stack.Screen name={SCREENS.SIGN_UP} component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
