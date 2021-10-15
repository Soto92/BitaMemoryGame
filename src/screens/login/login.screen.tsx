import React, {useContext} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import GameContext from '../../context/context';

import {Styles} from './login.style';

export const Login = ({navigation}) => {
  const gameContext = useContext(GameContext);

  const submitToGame = () => {
    if (gameContext.userName === undefined) {
      gameContext.setUserName('Jogador');
    }
    navigation.navigate('Game');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={Styles.keyboarView}>
      <View style={Styles.loginCard}>
        <TextInput
          onChangeText={text => gameContext.setUserName(text)}
          value={gameContext.userName}
          placeholder="Nome"
          placeholderTextColor="grey"
          style={Styles.input}
          returnKeyType="done"
          returnKeyLabel="Jogar"
          autoCorrect={false}
          onSubmitEditing={submitToGame}
        />
        <TouchableOpacity onPress={submitToGame} style={Styles.button}>
          <Text style={{color: 'black'}}>Jogar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
