'use client'

import { useState } from 'react'
import TransitionLink from './TransitionLink'
import Image from 'next/image'

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
        <nav className='relative z-50 flex w-full flex-row place-items-center justify-end p-5 md:justify-center'>
            <div className='hidden gap-16 text-xl md:flex'>
                <TransitionLink href='/'>index</TransitionLink>
                <TransitionLink href='/projects'>projects</TransitionLink>
                <TransitionLink href='/learning-outcomes'>
                    outcomes
                </TransitionLink>
            </div>

            <button
                className='group z-50 flex h-10 flex-col justify-center space-y-1 duration-300 ease-in-out md:hidden'
                onClick={toggleMenu}
                aria-label='Toggle menu'
            >
                <div className='relative flex h-2 w-6 justify-end'>
                    <span
                        className={`absolute block h-[2px] w-6 bg-white/60 transition-all duration-300 ${
                            isOpen ? 'rotate-45' : ''
                        }`}
                    ></span>
                    <span
                        className={`absolute block h-[2px] bg-white/60 transition-all duration-300 ${
                            isOpen
                                ? 'w-6 -rotate-45'
                                : 'ml-auto w-4 translate-y-[6px] group-hover:w-6'
                        }`}
                    ></span>
                    <span
                        className={`absolute block h-[2px] w-6 bg-white/60 transition-all duration-300 ${
                            isOpen
                                ? 'opacity-0'
                                : '-translate-y-[6px] opacity-0'
                        }`}
                    ></span>
                </div>
            </button>

            <div
                className={`fixed inset-0 z-40 flex flex-col bg-[linear-gradient(38deg,_#000000,_#7f1d1d9c,_#7f1d1d87,_#000000),_linear-gradient(19deg,_#000000,_#000000,_#000000)] text-6xl text-white transition-transform duration-300 ease-in-out md:justify-start ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className='absolute left-5 top-5 flex items-center gap-2'>
                    <Image
                        src='/favicon.ico'
                        alt='Jarvin Siegers Logo'
                        width={50}
                        height={50}
                    />
                </div>
                <div className='mt-[7.5rem] flex w-full flex-col items-start'>
                    <div className='w-full border-b border-t border-white/40 px-4 py-4'>
                        <TransitionLink href='/' label='' onClick={toggleMenu}>
                            index
                        </TransitionLink>
                    </div>
                    <div className='w-full border-b border-white/40 px-4 py-4'>
                        <TransitionLink href='/projects' onClick={toggleMenu}>
                            projects
                        </TransitionLink>
                    </div>
                    <div className='w-full border-b border-white/40 px-4 py-4'>
                        <TransitionLink
                            href='/learning-outcomes'
                            onClick={toggleMenu}
                        >
                            outcomes
                        </TransitionLink>
                    </div>
                </div>
                <div className='absolute bottom-0 flex gap-2 p-4'>
                    <a
                        href='https://www.linkedin.com/in/jarvin-siegers'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center text-white/80 transition-colors hover:text-white'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                        >
                            <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                        </svg>
                    </a>
                    <a
                        href='https://github.com/jarvin-s'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center text-white/80 transition-colors hover:text-white'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='32'
                            height='32'
                            viewBox='0 0 24 24'
                        >
                            <path
                                d='M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z'
                                fill='currentColor'
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
