import { RootState } from '../store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface InfoState {
  modal: boolean;
  isAuth: boolean;
  status: string;
  pageLoading: boolean;
}

const initialState: InfoState = {
  modal: false,
  isAuth: false,
  status: 'beginning',
  pageLoading: false,
};

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setModal(state, action: PayloadAction<boolean>) {
      state.modal = action.payload;
    },
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setPageLoading(state, action: PayloadAction<boolean>) {
      state.pageLoading = action.payload;
    },
  },
});

export const { setPageLoading, setModal, setIsAuth, setStatus } = infoSlice.actions;
export const selectInfo = (state: RootState) => state.info;

export default infoSlice.reducer;
