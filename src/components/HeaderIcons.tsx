import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import Star from 'assets/Star';
import Profile from 'assets/Profile';
import Dice from 'assets/Dice';

const HeaderIcons = () => {
  const route = useRoute();
  const isHome = route.name === 'Home';

  return (
    <View style={styles.container}>
      {isHome ? <Dice /> : <Star />}
      <Profile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 25,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default HeaderIcons;
