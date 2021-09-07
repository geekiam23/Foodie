import React, {FC, useContext, useState} from 'react';
import {
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {AuthContext} from '../context/auth';
import {RootStackParamList} from 'types';
import image from '../assets/login_bg.jpg';
import {Colors, Outlines, Sizing, Typography} from '../styles';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const Login: FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useContext(AuthContext);

  const onLoginPress = () => {
    signIn({email, password});
  };

  const onFooterLinkPress = () => {
    navigation.navigate('Registration');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground style={styles.backgroundImage} source={image} />
      <View style={styles.bodyContainer}>
        <Text style={styles.header}>Welcome back</Text>
        <View style={styles.inputSection}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              testID="login-email-input"
              placeholder="Email"
              placeholderTextColor="#000"
              onChangeText={text => setEmail(text)}
              value={email}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              testID="login-password-input"
              placeholder="Password"
              placeholderTextColor="#000"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              value={password}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={onLoginPress}>
          <Text style={styles.loginBtnText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <Text style={styles.footerLink} onPress={onFooterLinkPress}>
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    opacity: 0.3,
    flex: 1,
    width: '100%',
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
  },
  footerContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  footerLink: {
    ...Typography.fontWeight.bold,
    color: Colors.neutral.black,
    marginLeft: Sizing.layout.x5,
    textDecorationLine: 'underline',
  },
  footerText: {
    color: Colors.neutral.black,
  },
  header: {
    ...Typography.fontWeight.bold,
    ...Typography.monospace.base,
    ...Typography.fontSize.x60,
    color: Colors.neutral.black,
  },
  inputSection: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexBasis: '20%',
  },
  inputContainer: {
    color: Colors.neutral.black,
    borderBottomColor: Colors.neutral.black,
    borderBottomWidth: Outlines.borderWidth.thick,
    width: '80%',
    flex: 1,
  },
  input: {
    ...Typography.fontSize.x50,
    ...Typography.fontWeight.bold,
    flex: 1,
    color: Colors.neutral.black,
  },
  loginBtnText: {
    ...Typography.fontSize.x50,
    ...Typography.fontWeight.bold,
    color: Colors.neutral.white,
    textAlign: 'center',
  },
  loginBtn: {
    width: '60%',
    borderRadius: Outlines.borderRadius.base,
    padding: Sizing.layout.x15,
    justifyContent: 'center',
    backgroundColor: Colors.neutral.black,
  },
});
export default Login;
