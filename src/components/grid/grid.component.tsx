import React, {ReactNode} from 'react';
import {View} from 'react-native';

import {Card} from '../card/card.component';

import {Styles} from './grid.style';

export const Grid = props => {
  const {items, touchCard} = props;

  const renderItem = (): ReactNode => {
    return items.map(item => {
      return (
        <Card
          key={item.id}
          id={item.id}
          item={item}
          touchCard={e => touchCard(e)}
        />
      );
    });
  };

  return <View style={Styles.grid}>{renderItem()}</View>;
};
