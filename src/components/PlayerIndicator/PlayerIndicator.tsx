import React from 'react';
import { View } from 'react-native';
import { styles } from './PlayerIndicator.styles';
import { PlayerIndicatorProps } from './PlayerIndicator.interface';
import Icons from 'react-native-vector-icons/Ionicons';

export const PlayerIndicator = ({systemImageName}: PlayerIndicatorProps ) => {
    return (
        <View style={styles.container}>
         <Icons name={systemImageName} size={65} color="white" accessibilityLabel={systemImageName}/>
        </View>
      );
}