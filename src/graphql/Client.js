import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {createHttpLink} from 'apollo-link-http';
import Config from 'react-native-config';
import fetch from 'unfetch';

const recipeLink = new createHttpLink({
  uri: Config.GRAPHQL_API_URL,
  fetch: fetch,
});

export const client = new ApolloClient({
  link: ApolloLink.split(
    operation => operation.getContext().clientName === 'crypto',
    operation =>
      operation.setContext((_, {headers}) => {
        return {
          headers: {
            ...headers,
            // Authorization: userToken ? userToken : headers.Authorization,
          },
        };
      }),
    recipeLink,
  ),
  cache: new InMemoryCache(),
});
