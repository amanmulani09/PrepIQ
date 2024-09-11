import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from './constant';
import {AuthStackScreens} from './routes';

const AuthStack = createNativeStackNavigator();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName={Screens.SIGNIN}>
      {AuthStackScreens.map(screen => (
        <AuthStack.Screen name={screen.name} component={screen.component} />
      ))}
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;

const styles = StyleSheet.create({});
