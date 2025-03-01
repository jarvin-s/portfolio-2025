'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

export const Meteors = ({
    number = 20,
    className,
}: {
    number?: number
    className?: string
}) => {
    const [meteors, setMeteors] = useState<
        Array<{
            id: number
            size: number
            top: number
            left: number
            delay: number
        }>
    >([])

    useEffect(() => {
        const newMeteors = [...Array(number)].map((_, i) => ({
            id: i,
            size: Math.floor(Math.random() * 30) + 1,
            top: Math.floor(Math.random() * 100),
            left: Math.floor(Math.random() * 100),
            delay: Math.floor(Math.random() * 10),
        }))
        setMeteors(newMeteors)
    }, [number])

    return (
        <div
            className={cn(
                'pointer-events-none absolute inset-0 overflow-hidden',
                className
            )}
        >
            {meteors.map((meteor) => (
                <span
                    key={meteor.id}
                    className='absolute left-1/4 top-1/4 h-0.5 w-0.5 rotate-[215deg] animate-meteor-effect rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]'
                    style={{
                        top: `${meteor.top}%`,
                        left: `${meteor.left}%`,
                        width: `${meteor.size}px`,
                        height: `${meteor.size / 10}px`,
                        animationDelay: `${meteor.delay}s`,
                        animationDuration: `${Math.floor(Math.random() * 10) + 2}s`,
                    }}
                >
                    <div className='absolute left-0 top-1/2 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent' />
                </span>
            ))}
        </div>
    )
}
