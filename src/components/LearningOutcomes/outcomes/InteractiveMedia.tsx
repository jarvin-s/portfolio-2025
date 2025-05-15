'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TransitionLink from '../TransitionLink'

const InteractiveMedia = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const textRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        if (containerRef.current && headingRef.current && textRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 300px',
                    end: '300px top',
                    scrub: 0.6,
                },
            })

            tl.fromTo(
                headingRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                0
            ).fromTo(
                textRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                0.3
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
                className='mx-auto w-full max-w-4xl rounded-xl p-8 md:p-16'
            >
                <div className='flex flex-col items-center gap-8 md:flex-row md:gap-16'>
                    <div className='w-full'>
                        <h2
                            ref={headingRef}
                            className='mb-6 text-center text-4xl font-bold md:text-left md:text-6xl'
                        >
                            Interactive Media Products
                        </h2>
                        <div ref={textRef}>
                            <p className='text-lg leading-relaxed md:text-xl'>
                                &quot;You orient in the relevant tech, media and
                                design landscape and create interactive media
                                products that you have tested with users and
                                stakeholders.&quot;
                            </p>

                            <h3 className='mb-4 mt-8 text-2xl font-bold'>
                                Where have I proved this learning outcome?
                            </h3>

                            <div className='space-y-6'>
                                <div>
                                    <h4 className='mb-2 text-xl font-bold uppercase'>
                                        Orient in the relevant tech, media, and
                                        design landscape
                                    </h4>
                                    <p className='mb-4 text-lg text-gray-200'>
                                        Over the course of the semester I
                                        explored the newest tools, trends, and
                                        methodologies shaping the current design
                                        landscape. I almost exclusively used
                                        Figma to create all of my designs. For
                                        inspiration my go to site is, like many
                                        others, Awwwards. Along with Dribbble
                                        these are great resources for finding
                                        inspiration by looking at work done by
                                        professionals.
                                    </p>
                                    <p className='mb-4 text-lg text-gray-200'>
                                        During the first project of the
                                        semester, I conducted research on
                                        various platforms such as TikTok,
                                        Instagram, and Spotify. This research
                                        provided valuable insights that guided
                                        the creation of logos, stylescapes, and
                                        other design elements.
                                    </p>
                                    <TransitionLink href='/projects/branding'>
                                        Project 1 - Branding
                                    </TransitionLink>
                                </div>

                                <div>
                                    <h4 className='mb-2 text-xl font-bold uppercase'>
                                        Interactive Media Products
                                    </h4>
                                    <p className='text-lg'>
                                        Over the course of the semester
                                    </p>
                                </div>

                                <div>
                                    <h4 className='mb-2 text-xl font-bold uppercase'>
                                        Tested with Users and Stakeholders
                                    </h4>
                                    <p className='text-lg'>
                                        Over the course of the semester
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InteractiveMedia
