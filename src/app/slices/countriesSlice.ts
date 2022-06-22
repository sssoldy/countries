import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { Countries } from '../../services/restcountries'
import { ICountriesState, ICountry } from '../../types/country'
import { RootState } from '../store'

export const fetchCountries = createAsyncThunk(
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
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? null
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'successed'
        state.error = null
        countriesAdapter.setAll(state, action.payload)
      })
  },
})

export const selectCountriesError = (state: RootState) => state.countries.error

export const selectCountriesStatus = (state: RootState) =>
  state.countries.status

export const { selectIds: selectCountriesIds, selectById: selectCountryById } =
  countriesAdapter.getSelectors((state: RootState) => state.countries)

export default countriesSlice.reducer
