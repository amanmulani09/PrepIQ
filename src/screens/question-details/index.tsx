import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const QuestionDetails = ({navigation}) => {
  return (
    <View>
      <Text>QuestionDetails Screen</Text>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          paddingHorizontal: 5,
          paddingVertical: 8,
          width: 90,
          marginHorizontal: 10,
          marginVertical: 20,
        }}
        onPress={() => {
          navigation.navigate('HOME');
        }}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuestionDetails;

const styles = StyleSheet.create({});
