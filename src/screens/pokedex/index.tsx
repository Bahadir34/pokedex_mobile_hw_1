import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React, { FC } from 'react';
import { pokedexList } from '../../store/pokedexList';
import PokedexItem from '../../components/pokedex/pokedexItem';
import AppColors from '../../theme/colors';

const PokedexScreen: FC = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.White }}>
      <FlatList
        style={{ flex: 1 }}
        data={pokedexList}
        renderItem={({ index, item }) => <PokedexItem pokemon={item} />}
      />
    </SafeAreaView>
  );
};

export default PokedexScreen;
