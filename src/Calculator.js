import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// Main component
// Componente princípal
function Calculator() {
  const [imcValue, setImcValue] = useState(0);
  const [rating, setRating] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [colorRating, setColotRating] = useState('#7f8c8d')

  function imcCalculation(weight, height) {
    const imc = weight / (height ** 2);
    if (imc < 18.5) {
      setRating('Magreza');
      setColotRating('#e74c3c');
    } else if (18.5 <= imc && imc < 25) {
      setRating('Normal');
      setColotRating('#2ecc71');
    } else if (25 <= imc && imc < 30) {
      setRating('Sobrepeso');
      setColotRating('#f1c40f');
    } else if (30 <= imc && imc < 40) {
      setRating('Obesidade');
      setColotRating('#f39c12')
    } else if (imc >= 40) {
      setRating('Obesidade Grave');
      setColotRating('#e74c3c');
    }
    setImcValue(imc);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.indicator, {borderColor: colorRating}]}>
        <Text style={[styles.imcValue, {color: colorRating}]}>
          {imcValue.toFixed(1)}
        </Text>
        <Text style={[styles.rating, {color: colorRating}]}>
          {rating}
        </Text>
      </View>
      <View style={styles.inputBlock}>
        <TextInput
          style={styles.input}
          placeholder='Peso (Kg)'
          keyboardType='number-pad'
          value={weight}
          onChangeText={value => {
            value.replace(',', '.')
            setWeight(Number(value.replace(',', '.')))
          }}
        />
        <TextInput
          style={styles.input}
          placeholder='Altura (m)'
          keyboardType='number-pad'
          value={height}
          onChangeText={value => {
            setHeight(Number(value.replace(',', '.')))
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          imcCalculation(weight, height)
          setWeight('')
          setHeight('')
        }}
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

  rating: {
    fontSize: 20,
  },

  inputBlock: {
    width: '100%',
    marginVertical: 50
  },
  
  input: {
    height: 60,
    marginBottom: 25,
    backgroundColor: '#fff',
    borderRadius: 8,
    fontSize: 24,
    textAlign: 'center'
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