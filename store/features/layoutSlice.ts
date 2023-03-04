import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface LayoutState {
  colorScheme: 'light' | 'dark';
}

const initialState = {
  colorScheme: 'light',
} as LayoutState;

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setColorScheme(state, action: PayloadAction<'light' | 'dark'>) {
      state.colorScheme = action.payload;
    },
  },
});

export const { setColorScheme } = layoutSlice.actions;

export const getColorScheme = (state: { layout: LayoutState }) => state.layout.colorScheme;
export default layoutSlice.reducer;
