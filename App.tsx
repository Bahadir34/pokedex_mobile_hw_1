import { StyleSheet, Text, Platform, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/navigation/rootNavigation';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Platform.OS === 'ios' ? '#727272' : '#151515',
    fontWeight: 700,
    fontSize: 32,
  },
});
