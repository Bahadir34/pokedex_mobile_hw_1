import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppRoutes from '../utils/routes';
import OnBoardingFirst from '../screens/onBoarding/onBoardingFirst';
import OnBoardingSecond from '../screens/onBoarding/onBoardingSecond';
import OnBoardingThird from '../screens/onBoarding/onBoardingThird';
import TabNavigation from './tabNavigation';

const RootNavigation: FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

export default RootNavigation;
