'use client'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

export const BackgroundGradientAnimation = ({
    gradientBackgroundStart = 'rgb(0, 0, 0)',
    gradientBackgroundEnd = 'rgb(0, 0, 0)',
    firstColor = '255, 123, 0',
    secondColor = '255, 0, 0',
    thirdColor = '255, 0, 0',
    fourthColor = '255, 0, 0',
    fifthColor = '255, 0, 0',
    size = '40%',
    blendingValue = 'hard-light',
    children,
    className,
    containerClassName,
}: {
    gradientBackgroundStart?: string
    gradientBackgroundEnd?: string
    firstColor?: string
    secondColor?: string
    thirdColor?: string
    fourthColor?: string
    fifthColor?: string
    size?: string
    blendingValue?: string
    children?: React.ReactNode
    className?: string
    containerClassName?: string
}) => {
    useEffect(() => {
        document.body.style.setProperty(
            '--gradient-background-start',
            gradientBackgroundStart
        )
        document.body.style.setProperty(
            '--gradient-background-end',
            gradientBackgroundEnd
        )
        document.body.style.setProperty('--first-color', firstColor)
        document.body.style.setProperty('--second-color', secondColor)
        document.body.style.setProperty('--third-color', thirdColor)
        document.body.style.setProperty('--fourth-color', fourthColor)
        document.body.style.setProperty('--fifth-color', fifthColor)
        document.body.style.setProperty('--size', size)
        document.body.style.setProperty('--blending-value', blendingValue)
    }, [])

    const [isSafari, setIsSafari] = useState(false)
    useEffect(() => {
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
    }, [])

    return (
        <div
            className={cn(
                'relative left-0 top-0 h-screen w-full overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]',
                containerClassName
            )}
        >
            <svg className='hidden'>
                <defs>
                    <filter id='blurMe'>
                        <feGaussianBlur
                            in='SourceGraphic'
                            stdDeviation='10'
                            result='blur'
                        />
                        <feColorMatrix
                            in='blur'
                            mode='matrix'
                            values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
                            result='goo'
                        />
                        <feBlend in='SourceGraphic' in2='goo' />
                    </filter>
                </defs>
            </svg>
            <div className={cn('', className)}>{children}</div>
            <div
                className={cn(
                    'gradients-container h-full w-full blur-lg',
                    isSafari ? 'blur-2xl' : '[filter:url(#blurMe)_blur(40px)]'
                )}
            >
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
                        `left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
                        `[transform-origin:calc(50%-400px)]`,
                        `animate-second`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
                        `left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
                        `[transform-origin:calc(50%+300px)]`,
                        `animate-first`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
                        `left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
                        `[transform-origin:calc(50%-200px)]`,
                        `animate-fourth`
                    )}
                ></div>
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
                        `left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
                        `[transform-origin:calc(50%+100px)]`,
                        `animate-fifth `
                    )}
                ></div>
            </div>

            <div className='pointer-events-none absolute inset-x-0 top-0 z-20 h-36 bg-gradient-to-b from-black to-transparent' />
            <div className='pointer-events-none absolute inset-x-0 bottom-0 z-20 h-36 bg-gradient-to-t from-black to-transparent' />
        </div>
    )
}
