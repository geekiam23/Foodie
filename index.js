/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {NavigationContainer} from '@react-navigation/native';
import {AppRegistry} from 'react-native';

import {client} from './src/graphql/Client';
import App from './App';
import {name as appName} from './app.json';
import {AuthProvider} from 'context/auth';

const AppProviders = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </AuthProvider>
    </ApolloProvider>
  );
};

AppRegistry.registerComponent(appName, () => AppProviders);
