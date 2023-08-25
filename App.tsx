import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { Home } from './src/home/Home';
import { Game } from './src/game/Game';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
       <StatusBar backgroundColor="#6172AE" />
      <Stack.Navigator 
      screenOptions={{
        detachPreviousScreen: false, 
        animationEnabled: false,
      }}
    ><Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      <Stack.Screen 
          name="Game" 
          component={Game}  
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
);
}