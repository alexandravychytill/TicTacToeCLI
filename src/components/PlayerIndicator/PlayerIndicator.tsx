import React from 'react';
import { View , Text, Image} from 'react-native';
import { styles } from './PlayerIndicator.styles';
import { PlayerIndicatorProps } from './PlayerIndicator.interface';
import Icons from 'react-native-vector-icons/Ionicons';
//import CrossIcon from '../../assets/xmarc.svg';



export const PlayerIndicator = ({systemImageName}: PlayerIndicatorProps ) => {
    return (
        <View style={styles.container}>
         <Text>{systemImageName}</Text>
          <Image
          source={require('../../assets/xmarc.svg')}
          style={{ width: 200, height: 200 }}
        />
        </View>
      );
}

// circle = ellipse-outline
// xmark = close-outline
// <Icons name={systemImageName} size={60} color="white" /> 