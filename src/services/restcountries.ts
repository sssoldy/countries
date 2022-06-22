import axios from 'axios'
import { ICountry } from '../types/country'

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
    (await axios.request)<Array<ICountry>>({
      method: 'get',
      url: 'all',
      params: {
        fields: fields.join(','),
      },
    }),
}
