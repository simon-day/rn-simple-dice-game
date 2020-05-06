import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet } from 'react-native';
import StartScreen from '../screens/StartScreen';
import GameScreen from '../screens/GameScreen';

const GameNavigator = createStackNavigator(
  {
    StartGame: StartScreen,
    PlayGame: GameScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitle: 'Dice Game',
      headerStyle: {
        backgroundColor: '#ccc',
      },
      headerTintColor: 'black',
    },
  }
);

export default createAppContainer(GameNavigator);
