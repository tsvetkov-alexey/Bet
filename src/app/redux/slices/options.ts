import { RootState } from '../store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface OptionsState {
  evenNum: boolean;
  oddNum: boolean;
  oneToThree: boolean;
  fourToSix: boolean;
  certainNum: boolean;
  certainNumValue: string | number;
}

const initialState: OptionsState = {
  evenNum: false,
  oddNum: false,
  oneToThree: false,
  fourToSix: false,
  certainNum: false,
  certainNumValue: '',
};

export const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
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
    setCertainNumValue(state, action: PayloadAction<string | number>) {
      state.certainNumValue = action.payload;
    },
  },
});

export const {
  setEvenNum,
  setOddNum,
  setOneToThree,
  setFourToSix,
  setCertainNum,
  setCertainNumValue,
} = optionsSlice.actions;
export const selectOptions = (state: RootState) => state.options;

export default optionsSlice.reducer;
