'use client'

import { League_Gothic } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
// import { Meteors } from './ui/meteor-effect'
import gsap from 'gsap'

const leagueGothic = League_Gothic({
    subsets: ['latin'],
    weight: ['400'],
})

const Hero = () => {
    const jarvinRef = useRef(null)
    const siegersRef = useRef(null)
    const imgRef = useRef(null)
    const [isLoaded, setIsLoaded] = React.useState(false)

    useEffect(() => {
        if (jarvinRef.current) {
            gsap.set(jarvinRef.current, { opacity: 0, y: 50 })
        }
        if (siegersRef.current) {
            gsap.set(siegersRef.current, { opacity: 0, x: -30 })
        }
        if (imgRef.current) {
            gsap.set(imgRef.current, { opacity: 0 })
        }

        setIsLoaded(true)
    }, [])

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.fromTo(
            jarvinRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5 }
        )

        tl.fromTo(
            siegersRef.current,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 1 },
            '-=0.5'
        )

        tl.fromTo(
            imgRef.current,
            { opacity: 0 },
            { opacity: 0.8, duration: 1.5 }
        )
    }, [])

    return (
        <>
            {/* <Meteors /> */}
            <div className='relative'>
                <div className='mt-20 flex flex-col items-center'>
                    <div
                        className={`relative mt-24 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <h1
                            className={`${leagueGothic.className} text-9xl font-bold md:text-[16rem]`}
                        >
                            <span ref={jarvinRef}>JARVIN</span>{' '}
                            <span
                                ref={siegersRef}
                                className='absolute left-[33.6px] top-[95px] md:left-[67.5px] md:top-[190px]'
                            >
                                SIEGERS
                            </span>
                        </h1>
                    </div>

                    <Image
                        ref={imgRef}
                        src='/images/hero-oreo.jpg'
                        alt='Jarvin'
                        width={750}
                        height={500}
                        className={`absolute right-0 z-[-1] hidden object-cover blur-sm md:block ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>
            </div>
        </>
    )
}

export default Hero
