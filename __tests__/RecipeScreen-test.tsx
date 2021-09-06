import 'react-native';
import React from 'react';

import RecipeScreen from 'screens/RecipeScreen';
import recipeFactory from './utils/factories/recipe';
import {renderWithWrapper} from './utils/renderHelper';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Recipe Screen', () => {
  const recipeData = recipeFactory.build();

  it('displays the correct recipe info', async () => {
    const route = {
      params: {
        recipe: recipeData,
      },
    };
    const {getAllByTestId} = renderWithWrapper(<RecipeScreen route={route} />);

    const tags = [
      ...recipeData?.cuisines,
      ...recipeData?.occasions,
      ...recipeData?.diets,
      ...recipeData?.dishTypes,
    ].map(value => value.name);

    expect(getAllByTestId('cooking-info-time-container')).toHaveLength(8);
    expect(getAllByTestId('cooking-info-time-container')[0]).toHaveTextContent(
      tags[0],
    );
    expect(getAllByTestId('cooking-info-time-container')[1]).toHaveTextContent(
      tags[1],
    );
    expect(getAllByTestId('cooking-info-time-container')[2]).toHaveTextContent(
      tags[2],
    );
    expect(getAllByTestId('cooking-info-time-container')[3]).toHaveTextContent(
      tags[3],
    );
    expect(getAllByTestId('cooking-info-time-container')[4]).toHaveTextContent(
      tags[4],
    );
    expect(getAllByTestId('cooking-info-time-container')[5]).toHaveTextContent(
      tags[5],
    );
    expect(getAllByTestId('cooking-info-time-container')[6]).toHaveTextContent(
      tags[6],
    );
    expect(getAllByTestId('cooking-info-time-container')[7]).toHaveTextContent(
      tags[7],
    );
  });
});
