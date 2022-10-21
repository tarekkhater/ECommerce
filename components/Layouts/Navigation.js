import { ApplicationLogo ,  NavLink , ResponsiveNavLink } from '../Tools/Tools'
import styles from "../../styles/Dashboard/Users.module.css";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'
const Navigation = ({ user }) => {
    const router = useRouter()
    const dark = useSelector(state => state.items.users)
    const [open, setOpen] = useState(false)

    return (
        <div id={dark? styles.darkss: styles.light}>
            <nav className="bg-white border-b border-gray-100" id={dark? styles.darks: styles.light}>
            {/* Primary Navigation Menu */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id={dark? styles.darks: styles.light}>
                <div className="flex justify-between h-16">
                    <div className="flex" id={dark? styles.darks: styles.light}>
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center" id={dark? styles.darks: styles.light}>
                            <Link href="/dashboard">
                                <a>
                                    <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
                                </a>
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex" >
                            <NavLink
                                href="/dashboard"
                                active={router.pathname === '/dashboard'}>
                                Dashboard
                            </NavLink>
                        </div>
                    </div>

                    {/* Settings Dropdown */}
                    <div className="hidden sm:flex sm:items-center sm:ml-6">
                       
                                <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                                    <div>admin( {user?.name} )</div>
                                </button>
                           
                    </div>

                    {/* Hamburger */}
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setOpen(open => !open)}
                            className="inline-flex items-center justify-center  p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24">
                                {open ? (
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive Navigation Menu */}
            {open && (
                <div className="block sm:hidden" id={dark? styles.darks: styles.light}>
                    <div className="pt-2 pb-3 space-y-1" id={dark? styles.darks: styles.light}>
                        <ResponsiveNavLink
                            href="/dashboard"
                            active={router.pathname === '/dashboard'}>
                            Dashboard
                        </ResponsiveNavLink>
                    </div>

                    {/* Responsive Settings Options */}
                    <div className="pt-4 pb-1 border-t border-gray-200" id={dark? styles.darks: styles.light}>
                        <div className="flex items-center px-4" id={dark? styles.darks: styles.light}>
                            <div className="flex-shrink-0" id={dark? styles.darks: styles.light}>
                                <svg
                                    className="h-10 w-10 fill-current text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>

                            <div className="ml-3">
                                <div className="font-medium text-base text-gray-800">
                                    {user?.name}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {user?.email}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav><br/>
        </div>
    )
}

export default Navigation
