import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';

export interface InfoState {
  currentBet: string,
  evenNum: boolean,
  oddNum: boolean,
  oneToThree: boolean,
  fourToSix: boolean,
  certainNum: boolean
}

const initialState: InfoState = {
  currentBet: '1.00',
  evenNum: false,
  oddNum: false,
  oneToThree: false,
  fourToSix: false,
  certainNum: false
}

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
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
})

export const { setEvenNum, setOddNum, setOneToThree, setFourToSix, setCertainNum, setCurrentBet  } = infoSlice.actions
export const selectInfo = (state: RootState) => state.info;

export default infoSlice.reducer