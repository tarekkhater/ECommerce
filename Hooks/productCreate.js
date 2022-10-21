import useSWR from 'swr'
import axioss from '../lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useAuthProduct = ({middleware , redirectIfAuthenticated }) => {
    const router = useRouter()
    const { data: user, error, mutate} = useSWR('/api/user', () =>
    axioss.get('/api/user').then(res => res.data)
)

    const csrf = () => axioss.get('/sanctum/csrf-cookie')
    const create = async ({ ...props }) => {
        await csrf()
        axioss
            .post('/createProduct', props)
    }

    const updateViews = async (id) => {
        await csrf()
        axioss
            .get(`updateViews/${id}`)
    }

    const addOrder = async ({...props }) => {
        await csrf()
        
        axioss
            .post('/addOrder', props)
           
    }
    

    const deleteOrder = async (id) => {
        await csrf()
        axioss
            .get(`/order/${id}`)
           
    }

   


    useEffect(() => {
        if (middleware === 'auth' && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated)
    }, [user , error])

    return {
        create,
        user,
        addOrder,
        deleteOrder,
        updateViews
    }
}