import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';

import HeaderIcons from './src/components/HeaderIcons';

const Stack = createStackNavigator();

const App: FC = () => {
  const HomeStack = () => (
    <>
      <Stack.Screen
        name="Home"
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
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return <Stack.Navigator>{HomeStack()}</Stack.Navigator>;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
