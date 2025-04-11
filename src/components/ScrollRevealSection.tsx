'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ScrollRevealSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const textRef = useRef<HTMLParagraphElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        if (
            sectionRef.current &&
            containerRef.current &&
            headingRef.current &&
            textRef.current &&
            imageRef.current
        ) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.6,
                    markers: false,
                },
            })

            tl.fromTo(
                headingRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                0
            )
                .fromTo(
                    textRef.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    0.3
                )
                .fromTo(
                    imageRef.current,
                    { y: 200, opacity: 0, scale: 0.8 },
                    { y: 0, opacity: 1, scale: 1, duration: 1.5 },
                    0.2
                )

            return () => {
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
            }
        }
    }, [])

    return (
        <div
            ref={sectionRef}
            className='flex items-center justify-center py-20'
        >
            <div
                ref={containerRef}
                className='mx-auto w-full max-w-6xl rounded-xl p-8 transition-all duration-300 md:p-16'
            >
                <div className='flex flex-col items-center gap-8 md:flex-row md:gap-16'>
                    <div className='w-full md:w-1/2'>
                        <h2
                            ref={headingRef}
                            className='mb-6 text-center text-4xl font-bold md:text-left md:text-6xl'
                        >
                            Interactive Media Products
                        </h2>
                        <p
                            ref={textRef}
                            className='text-lg leading-relaxed md:text-xl'
                        >
                            &quot;You orient in the relevant tech, media and
                            design landscape and create interactive media
                            products that you have tested with users and
                            stakeholders.&quot;
                        </p>
                    </div>
                    <div
                        ref={imageRef}
                        className='flex aspect-square w-full items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-purple-700 shadow-2xl md:w-1/2'
                    >
                        <div className='text-9xl font-bold text-white'>→</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScrollRevealSection
