/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * created by Mauricio Soto - Front-end software engineer
 */

import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GameContext from './context/context';

import {Login, Game, Ranking} from './screens';

const Stack = createNativeStackNavigator();

function App() {
  const [userName, setUserName] = useState(undefined);
  return (
    <GameContext.Provider
      value={{
        userName,
        setUserName,
      }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="Game"
            component={Game}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Ranking"
            component={Ranking}
            options={{
              headerBackVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GameContext.Provider>
  );
}

export default App;
