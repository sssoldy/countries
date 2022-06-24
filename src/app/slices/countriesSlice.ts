import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityId,
} from '@reduxjs/toolkit'
import { Countries } from '../../services/restcountries'
import { ICountriesState, ICountry } from '../../types/country'
import { RootState } from '../store'
import { selectFormFilter, selectOffsetFilter } from './filterSlice'

export const fetchCountries = createAsyncThunk<Array<ICountry>>(
  'countries/fetchCountries',
  async () => {
    const { data } = await Countries.all()
    return data
  },
)

const countriesAdapter = createEntityAdapter<ICountry>({
  selectId: state => state.alpha3Code,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
})

const initialState = countriesAdapter.getInitialState<ICountriesState>({
  status: 'idle',
  error: null,
})

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCountries.pending, state => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'successed'
        state.error = null
        countriesAdapter.setAll(state, action.payload)
      })
  },
})

export const selectCountriesError = (state: RootState) => state.countries.error

export const { selectById: selectCountryById, selectAll: selectCountries } =
  countriesAdapter.getSelectors((state: RootState) => state.countries)

export const selectCountriesStatus = createSelector(
  (state: RootState) => state.countries.status,
  status => ({
    isIdle: status === 'idle',
    isLoading: status === 'loading',
    isError: status === 'failed',
    isSuccess: status === 'successed',
  }),
)

export const selectFilteredCountriesIds = createSelector(
  [selectCountries, selectFormFilter],
  (countries, filter) => {
    const { country, region } = filter

    const filteredCountries = countries.filter(c => {
      const isCountryMatch = c.name
        .toLowerCase()
        .includes(country.toLowerCase())
      const isRegionMatch = c.region.includes(region)
      const isFiltered = [isCountryMatch, isRegionMatch].every(Boolean)
      return isFiltered
    })

    return filteredCountries.map(c => c.alpha3Code as EntityId)
  },
)

export const selectFilteredCountriesIdsSlice = createSelector(
  selectFilteredCountriesIds,
  selectOffsetFilter,
  (ids, offset) => {
    const countriesIdsTotal = ids.length
    const countriesIdsSlice = ids.slice(0, offset)
    return {
      countriesIdsTotal,
      countriesIdsSlice,
    }
  },
)

export default countriesSlice.reducer
