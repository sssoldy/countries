import * as React from 'react'
import { AxiosResponse } from 'axios'
import { ResponseStatus } from '../types/api'

type State<T> = {
  data: T | null
  status: ResponseStatus
  error: any
}

type Action<T> = {
  data: T | null
  status: ResponseStatus
  error: any
}

const useAsync = <T>() => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<State<T>, Action<T>>
  >((state, action) => ({ ...state, ...action }), {
    data: null,
    status: 'idle',
    error: null,
  })

  const { data, error, status } = state

  const setData = React.useCallback(
    (data: T) => dispatch({ data, status: 'successed', error: null }),
    [dispatch],
  )
  const setError = React.useCallback(
    (error: any) => dispatch({ data: null, status: 'failed', error }),
    [dispatch],
  )

  const run = React.useCallback(
    (promise: Promise<AxiosResponse<T, any>>) => {
      dispatch({ data: null, status: 'loading', error: null })

      return promise.then(
        (response: AxiosResponse<T, any>) => {
          setData(response.data)
          return response.data
        },
        error => {
          setError(error)
          return Promise.reject(error)
        },
      )
    },
    [dispatch, setData, setError],
  )

  return {
    isIdle: status === 'idle',
    isLoading: status === 'loading',
    isError: status === 'failed',
    isSuccess: status === 'successed',

    error,
    status,
    data,
    run,
  }
}

export { useAsync }
