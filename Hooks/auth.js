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
        if (middleware === 'auth' && error) logout()
    }, [user, error  ])

    return {
        user,
        client,
        register,
        login,
        create,
        logout,
    }
}