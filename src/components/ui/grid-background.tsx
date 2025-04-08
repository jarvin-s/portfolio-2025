import { cn } from '@/lib/utils'
import React from 'react'

export function DotBackgroundDemo() {
    return (
        <div className='absolute inset-0 z-0 flex h-[50rem] w-full items-center justify-center bg-black'>
            <div
                className={cn(
                    'absolute inset-0',
                    '[background-size:20px_20px]',
                    '[background-image:radial-gradient(#404040_1px,transparent_1px)]'
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className='pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black'></div>
        </div>
    )
}
