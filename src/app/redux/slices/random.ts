import { RootState } from '../store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface RandomState {
  winAmount: number;
  balance: number;
  randomResult: number;
  currentBet: string;
}

const initialState: RandomState = {
  winAmount: 0,
  balance: 1000,
  randomResult: 1,
  currentBet: '1.00',
};

export const randomSlice = createSlice({
  name: 'random',
  initialState,
  reducers: {
    setWinAmount(state, action: PayloadAction<number>) {
      state.winAmount = action.payload;
    },
    setBalance(state, action: PayloadAction<number>) {
      state.balance = action.payload;
    },
    setRandomResult(state, action: PayloadAction<number>) {
      state.randomResult = action.payload;
    },
    setCurrentBet(state, action: PayloadAction<string>) {
      state.currentBet = action.payload;
    },
  },
});

export const { setWinAmount, setBalance, setRandomResult, setCurrentBet } = randomSlice.actions;
export const selectRandom = (state: RootState) => state.random;

export default randomSlice.reducer;
