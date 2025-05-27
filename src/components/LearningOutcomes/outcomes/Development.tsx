'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectLink from '../ProjectLink'

const Development = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const textRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        if (containerRef.current && headingRef.current && textRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 400px',
                    end: '400px top',
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
                            Development & Version Control
                        </h2>
                        <div ref={textRef}>
                            <p className='text-lg italic leading-relaxed md:text-xl'>
                                &quot;You explore front-end development
                                languages, you write code and document in a
                                version control environment.&quot;
                            </p>
                            <h3 className='mb-4 mt-8 text-2xl font-bold'>
                                Where have I proved this learning outcome?
                            </h3>
                            <div className='space-y-6'>
                                <h4 className='mb-2 text-xl font-bold uppercase'>
                                    Version Control
                                </h4>
                                <p className='mb-4 text-lg text-gray-200'>
                                    During the Development project, I utilized
                                    GitHub to manage our codebase and
                                    collaborate effectively with my project
                                    partner.
                                </p>
                                <p className='mb-4 text-lg text-gray-200'>
                                    Moreover, I&apos;ve used Git for numerous
                                    personal projects, which helped with
                                    hosting, tracking previous versions, and
                                    showcasing my work.
                                </p>
                                <div className='flex gap-4'>
                                    <ProjectLink href='https://github.com/jarvin-s'>
                                        View GitHub Profile
                                    </ProjectLink>
                                </div>
                                <h4 className='mb-2 text-xl font-bold uppercase'>
                                    Development
                                </h4>
                                <p className='mb-4 text-lg text-gray-200'>
                                    Since starting my journey at Fontys,
                                    I&apos;ve showcased the advanced ability to
                                    develop interactive and accessible products,
                                    using frameworks such as Next.js and
                                    TailwindCSS.
                                </p>
                                <p className='mb-4 text-lg text-gray-200'>
                                    During the Development project, my duo
                                    partner and I created a website highlighting
                                    the importance of digital accessibility.
                                    Built with Next.js, TypeScript, and Framer
                                    Motion, the site featured five simulations
                                    representing various impairments, along with
                                    internationalization and animations. It was
                                    responsive and deployed using Vercel.
                                </p>
                                <p className='mb-4 text-lg text-gray-200'>
                                    Lastly, as part of the Development course, I
                                    completed several exercises to practice
                                    HTML, CSS, and JavaScript. To organize and
                                    present these, I built a small website that
                                    showcases all the exercises in one place.
                                </p>
                                <div className='flex flex-col gap-4 md:flex-row'>
                                    <ProjectLink href='https://cardan-groep-1.vercel.app/'>
                                        View Development Project
                                    </ProjectLink>
                                    <ProjectLink href='https://i558462.hera.fontysict.net/'>
                                        View Exercises
                                    </ProjectLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Development
