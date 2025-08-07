import { GameView } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ViewState {
  currentView: GameView;
}

const initialState: ViewState = {
  currentView: 'setup',
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<GameView>) => {
      state.currentView = action.payload;
    },
  },
});

export const { setView } = viewSlice.actions;
export default viewSlice.reducer;
