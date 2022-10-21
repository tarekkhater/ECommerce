import useSWR from 'swr'
import axioss from '../lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useAuth = ({middleware , redirectIfAuthenticated }) => {
    const router = useRouter()
    
    const { data: user, error, mutate } = useSWR('/api/user', () =>
        axioss.get('/api/user').then(res => res.data)
    )
    const { data: client, errorClient, mutateClient} = useSWR('/api/client', () =>
    axioss.get('/api/client').then(res => res.data)
    )
    

    const csrf = () => axioss.get('/sanctum/csrf-cookie')
    const register = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axioss
            .post('/register', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }
    
    const login = async ({ setErrors,  ...props }) => {
        await csrf()

        setErrors([])

       await axioss
            .post('/login', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
        await axioss
            .post('/client/login', props)
            .then(() => mutateClient())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const create = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axioss
            .post('/createProduct', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axioss
            .post('/forgot-password', { email })
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axioss
            .post('/reset-password', { token: router.query.token, ...props })
            .then(response => router.push('/login?reset=' + btoa(response.data.status)))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resendEmailVerification = ({ setStatus }) => {
        axioss
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        if (! error) {
            await axioss
                .post('/logout')
                .then(() => mutate())

                await axioss
                .post('/client/logout')
                .then(() => mutateClient())
        
        }

        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated)
        if (window.location.pathname === "/verify-email" && user?.email_verified_at) router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error  ])

    return {
        user,
        client,
        register,
        login,
        create,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}