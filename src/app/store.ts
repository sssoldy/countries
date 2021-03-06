import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import countriesReducer from './slices/countriesSlice'
import filterReducer from './slices/filterSlice'
import countryReducer from './slices/countrySlice'

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    filter: filterReducer,
    country: countryReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
