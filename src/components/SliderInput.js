import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

function SliderInput({ value, text="", updateState, minValue=0, maxValue, step, floatValue=false }) {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputTextContainer}>
        <Text style={styles.inputValue}>{value}</Text>
        <Text style={styles.inputText}>{text}</Text>
      </View>
      <Slider
        style={styles.inputSlider}
        minimumValue={minValue}
        maximumValue={maxValue}
        step={step}
        onValueChange={value => updateState(floatValue ? value.toFixed(2) : value)}
        minimumTrackTintColor='#34495e'
        maximumTrackTintColor='#34495e'
        thumbTintColor='#34495e'
      />
    </View>
  );
};

export default SliderInput;

const styles = StyleSheet.create({
  inputContainer: {
    height: 80,
    marginBottom: 25,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'flex-end',
  },

  inputTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  inputValue: {
    fontSize: 35,
    color: '#bdc3c7',
    marginRight: 5,

  },

  inputText: {
    fontSize: 22,
    color: '#bdc3c7'
  },

  inputSlider: {
    marginVertical: 5,
  }
});