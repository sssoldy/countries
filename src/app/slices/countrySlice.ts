import {
  createAsyncThunk,
  createSelector,
  createSlice,
  SerializedError,
} from '@reduxjs/toolkit'
import { Countries } from '../../services/restcountries'
import {
  CountryId,
  IBorderCountry,
  ICountry,
  ICountyState,
} from '../../types/country'
import { RootState } from '../store'

export const fetchSingleCountry = createAsyncThunk<
  ICountry,
  CountryId,
  { state: RootState; rejectValue: SerializedError }
>(
  'country/fetchSingleCountry',
  async (countryId, { getState, rejectWithValue }) => {
    const countriesDictionary = getState().countries.entities
    const countriesKeys = Object.keys(countriesDictionary)

    if (countriesKeys.length) {
      const country = countriesDictionary[countryId]
      if (country) return country
      return rejectWithValue({ code: '500', message: 'Unexpected condition' })
    }

    const { data } = await Countries.single(countryId)
    return data
  },
)

export const fetchBorderCountries = createAsyncThunk<
  Array<IBorderCountry> | null,
  Array<CountryId>,
  { state: RootState }
>('country/fetchBorderCountries', async (countryIds, { getState }) => {
  if (!countryIds.length) return null

  const countriesDictionary = getState().countries.entities
  const countriesKeys = Object.keys(countriesDictionary)

  if (countriesKeys.length) {
    const borderCountries = countryIds?.map(countryId => {
      const { alpha3Code, name } = countriesDictionary[countryId] as ICountry
      return { alpha3Code, name } as IBorderCountry
    })
    if (borderCountries) return borderCountries
  }

  const { data } = await Countries.borderCountries(countryIds)
  return data
})

const initialState: ICountyState = {
  country: null,
  borderCountries: null,
  status: 'idle',
  error: null,
}

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    countryReset: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSingleCountry.pending, (state, action) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchSingleCountry.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error
      })
      .addCase(fetchSingleCountry.fulfilled, (state, action) => {
        state.status = 'successed'
        state.error = null
        state.country = action.payload
      })
      .addCase(fetchBorderCountries.fulfilled, (state, action) => {
        state.borderCountries = action.payload
      })
  },
})

export const { countryReset } = countrySlice.actions

export const selectCountry = (state: RootState) => state.country.country

export const selectCountryError = (state: RootState) => state.country.error

export const selectBorderCountriesIds = (state: RootState) => {
  return state.country.country?.borders
}

export const selectBorderCountries = (state: RootState) =>
  state.country.borderCountries

export const selectCountryStatus = createSelector(
  (state: RootState) => state.country.status,
  status => ({
    isIdle: status === 'idle',
    isLoading: status === 'loading',
    isError: status === 'failed',
    isSuccess: status === 'successed',
  }),
)

export default countrySlice.reducer
