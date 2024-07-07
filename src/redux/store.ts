import { configureStore } from '@reduxjs/toolkit'
import info from './slices/info'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: { info },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;