import React, { useState, useEffect } from 'react';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';

const GameScreen = (props) => {
  const [availableNumbers, setAvailableNumbers] = useState([]);
  const [diceArray, setDiceArray] = useState([]);
  const [goal, setGoal] = useState(null);

  const helper = {
    1: 'dice-one',
    2: 'dice-two',
    3: 'dice-three',
    4: 'dice-four',
    5: 'dice-five',
    6: 'dice-six',
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const restartGame = () => {
    setAvailableNumbers([]);
    setDiceArray([]);
    setGoal(null);
    initializeGame();
  };

  const initializeGame = () => {
    const numbers = [];
    const die = [];
    for (let i = 0; i < 5; i++) {
      let num = Math.ceil(Math.random() * 6);
      numbers.push(num);
      die.push(helper[num]);
    }
    shuffleArray(die);
    setDiceArray(die);
    let numberToGet = numbers[0];
    let solution = [numbers[0]];

    for (let i = 1; i < 5; i++) {
      let randomNum = Math.random();
      if (randomNum >= 0.75) {
        numberToGet += numbers[i];
        solution.push('+');
        solution.push(numbers[i]);
      } else if (randomNum >= 0.5 && randomNum < 0.75) {
        numberToGet *= numbers[i];
        solution.push('*');
        solution.push(numbers[i]);
      } else if (randomNum >= 0.25 && randomNum < 0.5) {
        if (numberToGet % numbers[i] === 0) {
          numberToGet /= numbers[i];
          solution.push('/');
          solution.push(numbers[i]);
        } else {
          numberToGet += numbers[i];
          solution.push('+');
          solution.push(numbers[i]);
        }
      } else {
        if (numberToGet > numbers[i]) {
          numberToGet -= numbers[i];
          solution.push('-');
          solution.push(numbers[i]);
        } else {
          numberToGet *= numbers[i];
          solution.push('*');
          solution.push(numbers[i]);
        }
      }
    }
    console.log(numberToGet);
    setGoal(numberToGet);
    console.log(solution.join(' '));
    setAvailableNumbers(numbers);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <View style={styles.gameScreen}>
      <View style={styles.goalView}>
        <View>
          <Text style={styles.goal}>{goal}</Text>
        </View>
      </View>
      <View style={styles.diceArea}>
        {diceArray.length === 5 &&
          diceArray.map((dice, i) => (
            <TouchableOpacity
              key={i}
              onPress={props.onRemove}
              style={styles.diceBtn}
            >
              <FontAwesome5
                name={dice}
                backgroundColor="transparent"
                size={110}
                color="black"
              />
            </TouchableOpacity>
          ))}
      </View>
      <View style={styles.playAgain}>
        <Button title="Roll Again" onPress={restartGame} />
      </View>
    </View>
  );
};

GameScreen.navigationOptions = {
  headerTitle: 'PLAY',
};

const styles = StyleSheet.create({
  gameScreen: {
    padding: 50,
    flex: 1,
    // height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  goalView: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    alignContent: 'center',
    justifyContent: 'center',
    borderBottomColor: '#888',
    backgroundColor: '#888',
  },
  goal: {
    // textAlign: 'center',
    fontSize: 55,
    alignSelf: 'center',
  },
  diceArea: {
    // height: '50%',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  diceBtn: {
    padding: 20,
  },
  playAgain: {
    // height: '15%',
  },
});

export default GameScreen;
