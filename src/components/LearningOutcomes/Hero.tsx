'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = () => {
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const imgRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 1 }
        )

        tl.fromTo(
            subtitleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 },
            '-=0.5'
        )

        tl.fromTo(
            imgRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1 },
            '-=0.3'
        )
    }, [])

    return (
        <div className='relative'>
            <div className='mb-8 text-center'>
                <h1
                    ref={titleRef}
                    className={`text-6xl font-bold lowercase md:text-7xl`}
                >
                    Learning Outcomes
                </h1>
                <p
                    ref={subtitleRef}
                    className='mx-auto mt-4 max-w-2xl text-xl text-gray-400'
                >
                    Showcasing the skills and knowledge acquired throughout my
                    educational journey
                </p>
            </div>
            <div className='relative w-full max-w-3xl'>
                <Image
                    ref={imgRef}
                    src='/images/learning-outcomes.jpg'
                    alt='Learning Outcomes'
                    width={1200}
                    height={600}
                    className='rounded-lg shadow-lg'
                    priority={true}
                />
            </div>
        </div>
    )
}

export default Hero
