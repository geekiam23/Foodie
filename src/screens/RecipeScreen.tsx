import React from 'react';

import RecipeView from 'components/RecipeView';

const RecipeScreen = ({route}) => {
  const {recipe} = route.params;

  const tags = [
    ...recipe?.cuisines,
    ...recipe?.occasions,
    ...recipe?.diets,
    ...recipe?.dishTypes,
  ];

  return <RecipeView recipe={recipe} tags={tags} />;
};

export default RecipeScreen;
