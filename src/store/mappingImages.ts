// src/assets/pokemonImages.ts
import { ImageSourcePropType } from 'react-native';
import AppColors from '../theme/colors';

export const pokemonImages: Record<string, ImageSourcePropType> = {
  '001': require('../assets/images/001.png'),
  '002': require('../assets/images/002.png'),
  '003': require('../assets/images/003.png'),
  '004': require('../assets/images/004.png'),
  '005': require('../assets/images/005.png'),
  '006': require('../assets/images/006.png'),
  '007': require('../assets/images/007.png'),
  '008': require('../assets/images/008.png'),
  '009': require('../assets/images/009.png'),
  '015': require('../assets/images/015.png'),
  '025': require('../assets/images/025.png'),
  '035': require('../assets/images/035.png'),
  '051': require('../assets/images/051.png'),
  '095': require('../assets/images/095.png'),
  '108': require('../assets/images/108.png'),
  '109': require('../assets/images/109.png'),
  '151': require('../assets/images/151.png'),
  '245': require('../assets/images/245.png'),
  '306': require('../assets/images/306.png'),
  '384': require('../assets/images/384.png'),
  '448': require('../assets/images/448.png'),
  '497': require('../assets/images/497.png'),
  '571': require('../assets/images/571.png'),
  '609': require('../assets/images/609.png'),
  '613': require('../assets/images/613.png'),
  '733': require('../assets/images/733.png'),
};

export const labelImages = (label: String) => {
  switch (label) {
    case 'Grass':
      return require('../assets/icons/frame1.png');
    case 'Poison':
      return require('../assets/icons/poison.png');
    case 'Fire':
      return require('../assets/icons/fire.png');
    case 'Flying':
      return require('../assets/icons/flying.png');
    case 'Water':
      return require('../assets/icons/water.png');
    case 'Bug':
      return require('../assets/icons/bug.png');
    case 'Electric':
      return require('../assets/icons/electric.png');
    case 'Fairy':
      return require('../assets/icons/fairy.png');
    case 'Ground':
      return require('../assets/icons/ground.png');
    case 'Rock':
      return require('../assets/icons/rock.png');
    case 'Normal':
      return require('../assets/icons/normal.png');
    case 'Psychic':
      return require('../assets/icons/psychic.png');
    case 'Steel':
      return require('../assets/icons/steel.png');
    case 'Dragon':
      return require('../assets/icons/dragon.png');
    case 'Fighting':
      return require('../assets/icons/fighting.png');
    case 'Dark':
      return require('../assets/icons/dark.png');
    case 'Ghost':
      return require('../assets/icons/ghost.png');
    case 'Ice':
      return require('../assets/icons/ice.png');
  }
};

export const bgImage = (label: String) => {
  switch (label) {
    case 'Grass':
      return require('../assets/itemBackgrounds/Grass.png');
    case 'Poison':
      return require('../assets/itemBackgrounds/Poison.png');
    case 'Fire':
      return require('../assets/itemBackgrounds/Fire.png');
    case 'Flying':
      return require('../assets/itemBackgrounds/Flying.png');
    case 'Water':
      return require('../assets/itemBackgrounds/Water.png');
    case 'Bug':
      return require('../assets/itemBackgrounds/Bug.png');
    case 'Electric':
      return require('../assets/itemBackgrounds/Electric.png');
    case 'Fairy':
      return require('../assets/itemBackgrounds/Fairy.png');
    case 'Ground':
      return require('../assets/itemBackgrounds/Ground.png');
    case 'Rock':
      return require('../assets/itemBackgrounds/Rock.png');
    case 'Normal':
      return require('../assets/itemBackgrounds/Normal.png');

    case 'Steel':
      return require('../assets/itemBackgrounds/Steel.png');
    case 'Dragon':
      return require('../assets/itemBackgrounds/Dragon.png');
    case 'Fighting':
      return require('../assets/itemBackgrounds/Fighting.png');
    case 'Dark':
      return require('../assets/itemBackgrounds/Dark.png');
    case 'Ghost':
      return require('../assets/itemBackgrounds/Ghost.png');
  }
};

export const labelColors = (label: String) => {
  switch (label) {
    case 'Grass':
      return AppColors.Grass;
    case 'Poison':
      return AppColors.Poison;
    case 'Fire':
      return AppColors.Fire;
    case 'Flying':
      return AppColors.Flying;
    case 'Water':
      return AppColors.Water;
    case 'Bug':
      return AppColors.Bug;
    case 'Electric':
      return AppColors.Electric;
    case 'Fairy':
      return AppColors.Fairy;
    case 'Ground':
      return AppColors.Ground;
    case 'Rock':
      return AppColors.Rock;
    case 'Normal':
      return AppColors.Normal;
    case 'Psychic':
      return AppColors.Psychic;
    case 'Steel':
      return AppColors.Steel;
    case 'Dragon':
      return AppColors.Dragon;
    case 'Fighting':
      return AppColors.Fighting;
    case 'Dark':
      return AppColors.Dark;

    case 'Ghost':
      return AppColors.Ghost;
    case 'Ice':
      return AppColors.Ice;
  }
};
