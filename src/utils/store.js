// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import appStore from './appStore';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, appStore);

export const store = configureStore({
  reducer: {
    movie: persistedReducer
  },
});

export const persistor = persistStore(store);

