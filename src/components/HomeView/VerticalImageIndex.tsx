import React, {FC} from 'react';
import {
  View,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Config from 'react-native-config';

import ImageToolbar from './ImageToolbar';
import {Recipe} from 'types/recipe';
import {Outlines, Sizing} from '../../styles';

type Props = {
  recipe: Recipe;
};

const VerticalImageIndex: FC<Props> = ({recipe}) => {
  const navigation = useNavigation();

  const onImagePress = () => {
    navigation.navigate('RecipeScreen', {recipe});
  };

  return (
    <View style={styles.container} key={recipe?.id} testID="recipes">
      <StatusBar barStyle="light-content" />
      <TouchableOpacity
        testID={`${recipe.title}-btn`}
        style={styles.recipeContainer}
        onPress={onImagePress}>
        <Image
          style={styles.image}
          source={{uri: Config.API_URL + recipe?.imageUrl}}
        />

        <ImageToolbar recipe={recipe} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    marginBottom: Sizing.layout.x15,
    paddingTop: Sizing.layout.x10,
  },
  recipeContainer: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: Sizing.images.base,
    borderRadius: Outlines.borderRadius.small,
  },
});

export default VerticalImageIndex;
