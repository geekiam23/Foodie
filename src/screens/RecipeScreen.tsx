import React from 'react';

import RecipeView from 'components/RecipeView';

const RecipeScreen = ({route}) => {
  const {recipe} = route.params;

  return <RecipeView recipe={recipe} />;
};

export default RecipeScreen;
