import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import {Styles} from './card.style';

export const Card = props => {
  const {item, touchCard, id} = props;

  return (
    <View key={id}>
      <TouchableOpacity disabled={item.match} onPress={() => touchCard(item)}>
        <View style={Styles.card}>
          {item.isFaceUp ? (
            <Image
              style={Styles.image}
              source={item.backgroundImg}
              resizeMode="cover"
            />
          ) : null}
        </View>
      </TouchableOpacity>
    </View>
  );
};
