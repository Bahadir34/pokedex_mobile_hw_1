import AppColors from '../../theme/colors';

interface IPokemon {
  id: number;
  name: String;
  types: String[];
  number: String;
  color: AppColors;
}

interface IPokedexList {
  pokedexList: IPokemon[];
}

export type { IPokemon, IPokedexList };
