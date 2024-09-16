import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabItems} from './routes';
import {Screens} from './constant';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Screen} from 'react-native-screens';
import TabIcon from '../components/tabicon';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // tabBarIcon: ({focused, color, size}) => (
        // ),
        headerShown: false,
      })}
      initialRouteName={Screens.HOME}>
      {TabItems.map((screen, index) => (
        <Tab.Screen
          name={screen.name}
          component={screen.component}
          key={Math.random() * index}
          options={{
            tabBarIcon: ({color, size}) => (
              <TabIcon color={color} size={size} name={screen.name} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
