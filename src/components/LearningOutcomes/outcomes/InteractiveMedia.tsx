'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TransitionLink from '../TransitionLink'
import ProjectLink from '../ProjectLink'

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
                    start: 'top 90%',
                    end: 'bottom 90%',
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
                            className='mb-6 text-center text-4xl font-bold md:text-left md:text-5xl'
                        >
                            Interactive Media Products
                        </h2>
                        <div ref={textRef}>
                            <p className='text-lg italic leading-relaxed md:text-xl'>
                                &quot;You orient in the relevant tech, media and
                                design landscape and create interactive media
                                products that you have tested with users and
                                stakeholders.&quot;
                            </p>

                            <h3 className='mb-4 mt-8 text-2xl font-bold'>
                                Where have I proved this learning outcome?
                            </h3>

                            <div className='space-y-6'>
                                <h4 className='text-xl font-bold uppercase'>
                                    Orient in the relevant tech, media, and
                                    design landscape
                                </h4>
                                <p className='mb-4 text-lg text-gray-200'>
                                    Over the course of the semester I explored
                                    the newest tools, trends, and methodologies
                                    shaping the current design landscape. I
                                    almost exclusively used Figma to create all
                                    of my designs. For inspiration my go to site
                                    is, like many others, Awwwards. Along with
                                    Dribbble these are great resources for
                                    finding inspiration by looking at work done
                                    by professionals.
                                </p>
                                <p className='mb-4 text-lg text-gray-200'>
                                    During the first project of the semester, I
                                    conducted research on various platforms such
                                    as TikTok, Instagram, and Spotify. This
                                    research provided valuable insights that
                                    guided the creation of logos, stylescapes,
                                    and other design elements.
                                </p>
                                <TransitionLink href='/projects/branding'>
                                    View Project 1
                                </TransitionLink>
                                <h4 className='mb-2 text-xl font-bold uppercase'>
                                    Interactive Media Products
                                </h4>
                                <p className='mb-4 text-lg text-gray-200'>
                                    Both the Create-that-UX and Development
                                    project from the same client are a perfect
                                    example of my ability to create interactive
                                    media products. During the UX project I
                                    created a clickable, interactive prototype
                                    in Figma.
                                </p>
                                <p className='mb-4 text-lg text-gray-200'>
                                    Similarly, during the Development project, I
                                    created multiple prototypes using Next.js.
                                    Each prototype showcased a unique feature,
                                    with every page simulating a different type
                                    of impairment. All simulations were
                                    thoughtfully designed and developed to give
                                    users an authentic understanding of what
                                    it&apos;s like to live with a disability.
                                </p>
                                <div className='flex flex-col gap-4 md:flex-row'>
                                    <ProjectLink href='https://www.figma.com/proto/HOaKHvzGYPiUdqkCOMPzHC/Project-UX?page-id=35%3A3&node-id=46-41&p=f&viewport=1913%2C-601%2C0.06&t=Vcd38LeDdoipriPB-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=46%3A41'>
                                        View Figma Prototype
                                    </ProjectLink>
                                    <ProjectLink href='https://cardan-groep-1.vercel.app/'>
                                        View Development Prototype
                                    </ProjectLink>
                                </div>
                                <h4 className='mb-2 text-xl font-bold uppercase'>
                                    Tested with Users and Stakeholders
                                </h4>
                                <p className='text-lg'>
                                    Testing was an essential part of the process
                                    in all my projects. For each one, I ran user
                                    tests and used the feedback to improve my
                                    work by creating updated versions of the
                                    prototypes, thus creating an iterative
                                    design process. The results of these tests
                                    are documented on the individual project
                                    pages.
                                </p>
                                <div className='flex flex-col gap-4 md:flex-row'>
                                    <TransitionLink href='/projects/branding'>
                                        View Project 1
                                    </TransitionLink>
                                    <TransitionLink href='/projects/create-that-ux'>
                                        View Project 2
                                    </TransitionLink>
                                    <TransitionLink href='/projects/development'>
                                        View Project 3
                                    </TransitionLink>
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
