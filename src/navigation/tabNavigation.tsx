import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokedexScreen from '../screens/pokedex';
import ProfileScreen from '../screens/profile';
import FavouritesScreen from '../screens/favourites';
import RegionsScreen from '../screens/regions';
import AppRoutes from '../utils/routes';
import TabBarIcon from '../components/navigation/tabBarIcon';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <TabBarIcon name={route.name} focused={focused} />
        ),
        headerShadowVisible: false,
      })}
      initialRouteName={AppRoutes.POKEDEX}
    >
      <Tab.Screen name={AppRoutes.POKEDEX} component={PokedexScreen} />
      <Tab.Screen name={AppRoutes.PROFILE} component={ProfileScreen} />
      <Tab.Screen name={AppRoutes.FAVOURITES} component={FavouritesScreen} />
      <Tab.Screen name={AppRoutes.REGIONS} component={RegionsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
