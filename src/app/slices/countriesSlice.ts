import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit'
import { Countries } from '../../services/restcountries'
import { ICountriesState, ICountry } from '../../types/country'
import { RootState } from '../store'

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

export const selectCountriesStatus = createSelector(
  (state: RootState) => state.countries.status,
  status => ({
    isIdle: status === 'idle',
    isLoading: status === 'loading',
    isError: status === 'failed',
    isSuccess: status === 'successed',
  }),
)

export const {
  selectIds: selectCountriesIds,
  selectById: selectCountryById,
  selectTotal: selectCountriesNumber,
} = countriesAdapter.getSelectors((state: RootState) => state.countries)

export default countriesSlice.reducer
