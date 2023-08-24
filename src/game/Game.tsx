import React , {useState, useEffect} from 'react';
import { View, Alert } from 'react-native';
import { GameProps } from './Game.interface';
import { ButtonStart } from '../components/Button';
import { GameSquareView } from '../components/SquareView';
import { styles } from './Game.styles';

export const Game = ({navigation}: GameProps) => {
  const [isPlayer1, setIsPlayer1] = useState(true)
  const [gameState, setGameState] = useState(Array(9).fill(''));
  const [message, setMessage] = useState('');

  const winningPatterns = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6], 
  ];

  const handleEndGame = () => {
    navigation.goBack();
  };

  const handlePlayerMove = (position: number) => {
    if (isPlayer1) {
      setIsPlayer1(false);
    } else {
      setIsPlayer1(true);
    }
    const updatedGameState = [...gameState];
    updatedGameState[position] = isPlayer1 ? '1' : '2';
    setGameState(updatedGameState);

    checkForWin(updatedGameState);
  };

  const checkForWin = (currentGameState: string[]) => {
    for (const pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (
        currentGameState[a] &&
        currentGameState[a] === currentGameState[b] &&
        currentGameState[a] === currentGameState[c]
      ) {
        // Win condition is met    
        showWinAlert();
        return;
      }
    }

    if (!currentGameState.includes('')) {
      // Game is a draw
      showDrawAlert();
    }
  };

  useEffect(() => { 
    setMessage(isPlayer1 ? 'Player 0' : 'Player X')
  },[isPlayer1, setIsPlayer1])

  const showWinAlert = () => {
    Alert.alert('Congratulations!', `${message} won!`, [{ text: 'OK', onPress: () => handleEndGame() }]);
  };

  const showDrawAlert = () => {
    Alert.alert('Draw!', 'The game is a draw.', [{ text: 'OK', onPress: () => handleEndGame() }]);
  };
  return (
  <View style={styles.container} testID="gameView">
    <View style={styles.buttonView}>
      <ButtonStart titleButton="End Game" onPress={handleEndGame} testID='endButton'/>
    </View>
    <View style={styles.centeredContent}>
      <View style={styles.gameBoard}>
        {Array.from({ length: 9 }).map((_, index) => (
          <GameSquareView
                index={index}
                image={gameState[index] === '1' ? 'ellipse-outline' : 'close-outline'}
                key={index}
                onPress={() => handlePlayerMove(index)}
              /> 
        ))}
         </View>
      </View>
  </View>
  );
};