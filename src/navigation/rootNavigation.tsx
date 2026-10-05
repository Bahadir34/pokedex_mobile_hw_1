import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppRoutes from '../utils/routes';
import OnBoardingFirst from '../screens/onBoarding/onBoardingFirst';
import OnBoardingSecond from '../screens/onBoarding/onBoardingSecond';
import OnBoardingThird from '../screens/onBoarding/onBoardingThird';
import TabNavigation from './tabNavigation';
import { Login } from 'iconsax-react-nativejs';
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';
import ForgotPasswordScreen from '../screens/auth/forgotPassword';
import Pokemon from '../screens/pokemon';

const RootNavigation: FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name={AppRoutes.ONBOARDINGFIRST}
        component={OnBoardingFirst}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={AppRoutes.ONBOARDINGSECOND}
        component={OnBoardingSecond}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={AppRoutes.ONBOARDINGTHIRD}
        component={OnBoardingThird}
        options={{ headerShown: false, headerShadowVisible: false }}
      />
      <Stack.Screen
        name={AppRoutes.TABMENU}
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={AppRoutes.LOGIN}
        component={LoginScreen}
        options={{
          headerBackTitle: 'Geri',
          title: 'Giriş Yap',
        }}
      />
      <Stack.Screen
        name={AppRoutes.REGISTER}
        component={RegisterScreen}
        options={{
          headerBackTitle: 'Geri',
          title: 'Kayıt Ol',
        }}
      />
      <Stack.Screen
        name={AppRoutes.FORGOTPASSWORD}
        component={ForgotPasswordScreen}
        options={{
          headerBackTitle: 'Geri',
          title: 'Şifremi Unuttum',
        }}
      />
      <Stack.Screen
        name={AppRoutes.POKEMON}
        component={Pokemon}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
