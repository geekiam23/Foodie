import React, {FC} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Heart from 'assets/Heart';
import {Recipe} from 'types/recipe';
import {Colors, Sizing, Typography} from '../../styles';

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
    backgroundColor: Colors.transparent.darkGray,
  },
  bottomToolbarFullSize: {
    width: '100%',
    height: '10%',
    paddingBottom: Sizing.layout.x5,
  },
  recipeTitleContainer: {
    ...Typography.fontSize.x10,
    ...Typography.fontWeight.bold,
    color: Colors.neutral.white,
    paddingLeft: Sizing.layout.x5,
    flex: 1,
  },
  recipeTitle: {
    color: Colors.neutral.white,
  },
  heartIcon: {
    marginRight: Sizing.layout.x15,
  },
});

export default ImageToolbar;
