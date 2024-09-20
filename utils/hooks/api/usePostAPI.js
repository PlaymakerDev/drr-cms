import React, { useCallback, useEffect, useRef } from 'react'
import useAPI from './useAPI'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { AppState } from '@/store'
import { AxiosError, AxiosRequestConfig } from 'axios'
import { message } from 'antd'
import { API_POST_DATA_SUCCESS, ERROR_MESSAGE_INTERNAL_SERVER_ERROR } from '@/utils/constant'

const usePostAPI = (loadType, reducer) => {
  const API = useAPI(loadType)
  const dispatch = useAppDispatch()
  const tasksRunning = useAppSelector((state) => state.tasksRunning)
  const data = useAppSelector((state) => reducer?.reducerKey ? state[reducer?.reducerName || '']?.[reducer?.reducerKey] : state[reducer?.reducerName || ''])
  const refPath = useRef('')

  const func = useCallback(async (path, body, params, showDefaultMessage = true, options) => {
    const name = 'POST:' + path
    try {
      API.begin(name)
      refPath.current = name
      const { data } = await API.post(path, body, { params, ...(options || {}) })

      if (typeof reducer?.funcDispatch === 'function') {
        dispatch(reducer?.funcDispatch(data))
      }

      if (showDefaultMessage) {
        if (data?.response?.message) {
          message.success(data?.response.message)
        } else {
          message.success(API_POST_DATA_SUCCESS)
        }
      }

      return data
    } catch (error) {
      if (showDefaultMessage) {
        if (error instanceof AxiosError) {
          if (typeof reducer?.funcDispatch === 'function') {
            dispatch(reducer?.funcDispatch(error.response?.data))
          }
          message.error(error.response?.data?.message, 6)
        } else {
          message.error(ERROR_MESSAGE_INTERNAL_SERVER_ERROR, 6)
        }
      } else {
        return error
      }
      console.log(error);
    } finally {
      API.end(name)
    }

    return { success: false, response: { data: null } }
  }, [API, dispatch, reducer])

  const loading = refPath ? tasksRunning[refPath.current]?.loading || false : false

  return [func, loading, data]
}

export default usePostAPI