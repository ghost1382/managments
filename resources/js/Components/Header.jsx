import React from 'react';
import { usePage } from '@inertiajs/inertia-react'
import { Link } from '@inertiajs/inertia-react';

export default function() {

    const { auth } = usePage().props

    return (    
        <header className="bg-blue-300 p-4 shadow">
            <div className="flex items-center max-w-5xl mx-auto justify-end">
                <nav>
                    <ul className="flex items-center gap-4">
                        <li>
                            <Link 
                                href={route('my-courses')} 
                                className="text-gray-600 hover:text-gray-800 border-b-2 border-transparent hover:border-gray-800"
                            >
                                My Courses
                            </Link>
                        </li>
                        {auth.user && 
                            <li>
                                <form method="post" action={route('logout')}>
                                    <button 
                                        type="submit" 
                                        className="inline-flex items-center px-3 py-2 border border-blue-500 text-sm leading-4 font-medium rounded-md text-red-500 bg-white hover:bg-red-100 hover:text-white focus:outline-none transition ease-in-out duration-150"
                                    >
                                        Logout
                                    </button>
                                </form>
                            </li>
                        }
                        {!auth.user && 
                            <li>
                                <Link 
                                    href={route('login')} 
                                    className="text-gray-600 hover:text-gray-800 border-b-2 border-transparent hover:border-gray-800"
                                >
                                    Login
                                </Link>
                            </li>
                        }
                    </ul>
                </nav>
           </div>
        </header>
    )
}
