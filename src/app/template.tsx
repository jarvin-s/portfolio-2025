'use client'

import { animatePageIn } from '@/utils/animations'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    
    useEffect(() => {
        animatePageIn()
    }, [pathname])
    
    return (
        <>
            <div
                id='banner-1'
                className='fixed left-0 top-0 z-[999] min-h-screen w-1/4 bg-white'
            />
            <div
                id='banner-2'
                className='fixed left-1/4 top-0 z-[999] min-h-screen w-1/4 bg-white'
            />
            <div
                id='banner-3'
                className='fixed left-2/4 top-0 z-[999] min-h-screen w-1/4 bg-white'
            />
            <div
                id='banner-4'
                className='fixed left-3/4 top-0 z-[999] min-h-screen w-1/4 bg-white'
            />
            {children}
        </>
    )
}
