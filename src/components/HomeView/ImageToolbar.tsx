import React, {FC} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Heart from 'assets/Heart';
import {Recipe} from 'types/recipe';

type Props = {
  recipe: Recipe;
  fullScreen?: boolean;
};

const ImageToolbar: FC<Props> = ({recipe, fullScreen}) => {

  return (
    <View
      style={
        fullScreen
          ? {
              ...styles.bottomToolbar,
              ...styles.bottomToolbarFullSize,
            }
          : styles.bottomToolbar
      }>
      <View style={styles.recipeTitleContainer}>
        <Text style={styles.recipeTitle}>{recipe?.title}</Text>
      </View>
      <TouchableOpacity style={styles.heartIcon}>
        <Heart color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomToolbar: {
    position: 'absolute',
    bottom: 0,
    height: '15%',
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  bottomToolbarFullSize: {
    width: '100%',
    height: '10%',
    paddingBottom: 5,
  },
  recipeTitleContainer: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    fontSize: 13,
    color: '#FFF',
    paddingLeft: 6,
    flex: 1,
  },
  recipeTitle: {
    color: '#FFF',
  },
  heartIcon: {
    marginRight: 12,
  },
});

export default ImageToolbar;
