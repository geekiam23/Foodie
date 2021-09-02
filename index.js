/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {ApolloProvider} from '@apollo/react-hooks';

import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {client} from './src/graphql/Client';

const AppProviders = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => AppProviders);
