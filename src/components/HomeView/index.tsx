import React, {FC} from 'react';
import {FlatList, StatusBar, StyleSheet} from 'react-native';

import VerticalImageIndex from './VerticalImageIndex';
import {Recipe} from 'types/recipe';

type Props = {
  recipes: Recipe[];
};

const HomeView: FC<Props> = ({recipes}) => {
  const renderRecipes = ({item}) => {
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
    backgroundColor: '#093150',
  },
});

export default HomeView;
