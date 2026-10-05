import { View, Text, StyleSheet, Image } from 'react-native';
import React, { FC } from 'react';
import Button from '../../components/ui/button';
import AppColors from '../../theme/colors';
import AppRoutes from '../../utils/routes';

const ProfileScreen: FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/onb3.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Profil bilgisini görmek iin giriş yap!</Text>
        <Text style={styles.desc}>
          Bu işlevselliğe erişmek için oturum açmanız veya bir hesap
          oluşturmanız gerekir. Şimdi yap!
        </Text>
      </View>
      <View style={{ flex: 1, padding: 10 }}>
        <Button
          title={'Giriş Yap'}
          haveAccount={false}
          onPress={() => navigation.navigate(AppRoutes.LOGIN)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  desc: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  image: {
    width: '60%',
    height: 300,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

export default ProfileScreen;
