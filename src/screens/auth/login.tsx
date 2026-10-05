import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import AppColors from '../../theme/colors';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../redux/action_types';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emptyData, setEmptyData] = useState(false);

  const handleLogin = () => {
    if (!email || !password) return setEmptyData(true);

    dispatch({ type: LOGIN, payload: { email, password } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hadi başlayalım!</Text>
      <KeyboardAvoidingView
        style={{ flex: 1, paddingBottom: 50 }}
        behavior="padding"
        enabled
        keyboardVerticalOffset={80}
      >
        <View style={styles.email}>
          <Text style={styles.desc}>E-posta adresiniz nedir?</Text>
          <Input
            placeholder={'email'}
            keyboardType={'email-address'}
            inputMode={'email'}
            emptyData={emptyData}
            onChangeText={setEmail}
            value={email}
          />
        </View>

        <View style={styles.password}>
          <Text style={styles.desc}>Şifreniz nedir?</Text>
          <Input
            placeholder={'parola'}
            keyboardType={'default'}
            type={'password'}
            emptyData={emptyData}
            onChangeText={setPassword}
            value={password}
          />
        </View>

        <View style={styles.btnContainer}>
          <Button
            title={'Giriş Yap'}
            haveAccount={false}
            onPress={handleLogin}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: AppColors.White,
  },

  email: { marginBottom: 15 },

  password: { marginBottom: 15 },

  title: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 400,
    color: '#4d4d4d',
  },
  desc: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 600,
    color: AppColors.Black,
  },

  btnContainer: {
    marginBlock: 15,
    marginInline: 10,
    marginTop: 'auto',
    marginBottom: 30,
  },
});
