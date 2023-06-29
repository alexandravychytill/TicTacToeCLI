import React, { useState } from 'react';
import { HomeProps } from './Home.interface';
import { View } from 'react-native';
import { styles } from './Home.styles';
import { ButtonStart } from '../components/Button/Button';

export const Home = ({navigation}: HomeProps) => {

    const handleButtonPress = () => {
      navigation.navigate('Game');
    };

    return (
       <View style={styles.container}>
            <ButtonStart titleButton='Start' onPress={handleButtonPress} acName='startButton'/>
       </View>
    )
}