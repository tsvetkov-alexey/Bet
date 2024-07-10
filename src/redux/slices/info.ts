import { RootState } from '../store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface InfoState {
  winAmount: number;
  pageLoading: boolean;
  modal: boolean;
  isAuth: boolean;
  balance: number;
  status: string;
  randomResult: number;
  currentBet: string;
  evenNum: boolean;
  oddNum: boolean;
  oneToThree: boolean;
  fourToSix: boolean;
  certainNum: boolean;
  certainNumValue: string | number;
}

const initialState: InfoState = {
  winAmount: 0,
  pageLoading: false,
  modal: false,
  isAuth: false,
  balance: 1000,
  status: 'beginning',
  randomResult: 1,
  currentBet: '1.00',
  evenNum: false,
  oddNum: false,
  oneToThree: false,
  fourToSix: false,
  certainNum: false,
  certainNumValue: '',
};

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setWinAmount(state, action: PayloadAction<number>) {
      state.winAmount = action.payload;
    },
    setCertainNumValue(state, action: PayloadAction<string | number>) {
      state.certainNumValue = action.payload;
    },
    setPageLoading(state, action: PayloadAction<boolean>) {
      state.pageLoading = action.payload;
    },
    setModal(state, action: PayloadAction<boolean>) {
      state.modal = action.payload;
    },
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setBalance(state, action: PayloadAction<number>) {
      state.balance = action.payload;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setRandomResult(state, action: PayloadAction<number>) {
      state.randomResult = action.payload;
    },
    setCurrentBet(state, action: PayloadAction<string>) {
      state.currentBet = action.payload;
    },
    setEvenNum(state, action: PayloadAction<boolean>) {
      state.evenNum = action.payload;
    },
    setOddNum(state, action: PayloadAction<boolean>) {
      state.oddNum = action.payload;
    },
    setOneToThree(state, action: PayloadAction<boolean>) {
      state.oneToThree = action.payload;
    },
    setFourToSix(state, action: PayloadAction<boolean>) {
      state.fourToSix = action.payload;
    },
    setCertainNum(state, action: PayloadAction<boolean>) {
      state.certainNum = action.payload;
    },
  },
});

export const {
  setWinAmount,
  setCertainNumValue,
  setPageLoading,
  setModal,
  setIsAuth,
  setBalance,
  setStatus,
  setEvenNum,
  setOddNum,
  setOneToThree,
  setFourToSix,
  setCertainNum,
  setCurrentBet,
  setRandomResult,
} = infoSlice.actions;
export const selectInfo = (state: RootState) => state.info;

export default infoSlice.reducer;
