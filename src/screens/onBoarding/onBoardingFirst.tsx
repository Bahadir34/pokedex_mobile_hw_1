import { SafeAreaView, StyleSheet, View, Image, Text } from 'react-native';
import React from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import { onBoardingStyle } from '../../styles/onBoardingStyle';
import Button from '../../components/ui/button';
import Swipe from '../../components/ui/swipe';
import { useNavigation } from '@react-navigation/native';
import AppRoutes from '../../utils/routes';

const OnBoardingFirst = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaView}>
      <View style={defaultScreenStyle.container}>
        <View style={{ flex: 1 }}></View>
        <View
          style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
        >
          <Image
            source={require('../../assets/images/onb1.png')}
            style={{ width: 350, height: 350, resizeMode: 'contain' }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View>
            <Text style={onBoardingStyle.title}>
              Tüm Pokemonlar Tek Bir Yerde
            </Text>
          </View>
          <View>
            <Text style={onBoardingStyle.desc}>
              Nintendo tarafından bugüne kadar üretilmiş tüm nesillerden çok
              sayıda Pokémon'a erişin.
            </Text>
          </View>

          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <Swipe screens={2} section={1} />
            <Button
              title={'Devam Et'}
               
              onPress={() => navigation.navigate(AppRoutes.ONBOARDINGSECOND)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingFirst;

const styles = StyleSheet.create({});
