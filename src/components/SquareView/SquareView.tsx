import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
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
    >
      {clicked && <PlayerIndicator systemImageName={image} />}
    </TouchableOpacity>
  );
};
