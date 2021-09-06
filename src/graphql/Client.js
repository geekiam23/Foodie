import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {createHttpLink} from 'apollo-link-http';
import {RestLink} from 'apollo-link-rest';
import Config from 'react-native-config';
import fetch from 'unfetch';

const restLink = new RestLink({
  uri: 'https://min-api.cryptocompare.com',
  headers: {
    Authorization:
      'd251970548f7321b548d3fb61d58c1a456974ea02ba41437fc9bf711f4e89782',
  },
});

const recipeLink = new createHttpLink({
  uri: Config.GRAPHQL_API_URL,
  fetch: fetch,
});

export const client = new ApolloClient({
  link: ApolloLink.split(
    operation => operation.getContext().clientName === 'crypto',
    restLink,
    recipeLink,
  ),
  cache: new InMemoryCache(),
});
