import {Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          paddingHorizontal: 5,
          paddingVertical: 8,
          width: 170,
          marginHorizontal: 10,
          marginVertical: 20,
        }}
        onPress={() => {
          navigation.navigate('QUESTIONDETAILS');
        }}>
        <Text>Go to QUESTIONDETAILS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
