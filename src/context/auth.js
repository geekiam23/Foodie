import React, {useState, useEffect, useContext, createContext} from 'react';
import {useLazyQuery} from '@apollo/client';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Config from 'react-native-config';

import {GET_USER_QUERY} from '../graphql/Queries';
import {getData, removeValue, storeData} from '../lib/utils/storage';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
  const [authErrors, setAuthErrors] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [userToken, setUserToken] = useState(null);

  const [queryCurrentUser] = useLazyQuery(GET_USER_QUERY, {
    context: {
      headers: {
        Authorization: userToken,
      },
    },
    onCompleted: data => {
      setUserInfo(data.getUser);
    },
    onError: err => {
      console.log(err);
    },
  });

  const getUserData = authToken => {
    const token = jwtDecode(authToken?.substring(7));
    queryCurrentUser({variables: {id: token.sub}});
  };

  useEffect(() => {
    async function fetchData() {
      const authToken = await getData('@authToken');
      if (authToken !== null) {
        setUserToken(authToken);
        getUserData(authToken);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (userToken) {
      getUserData(userToken);
    }
  }, [userToken]);

  const signOut = async () => {
    if (!userToken) {
      return;
    }

    try {
      await axios.delete(Config.API_URL + '/users/sign_out', {
        headers: {
          authorization: userToken,
        },
      });
      await removeValue('@authToken');

      setUserInfo(null);
    } catch {
      e => setAuthErrors(e);
    }
  };

  const signIn = ({email, password}) => {
    axios
      .post(Config.API_URL + '/users/sign_in', {
        user: {
          email: email,
          password: password,
        },
      })
      .then(response => {
        const token = response?.headers?.authorization;

        storeData('@authToken', token);
        setUserToken(response?.headers?.authorization);
      })
      .catch(e => setAuthErrors(e));
  };

  return (
    <AuthContext.Provider
      value={{
        authErrors,
        signIn,
        signOut,
        userInfo,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
