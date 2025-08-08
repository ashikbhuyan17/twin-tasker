import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';
import viewReducer from './viewSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

// Persist config 
const gamePersistConfig = {
  key: 'game',
  storage,
  whitelist: ['players', 'round'],
};

const persistedGameReducer = persistReducer(gamePersistConfig, gameReducer);

export const store = configureStore({
  reducer: {
    game: persistedGameReducer,
    view: viewReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
