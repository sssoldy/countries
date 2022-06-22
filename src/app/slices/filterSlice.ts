import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Region } from '../../types/country'
import { IFilterState } from '../../types/filter'
import { RootState } from '../store'

const initialState: IFilterState = {
  country: '',
  region: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    countryFilterChanged: (state, action: PayloadAction<string>) => {
      state.country = action.payload
    },
    regionFilterChanged: (state, action: PayloadAction<Region>) => {
      state.region = action.payload
    },
  },
})

export const selectCountryFilter = (state: RootState) => state.filter.country
export const selectRegionFilter = (state: RootState) => state.filter.region
export const selectFilter = (state: RootState) => state.filter

export const { countryFilterChanged, regionFilterChanged } = filterSlice.actions

export default filterSlice.reducer
