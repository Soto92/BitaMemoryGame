/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Modal} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Grid} from '../../components/grid/grid.component';
import {dataCards} from './data';
import GameContext from '../../context/context';

import {Styles} from './game.style';
import {useFocusEffect} from '@react-navigation/native';

export const Game = ({navigation}) => {
  const [data, setData] = useState([{}]);
  const [count, setCount] = useState(0);
  const [attemps, setAttemps] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const gameContext = useContext(GameContext);

  useFocusEffect(
    useCallback(() => {
      initGame();
    }, []),
  );

  useEffect(() => {
    let counterMatchs = data.filter(card => card.match);
    if (counterMatchs.length === 20) {
      setModalVisible(true);
      saveGamer();
    }
  }, [data]);

  const saveGamer = async () => {
    const newGamer = {
      name: gameContext.userName,
      attemps: attemps,
    };
    const gamers = await AsyncStorage.getItem('@gamers');
    let arrayGamers = gamers != null ? JSON.parse(gamers) : null;

    if (arrayGamers) {
      arrayGamers.push(newGamer);
    } else {
      arrayGamers = [newGamer];
    }

    const jsonArrayGamers = JSON.stringify(arrayGamers);
    await AsyncStorage.setItem('@gamers', jsonArrayGamers);
  };

  const initGame = () => {
    let arraySort = dataCards.sort(() => Math.random() - 0.5);
    setData(arraySort);
    setCount(0);
    setAttemps(0);
  };

  const faceUp = card => {
    let refreshCards = data.map(item => {
      if (item.id === card.id) {
        setCount(prev => prev + 1);
        return {
          ...item,
          isFaceUp: true,
        };
      } else {
        return item;
      }
    });
    if (count > 0) {
      setAttemps(prev => prev + 1);
      const matchs = refreshCards.filter(item => {
        if (item.isFaceUp && card.name === item.name) {
          return item;
        }
      });
      if (matchs.length > 1) {
        refreshCards = refreshCards.map(item => {
          if (item.isFaceUp && card.name === item.name) {
            return {
              ...item,
              match: true,
            };
          } else {
            return item;
          }
        });
      }
    }
    setData(refreshCards);
  };

  const faceDown = card => {
    let refreshCards = data.map(item => {
      if (item.id === card.id) {
        setCount(prev => prev + 1);
        return {
          ...item,
          isFaceUp: true,
        };
      }
      if (!item.match) {
        return {
          ...item,
          isFaceUp: false,
        };
      } else {
        return item;
      }
    });
    setData(refreshCards);
  };

  const touchCard = card => {
    if (count >= 2) {
      setCount(0);
    }
    if (count < 2) {
      faceUp(card);
    } else {
      faceDown(card);
    }
  };

  const goToRanking = () => {
    setModalVisible(false);
    navigation.navigate('Ranking');
  };

  const goToNewGame = () => {
    setModalVisible(false);
    gameContext.setUserName(undefined);
    navigation.navigate('Login');
  };

  return (
    <View style={Styles.container}>
      <Modal transparent={true} visible={modalVisible}>
        <View style={Styles.modalOverlay} />
        <View style={Styles.modalContainer}>
          <View style={Styles.modalCard}>
            <Text style={{color: 'black'}}>
              Parabéns {gameContext.userName}! Finalizou com {attemps}{' '}
              tentativas!
            </Text>
            <TouchableOpacity onPress={goToRanking} style={Styles.button}>
              <Text style={{color: 'black'}}>Ranking</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToNewGame} style={Styles.button}>
              <Text style={{color: 'black'}}>Novo jogo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={{marginVertical: 48, color: 'black'}}>
        {attemps} tentativas
      </Text>
      <Grid touchCard={card => touchCard(card)} items={data} />
    </View>
  );
};
