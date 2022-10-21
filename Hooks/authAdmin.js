import useSWR from 'swr'
import axioss from '../lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useAuthAdmin = ({middleware , redirectIfAuthenticated }) => {
    const router = useRouter()
    const { data: admin, error, mutate } = useSWR('/api/admin', () =>
        axioss.get('/api/admin').then(res => res.data)
    )

    const csrf = () => axioss.get('/sanctum/csrf-cookie')
    const adminLogin = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

       await axioss
            .post('/admin/login', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const adminLogout = async () => {
        if (! error) {
            await axioss
                .post('/admin/logout')
                .then(() => mutate())
        }

        window.location.pathname = '/admin/login'
    }
    const add_client = async ({setErrors, ...props }) => {
        await csrf()
        axioss
            .post('/admin/addClient', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && admin) router.push(redirectIfAuthenticated)
        if (middleware === 'auth:admin' && redirectIfAuthenticated && admin) router.push(redirectIfAuthenticated)
        if (middleware === 'auth:admin' && error) adminLogout()
    }, [ error , admin ])

    return {
        admin,
        adminLogin,
        adminLogout,
        add_client
    }
}