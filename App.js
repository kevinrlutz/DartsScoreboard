import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import React from 'react';

export default function App() {
  const [playerOne, setPlayerOne] = React.useState('Player 1');
  const [playerTwo, setPlayerTwo] = React.useState('Player 2');

  const [oneScore, setOneScore] = React.useState([0, 0, 0, 0, 0, 0, 0]);
  const [twoScore, setTwoScore] = React.useState([0, 0, 0, 0, 0, 0, 0]);

  const reset = () => {
    setOneScore([0, 0, 0, 0, 0, 0, 0]);
    setTwoScore([0, 0, 0, 0, 0, 0, 0]);
    setPlayerOne('Player 1');
    setPlayerTwo('Player 2');
  }

  const handleIncrease = (player, number) => { 
    if (player === 1) {
      if (oneScore[number] < 3) {
        setOneScore(oneScore.map((item, index) => {
          if (index === number) {
            return item + 1;
          }
          return item;
        }));
      }
    } else {
      if (twoScore[number] < 3) {
        setTwoScore(twoScore.map((item, index) => {
          if (index === number) {
            return item + 1;
          }
          return item;
        }));
      }
    }
  }

  const handleDecrease = (player, number) => {
    if (player === 1) {
      if (oneScore[number] > 0) {
        setOneScore(oneScore.map((item, index) => {
          if (index === number) {
            return item - 1;
          }
          return item;
        }));
      }
    } else {
      if (twoScore[number] > 0) {
        setTwoScore(twoScore.map((item, index) => {
          if (index === number) {
            return item - 1;
          }
          return item;
        }));
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dartboard Scoring App</Text>
      <Image source={require('./assets/dartboard.jpg')} style={styles.dartboard} />
      <View style={styles.scoreboard}>
        <View style={styles.scoreBoardColumn}>
          <TextInput style={styles.playerName} onChangeText={setPlayerOne} value={playerOne} />
          <View style={styles.scoreLine}>
            <Text style={styles.score}>15: {oneScore[0]}</Text>
            <TouchableHighlight onPress={() => handleIncrease(1, 0)}><Text style={styles.scoreButton}>+</Text></TouchableHighlight>
            <TouchableHighlight onPress={() => handleDecrease(1, 0)}><Text style={styles.scoreButton}>-</Text></TouchableHighlight>
          </View>
          <View style={styles.scoreLine}>
            <Text style={styles.score}>16: {oneScore[1]}</Text>
            <TouchableHighlight onPress={() => handleIncrease(1, 1)}><Text style={styles.scoreButton}>+</Text></TouchableHighlight>
            <TouchableHighlight onPress={() => handleDecrease(1, 1)}><Text style={styles.scoreButton}>-</Text></TouchableHighlight>
          </View>
          <View style={styles.scoreLine}>
            <Text style={styles.score}>17: {oneScore[2]}</Text>
            <TouchableHighlight onPress={() => handleIncrease(1, 2)}><Text style={styles.scoreButton}>+</Text></TouchableHighlight>
            <TouchableHighlight onPress={() => handleDecrease(1, 2)}><Text style={styles.scoreButton}>-</Text></TouchableHighlight>
          </View>
          <View style={styles.scoreLine}>
            <Text style={styles.score}>18: {oneScore[3]}</Text>
            <TouchableHighlight onPress={() => handleIncrease(1, 3)}><Text style={styles.scoreButton}>+</Text></TouchableHighlight>
            <TouchableHighlight onPress={() => handleDecrease(1, 3)}><Text style={styles.scoreButton}>-</Text></TouchableHighlight>
          </View>
          <View style={styles.scoreLine}>
            <Text style={styles.score}>19: {oneScore[4]}</Text>
            <TouchableHighlight onPress={() => handleIncrease(1, 4)}><Text style={styles.scoreButton}>+</Text></TouchableHighlight>
            <TouchableHighlight onPress={() => handleDecrease(1, 4)}><Text style={styles.scoreButton}>-</Text></TouchableHighlight>
          </View>
          <View style={styles.scoreLine}>
            <Text style={styles.score}>20: {oneScore[5]}</Text>
            <TouchableHighlight onPress={() => handleIncrease(1, 5)}><Text style={styles.scoreButton}>+</Text></TouchableHighlight>
            <TouchableHighlight onPress={() => handleDecrease(1, 5)}><Text style={styles.scoreButton}>-</Text></TouchableHighlight>
          </View>
          <View style={styles.scoreLine}>
            <Text style={styles.score}>BE: {oneScore[6]}</Text>
            <TouchableHighlight onPress={() => handleIncrease(1, 6)}><Text style={styles.scoreButton}>+</Text></TouchableHighlight>
            <TouchableHighlight onPress={() => handleDecrease(1, 6)}><Text style={styles.scoreButton}>-</Text></TouchableHighlight>
          </View>
        </View>
        <View style={styles.scoreBoardColumn}>
          <TextInput style={styles.playerName} onChangeText={setPlayerTwo} value={playerTwo} />
          <View style={styles.scoreLine}>
            <Text style={styles.score}>15: {twoScore[0]}</Text>
            <TouchableHighlight onPress={() => handleIncrease(2, 0)}><Text style={styles.scoreButton}>+</Text></TouchableHighlight>
            <TouchableHighlight onPress={() => handleDecrease(2, 0)}><Text style={styles.scoreButton}>-</Text></TouchableHighlight>
          </View>
          <View style={styles.scoreLine}>
            <Text style={styles.score}>16: {twoScore[1]}</Text>
            <TouchableHighlight onPress={() => handleIncrease(2, 1)}><Text style={styles.scoreButton}>+</Text></TouchableHighlight>
            <TouchableHighlight onPress={() => handleDecrease(2, 1)}><Text style={styles.scoreButton}>-</Text></TouchableHighlight>
          </View>
          <View style={styles.scoreLine}>
            <Text style={styles.score}>17: {twoScore[2]}</Text>
            <TouchableHighlight onPress={() => handleIncrease(2, 2)}><Text style={styles.scoreButton}>+</Text></TouchableHighlight>
            <TouchableHighlight onPress={() => handleDecrease(2, 2)}><Text style={styles.scoreButton}>-</Text></TouchableHighlight>
          </View>
          <View style={styles.scoreLine}>
            <Text style={styles.score}>18: {twoScore[3]}</Text>
            <TouchableHighlight onPress={() => handleIncrease(2, 3)}><Text style={styles.scoreButton}>+</Text></TouchableHighlight>
            <TouchableHighlight onPress={() => handleDecrease(2, 3)}><Text style={styles.scoreButton}>-</Text></TouchableHighlight>
          </View>
          <View style={styles.scoreLine}>
            <Text style={styles.score}>19: {twoScore[4]}</Text>
            <TouchableHighlight onPress={() => handleIncrease(2, 4)}><Text style={styles.scoreButton}>+</Text></TouchableHighlight>
            <TouchableHighlight onPress={() => handleDecrease(2, 4)}><Text style={styles.scoreButton}>-</Text></TouchableHighlight>
          </View>
          <View style={styles.scoreLine}>
            <Text style={styles.score}>20: {twoScore[5]}</Text>
            <TouchableHighlight onPress={() => handleIncrease(2, 5)}><Text style={styles.scoreButton}>+</Text></TouchableHighlight>
            <TouchableHighlight onPress={() => handleDecrease(2, 5)}><Text style={styles.scoreButton}>-</Text></TouchableHighlight>
          </View>
          <View style={styles.scoreLine}>
            <Text style={styles.score}>BE: {twoScore[6]}</Text>
            <TouchableHighlight onPress={() => handleIncrease(2, 6)}><Text style={styles.scoreButton}>+</Text></TouchableHighlight>
            <TouchableHighlight onPress={() => handleDecrease(2, 6)}><Text style={styles.scoreButton}>-</Text></TouchableHighlight>
          </View>
        </View>
      </View>
      <TouchableHighlight onPress={reset}>
        <Text style={styles.resetButton}>Reset</Text>
      </TouchableHighlight>
      <Text>Built by Kevin Lutz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  dartboard: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },

  scoreboard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'black',
    width: '90%',
    maxWidth: 400,
  },

  score: {
    fontSize: 22,
  },

  scoreLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  scoreButton: {
    fontSize: 20,
    marginRight: 20,
    marginLeft: 20,
  },

  playerName: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
  },

  scoreBoardColumn: {
    flexDirection: 'column',
    width: '50%',
    borderWidth: 2,
  },

  resetButton: { 
    fontSize: 18,
    backgroundColor: '#ff0000',
    borderRadius: 5,
    padding: 5,
    color: 'white',
    marginTop: 10,
    marginBottom: 20,
  }

});