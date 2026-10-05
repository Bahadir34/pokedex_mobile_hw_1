import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { FC, useState } from 'react';
import { IPokedexListItemProps } from '../../models/ui/pokedexItemProps';
import AppColors from '../../theme/colors';
import {
  bgImage,
  labelColors,
  labelImages,
  pokemonImages,
} from '../../store/mappingImages';
import { Heart, HeartCircle } from 'iconsax-react-nativejs';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { useNavigation } from '@react-navigation/native';
import AppRoutes from '../../utils/routes';
import { IPokemon } from '../../models/data/pokedexList';
import { TOGGLELIIKE } from '../../redux/action_types';

const PokedexItem: FC<IPokedexListItemProps> = ({ pokemon }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((store: RootState) => store);
  console.log('Guncel Kullanici : ', currentUser);

  const [isLiked, setIsLiked] = useState(false);

  const image = pokemonImages[pokemon.id];

  const handleLikeAndDislike = () => {
    if (!currentUser.email) {
      Alert.alert('Please login before like the Pokemon!');
    }

    dispatch({ type: TOGGLELIIKE, payload: pokemon?.id });
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: `${pokemon.color}15` }]}
      onPress={() => navigation.navigate(AppRoutes.POKEMON, { id: pokemon.id })}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.number}>{pokemon.number}</Text>
        <Text style={styles.name}>{pokemon.name}</Text>
        <View style={{ flexDirection: 'row', gap: 5, marginTop: 5 }}>
          {pokemon?.types?.map((item, index) => (
            <View
              key={index}
              style={[styles.type, { backgroundColor: labelColors(item) }]}
            >
              <View style={styles.labelContainer}>
                <Image source={labelImages(item)} style={styles.typeIcon} />
              </View>
              <Text style={styles.typeName}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.imageContainer}>
        <View style={[styles.box, { backgroundColor: pokemon.color }]}>
          <Image source={image} style={styles.pokemon} />
          <Image
            source={bgImage(pokemon.types.at(0)!)}
            style={styles.imageBg}
          />
        </View>
        {currentUser?.email && (
          <TouchableOpacity
            onPress={() => handleLikeAndDislike()}
            style={styles.heartContainer}
          >
            {currentUser?.favs?.includes(pokemon?.id) ? (
              <Heart variant="Bold" color={AppColors.White} />
            ) : (
              <Heart variant="Linear" color={AppColors.White} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PokedexItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    margin: 10,
    borderRadius: 10,
  },
  infoContainer: { flex: 2, justifyContent: 'center', padding: 6 },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  box: {
    width: '100%',
    height: 110,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  imageBg: {
    width: '85%',
    height: '85%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    zIndex: 5,
    resizeMode: 'contain',
  },
  pokemon: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    zIndex: 9,
  },
  name: {
    fontSize: 21,
    fontWeight: 700,
  },
  number: {
    fontSize: 14,
    fontWeight: 500,
  },

  type: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 100,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  labelContainer: {
    backgroundColor: AppColors.White,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    padding: 5,
  },
  typeIcon: {
    width: 20,
    height: 20,
  },
  typeName: {
    fontWeight: 500,
    fontSize: 14,
    color: AppColors.White,
  },

  heartContainer: {
    position: 'absolute',
    zIndex: 11111,
    top: 5,
    right: 5,
    
    borderRadius: 100,
  },
  heart: {
    color: AppColors.White,
    backgroundColor: 'rgba(200,23,42)',
    borderRadius: 100,
  },
});
