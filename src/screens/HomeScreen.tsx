import React from 'react';
import {Text, StatusBar} from 'react-native';
import {useQuery} from '@apollo/react-hooks';

import HomeView from 'components/HomeView';
import {GET_ALL_RECIPES} from 'graphql/Queries';

const HomeScreen = () => {
  const {loading: recipesLoading, data: recipesData} =
    useQuery(GET_ALL_RECIPES);

  return <HomeView recipes={recipesData?.recipes} />;
};

export default HomeScreen;
