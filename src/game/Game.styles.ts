import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#6172AE', 
        alignItems: 'center' ,
      }, 
      buttonView: {
        marginTop: 40 
      },
      centeredContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      gameBoard: {
       flexDirection: 'row', 
       flexWrap: 'wrap',       
       marginLeft: 15,
       paddingBottom: 60,
      }
});
