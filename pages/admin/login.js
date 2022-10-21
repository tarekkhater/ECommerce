import {AuthCard, AuthSessionStatus , Button , Input , InputError , Label } from '../../components/Tools/Tools'
import GuestLayout from '../../Components/Layouts/GuestLayout';
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css';
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
                    <h3>Admin Login</h3>
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
                        <Link href="/forgot-password">
                            <a className="underline text-sm text-gray-600 hover:text-gray-900">
                                Forgot your password?
                            </a>
                        </Link>

                        <Button className="ml-3">Login</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}
