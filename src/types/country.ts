import { SerializedError } from '@reduxjs/toolkit'
import { ResponseStatus } from './api'

export type Region =
  | 'Africa'
  | 'America'
  | 'Asia'
  | 'Europe'
  | 'Oceania'
  | 'Polar'
  | ''

export type CountryId = string
export interface ICountry {
  name: string
  topLevelDomain: Array<string>
  alpha3Code: CountryId
  capital?: string
  subregion: string
  region: Region
  population: number
  borders?: Array<CountryId>
  nativeName: string
  currencies?: Array<{ code: string; name: string; symbol: string }>
  languages: Array<{
    iso639_1: string
    iso639_2: string
    name: string
    nativeName: string
  }>
  flag: string
}

export interface IBorderCountry {
  alpha3Code: CountryId
  name: string
}
export interface ICountyState {
  country: ICountry | null
  borderCountries: Array<IBorderCountry> | null
  status: ResponseStatus
  error: SerializedError | null
}

export interface ICountriesState {
  status: ResponseStatus
  error: SerializedError | null
}
