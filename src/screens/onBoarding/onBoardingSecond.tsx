import { SafeAreaView, View, Image, Text } from 'react-native';
import React from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import { onBoardingStyle } from '../../styles/onBoardingStyle';
import Button from '../../components/ui/button';
import Swipe from '../../components/ui/swipe';
import { useNavigation } from '@react-navigation/native';
import AppRoutes from '../../utils/routes';

const OnBoardingSecond = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaView}>
      <View style={defaultScreenStyle.container}>
        <View style={{ flex: 1 }}></View>
        <View
          style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
        >
          <Image
            source={require('../../assets/images/onb2.png')}
            style={{ width: 350, height: 350, resizeMode: 'contain' }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View>
            <Text style={onBoardingStyle.title}>
              Pokédex'inizi güncel tutun.Tüm Pokemonlar Tek Bir Yerde
            </Text>
          </View>
          <View>
            <Text style={onBoardingStyle.desc}>
              Kaydolun ve profilinizi, favori Pokémon'larınızı, ayarlarınızı ve
              daha fazlasını internet bağlantınız olmasa bile uygulamada
              saklayın.
            </Text>
          </View>

          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <Swipe screens={2} section={2} />
            <Button
              title={'Hadi başlayalım!'}
              onPress={() => navigation.navigate(AppRoutes.ONBOARDINGTHIRD)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingSecond;
