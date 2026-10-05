import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import AppColors from '../../theme/colors';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import { useDispatch } from 'react-redux';
import { REGISTER } from '../../redux/action_types';

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [emptyData, setEmptyData] = useState(false);

  const handleRegister = () => {
    if (!email || !password || !name) return setEmptyData(true);

    dispatch({ type: REGISTER, payload: { email, password, name } });
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={100}>
        <Text style={styles.title}>Hadi başlayalım!</Text>
        <View style={styles.email}>
          <Text style={styles.desc}>E-posta adresiniz nedir?</Text>
          <Input
            placeholder={'email'}
            keyboardType={'email-address'}
            inputMode={'email'}
            onChangeText={setEmail}
            value={email}
            emptyData={emptyData}
          />
        </View>

        <View style={styles.password}>
          <Text style={styles.desc}>Şifreniz nedir?</Text>
          <Input
            placeholder={'parola'}
            keyboardType={'default'}
            type={'password'}
            onChangeText={setPassword}
            value={password}
            emptyData={emptyData}
          />
        </View>
        <View style={styles.name}>
          <Text style={styles.desc}>İsminiz nedir?</Text>
          <Input
            placeholder={'isim soyisim'}
            keyboardType={'default'}
            type={'password'}
            onChangeText={setName}
            value={name}
            emptyData={emptyData}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            title={'Kayıt Ol'}
            haveAccount={false}
            onPress={handleRegister}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;

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
