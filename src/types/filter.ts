import { Region } from './country'

export interface IFilterState {
  country: string
  region: Region
  offset: number
}
