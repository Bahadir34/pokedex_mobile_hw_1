import { createStore } from 'redux';
import authReducer from './auth-reducer';

// redux store u uygulamanin global state'ini tutar
const store = createStore(authReducer);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
