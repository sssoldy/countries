import { SerializedError } from '@reduxjs/toolkit'
import { ResponseStatus } from './api'

export interface ICountry {
  name: string
  topLevelDomain: Array<string>
  alpha3Code: string
  capital: string
  subregion: string
  region: string
  population: number
  borders: Array<string>
  nativeName: string
  currencies: Array<{ code: string; name: string; symbol: string }>
  languages: Array<{
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
  }>
  flag: string
}

export interface ICountriesState {
  status: ResponseStatus
  error: SerializedError | null
}
