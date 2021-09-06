import React, {FC} from 'react';
import {FlatList, StatusBar, StyleSheet} from 'react-native';

import VerticalImageIndex from './VerticalImageIndex';
import {Recipe} from 'types/recipe';
import {Colors} from '../../styles';

type Props = {
  recipes: Recipe[];
};

type Item = {
  item: Recipe;
};

const HomeView: FC<Props> = ({recipes}) => {
  const renderRecipes: FC<Item> = ({item}) => {
    return <VerticalImageIndex recipe={item} />;
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <FlatList
        style={styles.flatlist}
        data={recipes}
        renderItem={renderRecipes}
      />
    </>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    backgroundColor: Colors.primary.brand,
  },
});

export default HomeView;
