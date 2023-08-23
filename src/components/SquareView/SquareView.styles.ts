import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    square: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 10,
        width:  Dimensions.get('window').width / 3 - 15,
        height: Dimensions.get('window').width / 3 - 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin:2
      },
})
