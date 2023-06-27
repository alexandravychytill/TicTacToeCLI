import React , {useState} from 'react';
import { View, Alert } from 'react-native';
import { GameProps } from './Game.interface';
import { ButtonStart } from '../components/Button';
import { GameSquareView } from '../components/SquareView';
import { styles } from './Game.styles';

export const Game = ({navigation}: GameProps) => {
  const [systemImageName, setSystemImageName] = useState('');
  const [isPlayer1, setIsPlayer1] = useState(true)
  const [gameState, setGameState] = useState(Array(9).fill(''));

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
      setSystemImageName("ellipse-outline");
      setIsPlayer1(false);
    } else {
      setSystemImageName("close-outline");
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
        break;
      }
    }

    if (!currentGameState.includes('')) {
      // Game is a draw
      showDrawAlert();
    }
  };

  const showWinAlert = () => {
    Alert.alert('Congratulations!', 'Player won!', [{ text: 'OK', onPress: () => handleEndGame() }]);
  };

  const showDrawAlert = () => {
    Alert.alert('Draw!', 'The game is a draw.', [{ text: 'OK', onPress: () => handleEndGame() }]);
  };

  return (
  <View style={{ flex: 1, backgroundColor: '#6172AE', paddingTop: 20, alignItems: 'center' }}>
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <ButtonStart titleButton="End Game" onPress={handleEndGame} />
    </View>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 80, marginLeft:15 }}>
      {Array.from({ length: 9 }).map((_, index) => (
        <GameSquareView
              index={index}
              image={gameState[index]}
              key={index}
              onPress={() => handlePlayerMove(index)}
            /> 
      ))}
    </View>
  </View>
  );
};