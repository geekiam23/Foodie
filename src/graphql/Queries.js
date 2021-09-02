import gql from 'graphql-tag';

export const FETCH_COIN_LIST = gql`
  query FetchCoinsList {
    coinsList
      @rest(type: "ListPayload", path: "/data/top/totalvolfull?tsym=USD") {
      Data @type(name: "DataPayload") {
        CoinInfo @type(name: "CoinInfoPayload") {
          Id
          Name
          FullName
        }
        DISPLAY @type(name: "DisplayPayload") {
          USD @type(name: "USDPayLoad") {
            PRICE
            OPENDAY
            HIGHDAY
            LOWDAY
            OPEN24HOUR
          }
        }
      }
    }
  }
`;

export const GET_ALL_RECIPES = gql`
  query recipes {
    recipes {
      id
      title
      summary
      servings
      imageUrl
      cuisines {
        name
      }
      occasions {
        name
      }
      diets {
        name
      }
      dishTypes {
        name
      }
    }
  }
`;

export const GET_RECIPE = gql`
  query getRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      title
      summary
      imageUrl
      cuisines {
        name
      }
      occasions {
        name
      }
      diets {
        name
      }
      dishTypes {
        name
      }
    }
  }
`;

export const GET_RANDOM_RECIPES = gql`
  query randomRecipes($number: String, $tags: [String!]) {
    randomRecipes(number: $number, tags: $tags) {
      id
      title
      summary
      cuisines
      occasions
      diets
      dishTypes
      image
      servings
      readyInMinutes
      aggregateLikes
    }
  }
`;

export const GET_RANDOM_RECIPE = gql`
  query getSpoonacularRecipe($spoonacularId: ID!) {
    getSpoonacularRecipe(spoonacularId: $spoonacularId) {
      id
      title
      summary
      cuisines
      occasions
      diets
      dishTypes
      image
      servings
      readyInMinutes
      aggregateLikes
    }
  }
`;

export const GET_USER_QUERY = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      recipes {
        id
        title
        summary
        imageUrl
      }
    }
  }
`;
