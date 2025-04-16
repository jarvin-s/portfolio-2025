'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Development = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const textRef = useRef<HTMLParagraphElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        if (
            containerRef.current &&
            headingRef.current &&
            textRef.current &&
            imageRef.current
        ) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.6,
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
        <div className='flex items-center justify-center'>
            <div
                ref={containerRef}
                className='mx-auto w-full max-w-6xl rounded-xl p-8 md:p-16'
            >
                <div className='flex flex-col items-center gap-8 md:flex-row md:gap-16'>
                    <div
                        ref={imageRef}
                        className='flex aspect-square w-full items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-stone-900 md:w-1/2'
                    >
                        <div className='text-9xl font-bold text-white'>
                            &lt;/&gt;
                        </div>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <h2
                            ref={headingRef}
                            className='mb-6 text-center text-4xl font-bold md:text-left md:text-6xl'
                        >
                            Development & Version Control
                        </h2>
                        <p
                            ref={textRef}
                            className='text-lg leading-relaxed md:text-xl'
                        >
                            &quot;You explore front-end development languages,
                            you write code and document in a version control
                            environment.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Development
