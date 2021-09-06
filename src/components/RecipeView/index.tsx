import React, {FC} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Config from 'react-native-config';
import {Colors, Outlines, Sizing, Typography} from '../../styles';

import {Recipe} from 'types/recipe';

interface Tags {
  name: string;
}

type Props = {
  recipe: Recipe;
  tags: Tags[];
};

const RecipeView: FC<Props> = ({recipe, tags}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.recipeImage}
        source={{uri: Config.API_URL + recipe?.imageUrl}}
      />

      <View style={styles.cookingInfoContainer}>
        <View style={styles.tagsContainer}>
          {tags.map((tag, i) => {
            return (
              <Text
                key={i}
                style={styles.tags}
                testID="cooking-info-time-container">
                {tag.name}
              </Text>
            );
          })}
        </View>
        <Text style={styles.subheaderText}>Recipe Info:</Text>
        <Text style={styles.bodyText}>{recipe?.summary}</Text>
        <Text style={styles.subheaderText}>Servings: </Text>
        <Text style={styles.bodyText}>{recipe.servings}</Text>
        <Text style={styles.subheaderText}>Cooking Info:</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tags: {
    paddingHorizontal: Sizing.layout.x10,
    paddingVertical: Sizing.layout.x10,
    backgroundColor: Colors.secondary.s200,
    marginRight: Sizing.layout.x10,
    borderRadius: Outlines.borderRadius.base,
    overflow: 'hidden',
    borderWidth: Outlines.borderWidth.thin,
  },
  tagsContainer: {
    paddingVertical: Sizing.layout.x20,
    flexDirection: 'row',
  },
  subheaderText: {
    ...Typography.subheader.x30,
  },
  bodyText: {
    ...Typography.body.x20,
    color: Colors.primary.brand,
    marginBottom: Sizing.x20,
  },
  recipeImage: {
    width: '95%',
    alignItems: 'center',
    height: Sizing.images.base,
    borderRadius: Outlines.borderRadius.small,
  },
  container: {
    alignItems: 'center',
    backgroundColor: Colors.primary.s200,
    paddingBottom: Sizing.layout.x30,
    paddingTop: Sizing.layout.x10,
    flex: 1,
  },
  cookingInfoContainer: {
    justifyContent: 'flex-start',
    width: '90%',
  },
  cookingInfoTextContainer: {
    flexDirection: 'row',
    paddingTop: Sizing.layout.x10,
  },
  cookingIngedStepsContainer: {
    width: '90%',
    justifyContent: 'flex-start',
    paddingTop: Sizing.layout.x10,
  },
  border: {
    borderColor: Colors.neutral.black,
    borderTopWidth: Outlines.borderWidth.thick,
  },
});

export default RecipeView;
