import { createContext, useEffect, useState, ReactNode } from 'react'
import axios from 'axios'
import authConfig from '../configs/auth'
import { AuthValuesType, LoginParams, ErrCallbackType, UserDataType, SignUpParams } from './types'

const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  jobViewContext: null,
  setJobViewContext: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  signup: () => Promise.resolve(),
  addQuestion: () => Promise.resolve(),
  initAuth: () => null,
}

const AuthContext = createContext(defaultProvider)

type Props = {
  children: ReactNode,
  setMainScreen: any
}

const AuthProvider = ({ children, setMainScreen }: Props) => {
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
  const [jobView, setJobView] = useState<any>(defaultProvider.jobViewContext)

  const initAuth = async (): Promise<void> => {
    const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
    if (storedToken) {
      setLoading(true)
      await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}${authConfig.meEndpoint}`, {
          headers: {
            Authorization: `Bearer ${storedToken}`
          }
        })
        .then(async response => {
          setLoading(false)
          setUser(response.data)
          if (response?.data?.token) {
            window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.token);
          }
          setMainScreen(1);
        })
        .catch(() => {
          localStorage.removeItem(authConfig.storageTokenKeyName)
          setUser(null)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }

  useEffect(() => {
    initAuth()
  }, [])

  const handleRegister = (params: SignUpParams, errorCallback?: ErrCallbackType) => {
    return new Promise((resolve, rejects) => {
      axios.post(`${process.env.REACT_APP_BACKEND_URL}${authConfig.registerEndpoint}`, params)
        .then(async response => {
          resolve(response)
        })
        .catch(err => {
          rejects(err)
          if (errorCallback) errorCallback(err)
        })
    });
  }

  const handleLogin = (params: LoginParams, errorCallback?: ErrCallbackType) => {
    return new Promise((resolve, rejects) => {
      axios.post(`${process.env.REACT_APP_BACKEND_URL}${authConfig.loginEndpoint}`, params)
        .then(async response => {
          resolve(response)
          setUser(response.data)

          if (response?.data?.token) {
            window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.token);
          }
        })
        .catch(err => {
          rejects(err)
          if (errorCallback) errorCallback(err)
        })
    })
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
  }

  const createQuestion = (params: any, errorCallback?: ErrCallbackType) => {
    return new Promise((resolve, rejects) => {
      axios.post(`${process.env.REACT_APP_BACKEND_URL}${authConfig.addQuestion}`, params)
        .then(async response => {
          resolve(response)
        })
        .catch(err => {
          rejects(err)
          if (errorCallback) errorCallback(err)
        })
    })
  }

  const values = {
    user,
    loading,
    setUser,
    jobViewContext: jobView,
    setJobViewContext: setJobView,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    signup: handleRegister,
    addQuestion: createQuestion,
    initAuth
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
