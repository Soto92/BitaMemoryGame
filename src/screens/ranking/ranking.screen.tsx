import React, {useCallback, useContext, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Styles} from './ranking.style';
import {useFocusEffect} from '@react-navigation/core';
import GameContext from '../../context/context';

export const Ranking = ({navigation}) => {
  const [listGamers, setListGamers] = useState([{}]);
  const gameContext = useContext(GameContext);

  useFocusEffect(
    useCallback(() => {
      openGamers();
    }, []),
  );

  const openGamers = async () => {
    const gamers = await AsyncStorage.getItem('@gamers');
    const arrayGamers = gamers != null ? JSON.parse(gamers) : null;

    if (arrayGamers) {
      let arraySort = arrayGamers.sort((a, b) => {
        return a.attemps - b.attemps;
      });
      setListGamers(arraySort);
    }
  };

  const goToNewGame = () => {
    gameContext.setUserName(undefined);
    navigation.navigate('Login');
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        {index === 0 ? (
          <View style={Styles.item}>
            <Text style={Styles.text}>Nome</Text>
            <Text style={Styles.text}>Tentativas</Text>
          </View>
        ) : null}
        <View style={Styles.item}>
          <Text style={Styles.text}>{item.name}</Text>
          <Text style={Styles.text}>{item.attemps}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.body}>
        <FlatList
          data={listGamers}
          renderItem={item => renderItem(item)}
          keyExtractor={item => `${item.name}${item.attemps}`}
        />
      </View>

      <View>
        <TouchableOpacity onPress={goToNewGame} style={Styles.button}>
          <Text style={{color: 'black'}}>Novo Jogo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
