import 'react-native';
import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';

import HomeScreen from 'screens/HomeScreen';
import recipeFactory from '../src/lib/testing/factories/recipe';
import {GET_ALL_RECIPES} from 'graphql/Queries';

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({navigate: mockedNavigate}),
}));

const recipeData = recipeFactory.buildList(3);

const mocks = [
  {
    request: {
      query: GET_ALL_RECIPES,
    },
    result: {
      data: {
        recipes: recipeData,
      },
    },
  },
];

describe('Home', () => {
  it('renders all recipes', async () => {
    const {getByTestId, queryByTestId, getByText} = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomeScreen />
      </MockedProvider>,
    );

    expect(getByTestId('loading-indicator')).toBeTruthy();

    await waitFor(() => {
      expect(queryByTestId('loading-indicator')).toBeFalsy();
      expect(getByText(recipeData[0].title)).toBeTruthy();
      expect(getByText(recipeData[1].title)).toBeTruthy();
      expect(getByText(recipeData[2].title)).toBeTruthy();
    });
  });

  it('navigates to recipe screen', async () => {
    const {getByTestId} = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomeScreen />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(getByTestId(`${recipeData[1].title}-btn`)).toBeTruthy();
    });
    fireEvent.press(getByTestId(`${recipeData[1].title}-btn`));

    expect(mockedNavigate).toBeCalledWith('RecipeScreen', {
      recipe: recipeData[1],
    });
  });
});
