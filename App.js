import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Calculator from './src/Calculator'

export default function App() {
  return (
    <>
      <Calculator/>
      <StatusBar style="dark" />
    </>
  );
}