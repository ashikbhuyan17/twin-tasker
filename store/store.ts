import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';
import viewReducer from './viewSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // uses localStorage for web

// Persist config for only the parts we want to save
const gamePersistConfig = {
  key: 'game',
  storage,
  whitelist: ['players', 'round'], // persist scores & round, not board state
};

const persistedGameReducer = persistReducer(gamePersistConfig, gameReducer);

export const store = configureStore({
  reducer: {
    game: persistedGameReducer,
    view: viewReducer, // view is not persisted
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
