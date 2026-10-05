import { IPokemon } from './pokedexList';

export interface IUser {
  email?: string;
  password?: string;
  name?: string;
  favs?: IPokemon[];
}

export interface IInitilState {
  users: IUser[];
  currentUser: IUser;
}
