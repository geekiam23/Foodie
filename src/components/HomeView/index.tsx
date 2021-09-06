import React, {FC} from 'react';
import {FlatList, StatusBar, StyleSheet} from 'react-native';
import CircleSnail from 'react-native-progress/CircleSnail';
import VerticalImageIndex from './VerticalImageIndex';
import {Recipe} from 'types/recipe';
import {Colors} from '../../styles';

type Props = {
  recipes: Recipe[];
  loading: boolean;
};

type Item = {
  item: Recipe;
};

const HomeView: FC<Props> = ({recipes, loading}) => {
  if (loading) {
    return (
      <CircleSnail size={30} indeterminate={true} testID="loading-indicator" />
    );
  }
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
