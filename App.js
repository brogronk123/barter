import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {View} from 'react-native';
import LoginScreen from './screens/SignupLoginScreen';

export default function App() {
  return (
    <View>
      <AppContainer/>
    </View>
  );
}

const SwitchNavigation = createSwitchNavigator({
  WelcomeScreen:{screen: LoginScreen},
})

const AppContainer =  createAppContainer(SwitchNavigation);
