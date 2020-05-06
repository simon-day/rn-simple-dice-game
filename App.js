import React from 'react';
import GameNavigator from './navigation/GameNavigator';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return <GameNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
