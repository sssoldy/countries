import axios from 'axios'
import { CountryId, IBorderCountry, ICountry } from '../types/country'

axios.defaults.baseURL = 'https://restcountries.com/v2/'

const fields = [
  'name',
  'topLevelDomain',
  'alpha3Code',
  'capital',
  'subregion',
  'region',
  'population',
  'borders',
  'nativeName',
  'currencies',
  'languages',
  'flag',
]

export const Countries = {
  all: async () =>
    await axios.request<Array<ICountry>>({
      method: 'get',
      url: 'all',
      params: {
        fields: fields.join(','),
      },
    }),

  single: async (countryId: CountryId) =>
    await axios.request<ICountry>({
      method: 'get',
      url: `alpha/${countryId}`,
      params: { fields: fields.join(',') },
    }),

  borderCountries: async (countryIds: Array<CountryId>) =>
    await axios.request<Array<IBorderCountry>>({
      method: 'get',
      url: 'alpha',
      params: { codes: countryIds.join(','), fields: 'name,alpha3Code' },
    }),
}
