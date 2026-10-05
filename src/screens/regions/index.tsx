import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React, { FC } from 'react';
import { regions } from '../../store/regions';
import RegionCard from '../../components/regions/regionCard';

const RegionsScreen: FC = () => {
  return (
    <SafeAreaView>
      <FlatList data={regions} renderItem={({ item }) => <RegionCard region ={item}/>} />
    </SafeAreaView>
  );
};

export default RegionsScreen;
