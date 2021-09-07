import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from 'screens/HomeScreen';
import RecipeScreen from 'screens/RecipeScreen';

import HeaderIcons from 'components/common/HeaderIcons';
import LoginScreen from 'screens/LoginScreen';
import {AuthContext} from 'context/auth';

const Stack = createStackNavigator();

const HomeStack = () => (
  <>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        title: 'My Recipes',
        headerStyle: {
          backgroundColor: '#092235',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          paddingBottom: 5,
        },
        headerRight: () => <HeaderIcons />,
      }}
    />
    <Stack.Screen
      name="RecipeScreen"
      component={RecipeScreen}
      options={({route}) => ({title: route?.params?.recipe.title})}
    />
  </>
);

const AuthStack = () => (
  <>
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
  </>
);

const App = () => {
  const {userInfo} = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {userInfo?.id ? HomeStack() : AuthStack()}
    </Stack.Navigator>
  );
};

export default App;
