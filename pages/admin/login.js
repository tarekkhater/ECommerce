import {AuthCard, AuthSessionStatus , Button , Input , InputError , Label } from '../../components/Tools/Tools'
import GuestLayout from '../../Components/Layouts/GuestLayout';
import { useEffect, useState } from 'react'
import { AdminPanelSettings } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useAuthAdmin } from '../../Hooks/authAdmin';
export default function AdminLogin(){
    const router = useRouter()

    const { adminLogin } = useAuthAdmin({
        middleware: 'guest',
        redirectIfAuthenticated: '/admin/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    },[errors.length, router.query.reset])

    const submitForm = async (e) => {
        e.preventDefault()
        adminLogin({email, password, setErrors,shouldRemember, setStatus })
        
    }

    return (
        <GuestLayout title="Admin">
            <AuthCard>

                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />
                    <div className="w-full justify-center items-center ">
                    <button className="inline-flex  mb-2 items-center px-4 py-2 bg-red-800 border border-transparent rounded-md font-semibold text-xs  text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-900 focus:outline-none focus:border-red-900 focus:ring ring-red-300 disabled:opacity-25 transition ease-in-out duration-150">
                       <AdminPanelSettings style={{width:"20px"}}/> Admin Login</button>
                    </div>
                <form onSubmit={submitForm} method="POST">
                    {/* Email Address */}
                    <div>
                        <Label htmlFor="email">Email</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={e => setEmail(e.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.email} className="mt-2" />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <Label htmlFor="password">Password</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={e => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                        />

                        <InputError messages={errors.password} className="mt-2" />
                    </div>

                    {/* Remember Me */}
                    <div className="block mt-4">
                        <label
                            htmlFor="remember_me"
                            className="inline-flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                name="remember"
                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                onChange={e => setShouldRemember(e.target.checked)}
                            />

                            <span className="ml-2 text-sm text-gray-600">
                                Remember me
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Button className="ml-3">Login</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}
