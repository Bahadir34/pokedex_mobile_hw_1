import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { pokedexList } from '../../store/pokedexList';
import AppColors from '../../theme/colors';
import {
  bgImage,
  labelColors,
  labelImages,
  pokemonImages,
} from '../../store/mappingImages';
import {
  ArrowLeft2,
  Heart,
  HeartSlash,
  HeartTick,
} from 'iconsax-react-nativejs';
import { SafeAreaView } from 'react-native-safe-area-context';
import Proporties from '../../components/pokemon/proporties';
import Gender from '../../components/pokemon/gender';
import Weaknesses from '../../components/pokemon/weaknesses';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { TOGGLELIIKE } from '../../redux/action_types';

const Pokemon = ({ route, navigation }) => {
  const { currentUser } = useSelector((store: RootState) => store);

  const dispatch = useDispatch();

  const { id } = route.params;
  const [pokemon, setPokemon] = useState<any>();

  useEffect(() => {
    const foundPpokemon = pokedexList.find(item => item.id === id);

    setPokemon(foundPpokemon);
    navigation.setOptions({
      title: '',
      headerStyle: {
        backgroundColor: '#00000000',
      },
    });
  }, []);

  const handleLikeAndDislike = () => {
    if (!currentUser.email) {
      Alert.alert('Please login before like the Pokemon!');
    }

    dispatch({ type: TOGGLELIIKE, payload: pokemon?.id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View
          style={[styles.bgContainer, { backgroundColor: pokemon?.color }]}
        />
        <Image
          source={pokemonImages[pokemon?.id!]}
          style={styles.pokemonImage}
          resizeMode="contain"
        />
        <Image
          source={bgImage(pokemon?.types[0]!)}
          style={styles.bgObject}
          resizeMode="contain"
        />

        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft2 color={AppColors.White} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLikeAndDislike()}>
            {currentUser?.favs?.includes(pokemon?.id) ? (
              <Heart variant="Bold" color={AppColors.White} />
            ) : (
              <Heart variant="Linear" color={AppColors.White} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.bottomContainer}>
          <Text style={styles.title}>{pokemon?.name}</Text>
          <Text style={styles.number}>{pokemon?.number}</Text>

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

          <View style={styles.descContainer}>
            <Text style={styles.desc}>{pokemon?.desc}</Text>
          </View>

          <View style={styles.sep} />

          <Proporties
            weight={pokemon?.weight}
            height={pokemon?.height}
            category={pokemon?.category}
            ability={pokemon?.ability}
          />

          <Gender male={pokemon?.male} female={pokemon?.female} />
          <Weaknesses weaknesses={pokemon?.weeknesses} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pokemon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.White,
  },
  topContainer: {
    position: 'relative',
    flex: 1,
  },
  bottomContainer: { paddingInline: 10 },

  bgContainer: {
    width: 600,
    height: 600,
    borderRadius: 2000,
    position: 'absolute',
    top: -300,
    left: '50%',
    transform: [{ translateX: -300 }],
  },

  pokemonImage: {
    width: 180,
    height: 180,
    position: 'absolute',
    left: '50%',
    top: 150,
    transform: [{ translateX: '-50%' }],
    zIndex: 10,
  },
  bgObject: {
    position: 'absolute',
    top: 50,
    left: '50%',
    transform: [{ translateX: '-50%' }],
    width: 200,
    height: 200,
  },
  headerContainer: {
    position: 'absolute',
    top: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingInline: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: 'semibold',
  },
  number: { fontSize: 24, color: AppColors.Dark },
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
  descContainer: {
    padding: 5,
    marginTop: 30,
    marginRight: 10,
  },
  desc: {
    fontSize: 16,
    fontWeight: 200,
    letterSpacing: 1,
    lineHeight: 24,
  },

  sep: {
    width: '100%',
    height: 1,
    backgroundColor: AppColors.Flying2,
    borderRadius: 200,
    marginBlock: 10,
  },
});
