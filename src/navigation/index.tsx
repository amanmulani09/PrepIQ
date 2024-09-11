import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStack';
import BottomTabNavigator from './BottomTabNavigator';
let isUserLoggedIn = true;
const Router = () => {
  return (
    <NavigationContainer>
      {!isUserLoggedIn ? <AuthStackNavigator /> : <BottomTabNavigator />}
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
