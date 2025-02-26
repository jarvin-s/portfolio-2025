import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header className='hidden md:block'>
            <nav className='mx-auto flex max-w-sm items-center justify-between p-4 lowercase'>
                <Link
                    href='/'
                    className='transition-all duration-150 hover:text-[#FF5959]'
                >
                    Home
                </Link>
                <Link
                    href='/projects'
                    className='transition-all duration-150 hover:text-[#FF5959]'
                >
                    Projects
                </Link>
                <Link
                    href='/learning-outcomes'
                    className='transition-all duration-150 hover:text-[#FF5959]'
                >
                    Learning outcomes
                </Link>
            </nav>
        </header>
    )
}

export default Navbar
