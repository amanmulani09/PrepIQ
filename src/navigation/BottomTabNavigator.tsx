import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabItems} from './routes';
import {Screens} from './constant';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          console.log(route.name);
        },
        headerShown: false,
      })}
      initialRouteName={Screens.HOME}>
      {TabItems.map((screen, index) => (
        <Tab.Screen
          name={screen.name}
          component={screen.component}
          key={Math.random() * index}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
