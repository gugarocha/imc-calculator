import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

// Main component
// Componente princípal
function Calculator() {
  const [imcValue, setImcValue] = useState(0);
  const [classification, setClassification] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [colorClassification, setColorClassification] = useState('#7f8c8d')

  // function responsible for calculating the imc and defining its classification with the corresponding color
  // função responsável por calcular o imc e definir sua classificação com a cor correspondente
  function imcCalculation(weight, height) {
    const imc = weight / (height ** 2);
    if (imc < 18.5) {
      setClassification('Magreza');
      setColorClassification('#e74c3c');
    } else if (18.5 <= imc && imc < 25) {
      setClassification('Normal');
      setColorClassification('#2ecc71');
    } else if (25 <= imc && imc < 30) {
      setClassification('Sobrepeso');
      setColorClassification('#f1c40f');
    } else if (30 <= imc && imc < 40) {
      setClassification('Obesidade');
      setColorClassification('#f39c12')
    } else if (imc >= 40) {
      setClassification('Obesidade Grave');
      setColorClassification('#e74c3c');
    }
    setImcValue(imc);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.indicator, {borderColor: colorClassification}]}>
        <Text style={[styles.imcValue, {color: colorClassification}]}>
          {imcValue.toFixed(1)}
        </Text>
        <Text style={[styles.classification, {color: colorClassification}]}>
          {classification}
        </Text>
      </View>
      <View style={styles.inputBlock}>

        <View style={styles.inputContainer}>
          <View style={styles.inputTextContainer}>
            <Text style={styles.inputValue}>{weight}</Text>
            <Text style={styles.inputText}>Kg</Text>
          </View>
          <Slider 
            style={styles.inputSlider}
            minimumValue={0}
            maximumValue={200}
            step={1}
            onValueChange={value => setWeight(value)}
            minimumTrackTintColor='#34495e'
            maximumTrackTintColor='#34495e'
            thumbTintColor='#34495e'
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputTextContainer}>
            <Text style={styles.inputValue}>{height}</Text>
            <Text style={styles.inputText}>m</Text>
          </View>
          <Slider 
            style={styles.inputSlider}
            minimumValue={0}
            maximumValue={2.5}
            step={0.01}
            onValueChange={value => setHeight(value.toFixed(2))}
            minimumTrackTintColor='#34495e'
            maximumTrackTintColor='#34495e'
            thumbTintColor='#34495e'
          />
        </View>

      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => imcCalculation(weight, height)}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 40
  },

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

  inputBlock: {
    width: '100%',
    marginVertical: 50
  },
  
  inputContainer: {
    height: 80,
    marginBottom: 25,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'flex-end'
  },

  inputTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  inputValue: {
    fontSize: 35,
    color: '#bdc3c7',
    marginRight: 5
  },

  inputText: {
    fontSize: 24,
    color: '#bdc3c7',
  },

  inputSlider: {
    marginBottom: 5,
  },

  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#34495e',
    borderRadius: 8,
    justifyContent: 'center',
  },
  
  buttonText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
  }
});