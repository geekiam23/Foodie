import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import Star from 'assets/Star';
import Profile from 'assets/Profile';
import Dice from 'assets/Dice';
import {AuthContext} from '../../context/auth';

const HeaderIcons = () => {
  const {signOut} = useContext(AuthContext);
  const route = useRoute();
  const isHome = route.name === 'Home';

  // const onHeartPress = () => {
  //   const routeName = isHome ? 'RandomRecipes' : 'Home';
  //   navigation.navigate(routeName);
  // };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.heartContainer} onPress={onHeartPress}> */}
      {isHome ? <Dice /> : <Star />}
      {/* </TouchableOpacity> */}
      <TouchableOpacity onPress={signOut}>
        <Profile />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 25,
    display: 'flex',
    flexDirection: 'row',
  },
  heartContainer: {
    paddingRight: 20,
  },
});

export default HeaderIcons;
