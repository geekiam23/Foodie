import React from 'react';
import {Text, StatusBar} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {FETCH_COIN_LIST} from '../graphql/Queries';
const HomeScreen = () => {
  const {loading, data} = useQuery(FETCH_COIN_LIST, {
    context: {
      clientName: 'crypto',
    },
  });

  console.log(loading, data);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Text>Hey</Text>
    </>
  );
};

export default HomeScreen;
