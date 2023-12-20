
import { createContext, useEffect, useState, ReactNode } from 'react'



import axios from 'axios'

import authConfig from '../configs/auth'

import { AuthValuesType, LoginParams, ErrCallbackType, UserDataType, SignUpParams, questions } from './types'



const defaultProvider: AuthValuesType = {
    user: null,
    loading: true,
    // questions: null,
    setUser: () => null,
    jobViewContext: null,
    setJobViewContext: () => null,
    setLoading: () => Boolean,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    signup: () => Promise.resolve(),
    addQuestion: () => Promise.resolve(),

    // getQuestions: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

type Props = {
    children: ReactNode
}

const AuthProvider = ({ children }: Props) => {
    // ** States
    const [user, setUser] = useState<UserDataType | null>(defaultProvider.user)
    const [loading, setLoading] = useState<boolean>(defaultProvider.loading)
    const [jobView, setJobView] = useState<any>(defaultProvider.jobViewContext)
    // const [questions, setQuestions] = useState<any>(defaultProvider.questions)

    // ** Hooks
    //   const router = useRouter()

    useEffect(() => {
        // const initAuth = async (): Promise<void> => {
        //     const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
        //     if (storedToken) {
        //         setLoading(true)
        //         await axios
        //             .get(authConfig.meEndpoint, {
        //                 headers: {
        //                     Authorization: storedToken
        //                 }
        //             })
        //             .then(async response => {
        //                 setLoading(false)
        //                 setUser({ ...response.data.userData })
        //             })
        //             .catch(() => {
        //                 localStorage.removeItem('userData')
        //                 localStorage.removeItem('refreshToken')
        //                 localStorage.removeItem('accessToken')
        //                 setUser(null)
        //                 setLoading(false)
        //                 // if (authConfig.onTokenExpiration === 'logout' && !router.pathname.includes('login')) {
        //                 //     router.replace('/login')
        //                 // }
        //             })
        //     } else {
        //         setLoading(false)
        //     }
        // }

        // initAuth()

    }, [])
    const handleRegister = (params: SignUpParams, errorCallback?: ErrCallbackType) => {
        axios
            .post(`
            http://localhost:4000${authConfig.registerEndpoint}`, params)
            .then(async response => {
                return response

                // params.rememberMe
                //     ? window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
                //     : null
                // const returnUrl = router.query.returnUrl

                // setUser({ ...response.data.userData })
                // params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response.data.userData)) : null

                // const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'

                // router.replace(redirectURL as string)
            })

            .catch(err => {
                if (errorCallback) errorCallback(err)
            })
    }

    const handleLogin = (params: LoginParams, errorCallback?: ErrCallbackType) => {
        return new Promise((resolve, rejects) => {
            axios
                .post(`
        http://localhost:4000${authConfig.loginEndpoint}`, params)
                .then(async response => {
                    resolve(response)
                    setUser(response.data)

                    // params.rememberMe
                    //     ? window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
                    //     : null
                    // const returnUrl = router.query.returnUrl

                    // setUser({ ...response.data.userData })
                    // params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response.data.userData)) : null

                    // const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'

                    // router.replace(redirectURL as string)
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
        // router.push('/login')
    }

    const createQuestion = (params: any, errorCallback?: ErrCallbackType) => {
        return new Promise((resolve, rejects) => {
            axios
                .post(`
        http://localhost:4000${authConfig.addQuestion}`, params)
                .then(async response => {
                    resolve(response)


                })

                .catch(err => {
                    rejects(err)
                    if (errorCallback) errorCallback(err)
                })


        })





    }

    const handleGetQuestions = (errorCallback?: ErrCallbackType) => {
        return new Promise((resolve, rejects) => {


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


        // getQuestions: handleGetQuestions
    }

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
