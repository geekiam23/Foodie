import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from 'screens/HomeScreen';

import HeaderIcons from 'components/common/HeaderIcons';

const Stack = createStackNavigator();

const App: FC = () => {
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
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return <Stack.Navigator>{HomeStack()}</Stack.Navigator>;
};

export default App;
