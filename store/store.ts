import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';
import viewReducer from './viewSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    view: viewReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;