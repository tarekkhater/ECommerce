import styles from "../../styles/Dashboard/AddClient.module.css"
import React from 'react'
import { useState } from 'react'
import { useAuthAdmin } from '../../Hooks/authAdmin';

export default function AddClient() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [shop_name, setShop_name] = useState('')
    const [errors, setErrors] = useState([])
    const {add_client} = useAuthAdmin({middleware:"auth:admin"})

        const submitForm = async (e) => {
        e.preventDefault()
        add_client({name, email, password ,phone, address , shop_name , setErrors  })
    }
  return (
    <div className={styles.container}> 
    <div className={" bg-white p-2 rounded-lg"} >
    <label className="block font-medium text-sm text-gray-700" ><h4>Add client</h4></label>
    <div className="mb-5 " >
    {errors.length > 0 && (
            <>
                {errors.map((error, index) => (
                    <p
                        className='text-sm text-red-600'
                        key={index}>
                        {error}
                    </p>
                ))}
            </>
        )}
    </div>
    <form onSubmit={submitForm} method="POST" className={styles.form}>
        <div>
            <label className="block font-medium text-sm text-gray-700" htmlFor="email">Name</label>
            <input
                id="name"
                type="text"
                value={name}
                className="block mt-1 w-full rounded-md shadow-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={event => setName(event.target.value)}
                required
                autoFocus
                autoComplete="off"
            />
        </div>

        <div className="mt-4">
            <label className="block font-medium text-sm text-gray-700" htmlFor="email">Email</label>

            <input
                id="email"
                type="email"
                value={email}
                className="block mt-1 w-full rounded-md shadow-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={event => setEmail(event.target.value)}
                required
            />
        </div>

        <div className="mt-4">
            <label className="block font-medium text-sm text-gray-700" htmlFor="password">Password</label>

            <input
                id="password"
                type="password"
                value={password}
                className="block mt-1 w-full rounded-md shadow-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={event => setPassword(event.target.value)}
                required
            />  
        </div>

        <div className="mt-4">
            <label className="block font-medium text-sm text-gray-700" htmlFor="password">Address</label>

            <input
                id="address"
                type="text"
                value={address}
                className="block mt-1 w-full rounded-md shadow-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={event => setAddress(event.target.value)}
                required
            />
        </div>
        <div className="mt-4">
            <label className="block font-medium text-sm text-gray-700" htmlFor="password">Shop name</label>

            <input
                id="shop_name"
                type="text"
                value={shop_name}
                className="block mt-1 w-full rounded-md shadow-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={event => setShop_name(event.target.value)}
                required
            />
        </div>
        <div className="mt-4">
            <label className="block font-medium text-sm text-gray-700" htmlFor="password">Phone</label>

            <input
                id="phone"
                type="number"
                value={phone}
                className="block mt-1 w-full rounded-md shadow-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={event => setPhone(event.target.value)}
                required
            />
        </div>

        <div className="flex items-center justify-end mt-4">

        <button className="ml-3 block  pl-3 pr-4 py-2 border-l-4 text-right text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300">Register</button>
        </div>
    </form>
</div>
</div>
  )
}
