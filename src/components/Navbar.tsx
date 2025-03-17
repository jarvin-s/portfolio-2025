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
        <nav className='flex w-full flex-row place-items-center justify-end p-5 md:justify-center'>
            <div className='hidden gap-5 text-lg md:flex'>
                <TransitionLink href='/' label='Index' />
                <TransitionLink href='/projects' label='Projects' />
                <TransitionLink
                    href='/learning-outcomes'
                    label='Learning outcomes'
                />
            </div>

            <button
                className='z-50 flex h-8 w-8 flex-col items-center justify-center space-y-1.5 md:hidden'
                onClick={toggleMenu}
                aria-label='Toggle menu'
            >
                <span
                    className={`mx-auto block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? 'translate-y-2 rotate-45 bg-black' : ''}`}
                ></span>
                <span
                    className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                ></span>
                <span
                    className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? '-translate-y-2 -rotate-45 bg-black' : ''}`}
                ></span>
            </button>

            <div
                className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white text-black transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className='flex flex-col items-center space-y-4 text-5xl'>
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
