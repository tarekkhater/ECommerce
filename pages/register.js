import {AuthCard , AuthSessionStatus , Button , Input , InputError , Label } from '../components/Tools/Tools'
import GuestLayout from '../components/Layouts/GuestLayout'
import Link from 'next/link'
import { useAuth } from '../Hooks/auth'
import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
export default function Register() {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/',
    })
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])
    const router = useRouter();
    
    const submitForm = async event => {
        event.preventDefault()
        register({ name, email, password, password_confirmation, setErrors })
    }

    return (
        <>
            <Head>
                <title>Amazon — Register</title>
            </Head>

            <div className={"w-full mx-auto bg-white mt-12 p-5 rounded-lg sm:w-1/2 "}>
                <InputError className="mb-5" errors={errors} />

                <form onSubmit={submitForm} method="POST">
                    <div>
                        <Label htmlFor="email">Name</Label>

                        <Input
                            id="name"
                            type="text"
                            value={name}
                            className="block mt-1 w-full"
                            onChange={event => setName(event.target.value)}
                            required
                            autoFocus
                            autoComplete="off"
                        />
                        <InputError messages={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="email">Email</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                        />
                        <InputError messages={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="password">Password</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword(event.target.value)}
                            required
                        />
                        <InputError messages={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="password">Confirm Password</Label>

                        <Input
                            id="password_confirmation"
                            type="password"
                            value={password_confirmation}
                            className="block mt-1 w-full"
                            onChange={event => setPasswordConfirmation(event.target.value)}
                            required
                        />
                        <InputError messages={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link href="/login">
                            <a className="underline text-sm text-gray-600 hover:text-gray-900">
                                Already registered?
                            </a>
                        </Link>

                        <Button className="ml-3">Register</Button>
                    </div>
                </form>
            </div>
        </>
    )
}