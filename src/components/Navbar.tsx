'use client'

import { useState } from 'react'
import TransitionLink from './TransitionLink'

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
        <nav className='relative flex w-full flex-row place-items-center justify-end p-5 md:justify-center z-50'>
            <div className='hidden gap-10 text-lg md:flex'>
                <TransitionLink href='/' label='Index' />
                <TransitionLink href='/projects' label='Projects' />
                <TransitionLink
                    href='/learning-outcomes'
                    label='Learning outcomes'
                />
            </div>

            <button
                className='z-50 flex h-10 w-10 flex-col items-center justify-center space-y-1.5 rounded-lg duration-300 ease-in-out hover:bg-gray-200/20 md:hidden border-2 border-gray-400/40'
                onClick={toggleMenu}
                aria-label='Toggle menu'
            >
                <span
                    className={`block h-[1px] w-6 transition-transform duration-300 ${
                        isOpen ? 'translate-y-2 rotate-45 bg-white/60' : 'bg-white/60'
                    }`}
                ></span>
                <span
                    className={`block h-[1px] w-6 transition-opacity duration-300 ${
                        isOpen ? 'bg-white/60 opacity-0' : 'bg-white/60 opacity-100'
                    }`}
                ></span>
                <span
                    className={`block h-[1px] w-6 transition-transform duration-300 ${
                        isOpen
                            ? '-translate-y-2 -rotate-45 bg-white/60'
                            : 'bg-white/60'
                    }`}
                ></span>
            </button>

            <div
                className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-black text-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className='flex flex-col items-center space-y-4 text-4xl'>
                    <TransitionLink
                        href='/'
                        label='Index'
                        onClick={toggleMenu}
                    />
                    <TransitionLink
                        href='/projects'
                        label='Projects'
                        onClick={toggleMenu}
                    />
                    <TransitionLink
                        href='/learning-outcomes'
                        label='Learning outcomes'
                        onClick={toggleMenu}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
