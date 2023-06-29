import { ButtonProps } from './Button.interface';
import { TouchableOpacity, View , Text} from 'react-native';
import { styles } from './Button.styles';



export const ButtonStart = ({titleButton , onPress, acName}: ButtonProps) => {

  const handlePress= () => {
    console.log('clicked icon');
    onPress(false);
  };

    return (
        <TouchableOpacity onPress={handlePress} accessibilityLabel={acName}>
        <View style={styles.button}>
          <Text style={styles.textButton}>{titleButton}</Text>
        </View>
      </TouchableOpacity>
      );
};