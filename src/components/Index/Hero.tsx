'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Bebas_Neue } from 'next/font/google'
const bebasNeue = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
})

const Hero = () => {
    const jarvinRef = useRef(null)
    const siegersRef = useRef(null)
    const imgRef = useRef(null)

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
    }, [])

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.fromTo(
            jarvinRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, delay: 1 }
        )

        tl.fromTo(
            siegersRef.current,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 1 },
            '-=0.5'
        )

        tl.fromTo(imgRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
    }, [])

    return (
        <>
            <div className='relative'>
                <div className='relative z-10 mt-0 flex flex-col items-center md:mt-40'>
                    <div
                        className={`relative top-[256px] z-20 text-center md:text-left`}
                    >
                        <h1
                            className={`${bebasNeue.className} text-9xl/[0.8] font-bold tracking-tighter md:text-[12rem]`}
                        >
                            <span ref={jarvinRef}>Jarvin</span>{' '}
                            <span ref={siegersRef}>Siegers</span>
                        </h1>
                    </div>

                    <Image
                        ref={imgRef}
                        src='/images/hero-oreo.jpg'
                        alt='Hero Oreo'
                        width={700}
                        height={700}
                        className='absolute -top-[20px] md:-top-[125px]'
                        priority={true}
                    />
                </div>
            </div>
        </>
    )
}

export default Hero
