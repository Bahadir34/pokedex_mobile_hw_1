import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import { onBoardingStyle } from '../../styles/onBoardingStyle';
import Button from '../../components/ui/button';
import { useNavigation } from '@react-navigation/native';
import AppRoutes from '../../utils/routes';
import { ArrowRight } from 'iconsax-react-nativejs';

const OnBoardingThird = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaView}>
      <View style={defaultScreenStyle.container}>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            marginLeft: 'auto',
            gap: 4,
          }}
          onPress={() => navigation.navigate(AppRoutes.TABMENU)}
        >
          <Text style={{ marginTop: 3 }}>Atlamak İçin</Text>
          <ArrowRight />
        </TouchableOpacity>
        <View
          style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
        >
          <Image
            source={require('../../assets/images/onb3.png')}
            style={{ width: 350, height: 350, resizeMode: 'contain' }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View>
            <Text style={onBoardingStyle.title}>
              Bu maceraya hazır mısınız?
            </Text>
          </View>
          <View>
            <Text style={onBoardingStyle.desc}>
              Hemen bir hesap oluşturun ve Pokémon dünyasını keşfetmeye
              başlayın!
            </Text>
          </View>

          <View style={{ flex: 1, justifyContent: 'flex-end', gap: 10 }}>
            <Button
              title={'Hesap oluşturmak'}
              onPress={() => navigation.navigate(AppRoutes.ONBOARDINGTHIRD)}
            />
            <Button
              title={'Zaten bir hesabım var.'}
              haveAccount
              onPress={() => navigation.navigate(AppRoutes.ONBOARDINGTHIRD)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingThird;
