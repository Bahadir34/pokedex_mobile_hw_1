// Reducer state'in nasil degisecegini belirler.

import { Alert } from 'react-native';
import { LOGIN, REGISTER, LOGOUT, TOGGLELIIKE } from './action_types.js';
import { IInitilState } from '../models/data/user.js';

// Baslangic durumu (initialState)
const initialState: IInitilState = {
  users: [],
  currentUser: {},
};

interface ReducerAction {
  type: string;
  payload?: any;
}

// state : state'in son degeri
// action : state'in nasil degisecegini haber veren nesne
// reducer fonksiyonundan return edilen deger state'in son degeri olur
export const authReducer = (state = initialState, action: ReducerAction) => {
  switch (action.type) {
    case LOGIN:
      Alert.alert('Login dispatch edildi');
      const isUserExist = state.users.find(
        user => user.email === action.payload.email,
      );

      const isPasswordCorrect =
        isUserExist?.password === action.payload.password;

      if (!isUserExist) {
        Alert.alert('Giriş yapmak isteyen kullanıcı bulunamadı!');
        return {
          ...state,
          currentUser: {},
        };
      }
      if (!isPasswordCorrect)
        return Alert.alert('Email veya parola bilgileri hatalı!');
      console.log('Giris Yapan Kullanici : ', isUserExist);

      return { ...state, currentUser: isUserExist };

    case LOGOUT:
      return { ...state, currentUser: {} };

    case REGISTER:
      const foundUser = state.users.some(
        user => user.email === action.payload.email,
      );

      if (foundUser)
        return Alert.alert('Kaydolmak isteyen kullanıcı zaten kayıtlı!');

      Alert.alert('Kullaıcı başarılı bir şekilde kaydedildi!');
      return {
        ...state,
        users: [...state.users, { ...action.payload, favs: [] }],
      };

    case TOGGLELIIKE: {
      if (!state.currentUser?.email) {
        return state;
      }

      let updatedCurrentUser = state.currentUser;

      const updatedUsers = state.users.map(item => {
        if (item.email === state.currentUser.email) {
          const favs = item.favs ?? [];
          const orderOfItem = favs.indexOf(action.payload);

          const newFavs =
            orderOfItem !== -1
              ? favs.filter((_, index) => index !== orderOfItem)
              : [...favs, action.payload];

          const newItem = { ...item, favs: newFavs };
          updatedCurrentUser = newItem; // currentUser'ı da güncelliyoruz
          return newItem;
        }
        return item;
      });

      return {
        ...state,
        users: updatedUsers,
        currentUser: updatedCurrentUser,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
