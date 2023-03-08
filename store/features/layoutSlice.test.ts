import { configureStore } from '@reduxjs/toolkit';
import layoutSlice, { setColorScheme } from './layoutSlice';

describe('Layout redux state tests', () => {
  it('Should initially set games to an empty object', () => {
    const store = configureStore({ reducer: layoutSlice });
    const state = store.getState();
    expect(state.colorScheme).toBe('light');

    store.dispatch(setColorScheme('dark'));
    const state2 = store.getState();
    expect(state2.colorScheme).toBe('dark');
  });
});
