import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

import Indicator from './components/Indicator';
import SliderInput from './components/SliderInput';

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
      <Indicator
        imcValue={imcValue}
        classification={classification}
        colorClassification={colorClassification}
      />

      <View style={styles.inputBlock}>
        <SliderInput 
          value={weight}
          text="Kg"
          updateState={setWeight}
          maxValue={200}
          step={1}
        />

        <SliderInput 
          value={height}
          text="m"
          updateState={setHeight}
          maxValue={2.5}
          step={0.01}
          floatValue={true}
        />
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

  inputBlock: {
    width: '100%',
    marginVertical: 50
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