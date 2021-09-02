import React, {FC} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Config from 'react-native-config';

import {Recipe} from 'types/recipe';

type Props = {
  recipe: Recipe;
};

const RecipeView: FC<Props> = ({recipe}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.recipeImage}
        source={{uri: Config.API_URL + recipe?.imageUrl}}
      />

      <View style={styles.cookingInfoContainer}>
        <Text>Cooking Info</Text>
        <View
          style={styles.cookingInfoTextContainer}
          testID="cooking-info-time-container"
        />
        <View
          style={styles.cookingInfoTextContainer}
          testID="cooking-info-servings-container">
          <Text>Servings: </Text>
          <Text>{recipe.servings}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  recipeImage: {
    width: '95%',
    alignItems: 'center',
    height: 196,
    borderRadius: 4,
  },
  container: {
    alignItems: 'center',
    paddingBottom: 25,
    paddingTop: 10,
  },
  cookingInfoContainer: {
    justifyContent: 'flex-start',
    width: '90%',
  },
  cookingInfoTextContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  cookingIngedStepsContainer: {
    width: '90%',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  border: {
    borderColor: 'black',
    borderTopWidth: 4,
  },
});

export default RecipeView;
