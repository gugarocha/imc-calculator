import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Indicator({ imcValue, classification, colorClassification }) {
  // const colorClassification = '#2ecc71'
  // const imcValue = 20.0
  // const classification = 'Normal'

  return (
    <View style={[styles.indicator, { borderColor: colorClassification }]}>
      <Text style={[styles.imcValue, { color: colorClassification }]}>
        {imcValue.toFixed(1)}
      </Text>
      <Text style={[styles.classification, { color: colorClassification }]}>
        {classification}
      </Text>
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  indicator:{
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  imcValue:{
    fontSize: 60,
  },

  classification: {
    fontSize: 20,
  },
})