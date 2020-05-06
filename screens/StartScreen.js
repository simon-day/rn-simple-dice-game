import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

const StartScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.buttonView}>
        <Button
          title="Start Game"
          onPress={() => props.navigation.navigate('PlayGame')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StartScreen;
