'use client'

import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
        if (!isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }

    return (
        <div className='relative'>
            <nav className='fixed left-0 right-0 top-0 z-50 flex items-center justify-end bg-white px-6 py-4 lowercase md:justify-center'>
                <div className='hidden space-x-8 md:flex md:justify-center'>
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
                </div>

                <button
                    className='z-50 flex h-8 w-8 flex-col items-center justify-center space-y-1.5 focus:outline-none md:hidden'
                    onClick={toggleMenu}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                >
                    <span
                        className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-in-out ${
                            isOpen ? 'translate-y-2 rotate-45' : ''
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-in-out ${
                            isOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-in-out ${
                            isOpen ? '-translate-y-2 -rotate-45' : ''
                        }`}
                    />
                </button>
            </nav>

            <div
                className={`fixed inset-x-0 bottom-0 top-[64px] z-40 transform bg-white lowercase transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-y-0' : '-translate-y-full'
                } md:hidden`}
            >
                <div className='flex h-full flex-col items-center justify-center space-y-8 text-xl'>
                    <Link
                        href='/'
                        className='w-full py-4 text-center transition-all duration-150 hover:text-[#FF5959]'
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                    <Link
                        href='/projects'
                        className='w-full py-4 text-center transition-all duration-150 hover:text-[#FF5959]'
                        onClick={toggleMenu}
                    >
                        Projects
                    </Link>
                    <Link
                        href='/learning-outcomes'
                        className='w-full py-4 text-center transition-all duration-150 hover:text-[#FF5959]'
                        onClick={toggleMenu}
                    >
                        Learning outcomes
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
