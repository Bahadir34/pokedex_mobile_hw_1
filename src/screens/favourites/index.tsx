import { View, Text, StyleSheet, Image } from 'react-native';
import React, { FC } from 'react';
import Button from '../../components/ui/button';
import AppColors from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import AppRoutes from '../../utils/routes';

const FavouritesScreen: FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../../assets/images/avatar.png')}
          style={styles.image}
        />
        <Text style={styles.title}>
          Bunu yapmak için giriş yapmış olmanız gerekiyor!
        </Text>
        <Text style={styles.desc}>
          Bu işlevselliğe erişmek için oturum açmanız veya bir hesap
          oluşturmanız gerekir. Şimdi yap!
        </Text>
      </View>
      <View style={{ flex: 1, padding: 10, gap: 10 }}>
        <Button
          title={'Giriş Yap'}
          haveAccount={false}
          onPress={() => navigation.navigate(AppRoutes.LOGIN)}
        />
        <Button
          title={'Kayıt Ol'}
          haveAccount={true}
          onPress={() => navigation.navigate(AppRoutes.REGISTER)}
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
  },
});

export default FavouritesScreen;
