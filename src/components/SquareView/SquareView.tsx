import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './SquareView.styles';
import { GameSquareProps } from './SquareView.interface';
import { PlayerIndicator } from '../PlayerIndicator';

export const GameSquareView = ({ index , image, onPress}: GameSquareProps) => {
  const [clicked, setClicked] = useState(false);

  const handlePlayerMove = () => {
    setClicked(true);
    onPress()
  };

  return (
    <TouchableOpacity
      key={index}
      onPress={handlePlayerMove}
      style={styles.square}
      disabled={clicked}
      testID={`Square${index}`}
      accessibilityLabel={`${image}_${index}`}
    >
      {clicked && <PlayerIndicator systemImageName={image} index={index}/>}
    </TouchableOpacity >
  );
};
