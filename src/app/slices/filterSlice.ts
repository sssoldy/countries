import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Region } from '../../types/country'
import { IFilterState } from '../../types/filter'
import { RootState } from '../store'

const OFFSET = 20

const initialState: IFilterState = {
  country: '',
  region: '',
  offset: OFFSET,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    countryFilterChanged: (state, action: PayloadAction<string>) => {
      state.country = action.payload
      state.offset = OFFSET
    },
    regionFilterChanged: (state, action: PayloadAction<Region>) => {
      state.region = action.payload
      state.offset = OFFSET
    },
    offsetFilterChanged: state => {
      state.offset = state.offset + OFFSET
    },
  },
})

export const selectCountryFilter = (state: RootState) => state.filter.country
export const selectRegionFilter = (state: RootState) => state.filter.region
export const selectOffsetFilter = (state: RootState) => state.filter.offset
export const selectFilter = (state: RootState) => state.filter
export const selectFormFilter = createSelector(
  selectCountryFilter,
  selectRegionFilter,
  (country, region) => ({ country, region }),
)

export const {
  countryFilterChanged,
  regionFilterChanged,
  offsetFilterChanged,
} = filterSlice.actions

export default filterSlice.reducer
