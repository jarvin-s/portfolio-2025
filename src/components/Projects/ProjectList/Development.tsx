'use client'

import ProjectLink from '@/components/LearningOutcomes/ProjectLink'
import React, { useRef, useLayoutEffect, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Development = () => {
    const imageRefs = useRef<(HTMLImageElement | null)[]>([])
    const videoRef = useRef<HTMLVideoElement>(null)

    const textSectionRefs = useRef<(HTMLDivElement | null)[]>([])

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const setInitialStates = () => {
            gsap.set('.project-overview h3', { opacity: 0, y: 60, scale: 0.9 })
            gsap.set('.project-overview p', { opacity: 0, y: 40 })
            gsap.set('.project-overview a, .project-overview div:has(a)', {
                opacity: 0,
                y: 40,
            })

            textSectionRefs.current.forEach((section) => {
                if (section) {
                    const heading = section.querySelector('h3')
                    const paragraph = section.querySelector('p')
                    const additionalContent = section.querySelectorAll(
                        '.interview-content p, .video-description'
                    )

                    gsap.set([heading, paragraph, ...additionalContent], {
                        opacity: 0,
                        y: 50,
                    })
                }
            })

            imageRefs.current.forEach((image, index) => {
                if (image) {
                    const isEven = index % 2 === 0
                    const xStart = isEven ? '-25%' : '25%'

                    gsap.set(image, {
                        x: xStart,
                        opacity: 0,
                        scale: 0.9,
                        rotationY: isEven ? 10 : -10,
                    })
                }
            })

            if (videoRef.current) {
                const videoIndex = imageRefs.current.length
                const isEven = videoIndex % 2 === 0
                const xStart = isEven ? '-25%' : '25%'

                gsap.set(videoRef.current, {
                    x: xStart,
                    opacity: 0,
                })
            }
        }
        setInitialStates()
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            const tl = gsap.timeline()
            tl.fromTo(
                '.project-overview h3',
                { opacity: 0, y: 60, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                }
            )
                .fromTo(
                    '.project-overview p',
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
                    '-=0.6'
                )
                .fromTo(
                    '.project-overview a, .project-overview div:has(a)',
                    { opacity: 0, y: 30, x: -20 },
                    {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        duration: 0.8,
                        ease: 'back.out(1.7)',
                    },
                    '-=0.4'
                )

            textSectionRefs.current.forEach((section) => {
                if (section) {
                    const heading = section.querySelector('h3')
                    const paragraph = section.querySelector('p')
                    const additionalContent = section.querySelectorAll(
                        '.interview-content p, .video-description'
                    )

                    const sectionTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 100%',
                            end: 'bottom 100%',
                            toggleActions: 'play none none reverse',
                            scrub: true,
                        },
                    })

                    sectionTl
                        .to(heading, {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            ease: 'power3.out',
                        })
                        .to(
                            paragraph,
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.8,
                                ease: 'power2.out',
                            },
                            '-=0.6'
                        )

                    if (additionalContent.length > 0) {
                        sectionTl.to(
                            additionalContent,
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.6,
                                stagger: 0.2,
                                ease: 'power2.out',
                            },
                            '-=0.4'
                        )
                    }
                }
            })

            imageRefs.current.forEach((image, index) => {
                if (image) {
                    const isEven = index % 2 === 0
                    const xStart = isEven ? '-25%' : '25%'

                    gsap.fromTo(
                        image,
                        {
                            x: xStart,
                            opacity: 0,
                            rotationY: isEven ? -10 : 10,
                        },
                        {
                            x: '0%',
                            opacity: 1,
                            rotationY: 0,
                            duration: 1.2,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: image,
                                start: 'top 80%',
                                end: 'bottom 20%',
                                toggleActions: 'play none none reverse',
                                scrub: true,
                            },
                        }
                    )
                }
            })

            if (videoRef.current) {
                const videoIndex = imageRefs.current.length
                const isEven = videoIndex % 2 === 0
                const xStart = isEven ? '-25%' : '25%'

                gsap.fromTo(
                    videoRef.current,
                    {
                        x: xStart,
                        opacity: 0,
                    },
                    {
                        x: '0%',
                        opacity: 1,
                        duration: 1.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: videoRef.current,
                            start: 'top 100%',
                            end: 'bottom 100%',
                            toggleActions: 'play none none reverse',
                            scrub: true,
                        },
                    }
                )
            }
        }, 50)

        return () => {
            clearTimeout(timer)
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    const addToRefs = (el: HTMLImageElement | null) => {
        if (el && !imageRefs.current.includes(el)) {
            imageRefs.current.push(el)
        }
    }

    // const addToTextRefs = (el: HTMLDivElement | null) => {
    //     if (el && !textSectionRefs.current.includes(el)) {
    //         textSectionRefs.current.push(el)
    //     }
    // }

    return (
        <div className='my-8 overflow-x-hidden md:overflow-visible'>
            <div className='mx-auto flex max-w-2xl flex-col justify-center px-4 md:px-0'>
                <div
                    className='project-overview max-w-sm md:max-w-2xl'
                    ref={addToRefs}
                >
                    <h3 className='mb-2 text-2xl font-semibold md:text-6xl'>
                        Project Overview
                    </h3>
                    <p className='mb-4 mt-4 text-base md:text-left md:text-lg'>
                        Together with my duo partner, I turned the designs from
                        the Create That UX project into a fully digital
                        experience.
                    </p>
                </div>
            </div>

            {/* Tools Used */}
            <div
                className='mt-20 max-w-sm px-4 md:max-w-2xl md:px-0'
                ref={addToRefs}
            >
                <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                    Tools Used
                </h3>
                <p className='mb-4 text-base md:text-lg'>
                    The framework used was Next.js, the styling was done with
                    regular CSS and animations were done with Framer Motion.
                    After discussing with my duo partner, we ended up choosing
                    for this stack. They had no experience with a framework, but
                    was eager to learn and this seemed like the perfect
                    opportunity.
                </p>
            </div>

            {/* Task Distribution */}
            <div
                className='mt-20 max-w-sm px-4 md:max-w-2xl md:px-0'
                ref={addToRefs}
            >
                <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                    Task Distribution
                </h3>
                <p className='mb-4 text-base md:text-lg'>
                    We divided the tasks in 2 halves, and I was responsible for
                    the following pages: Cognitive, Motor & Dyslexia.
                </p>
                <div className='flex gap-4'></div>
            </div>

            {/* Development Process */}
            <div
                className='mt-20 max-w-sm px-4 md:max-w-2xl md:px-0'
                ref={addToRefs}
            >
                <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                    Development Process
                </h3>
                <p className='mb-4 text-base md:text-lg'>
                    The development process went smoothly thanks to a clear plan
                    and a balanced division of tasks. With prior experience in
                    this field, I was able to guide my duo partner through the
                    development process and introduce them to the framework we
                    used. I worked with Cursor as my IDE, and we managed our
                    codebase using GitHub for version control. Throughout the
                    project, I also made use of AI models like Claude 3.5 and
                    GPT-4.0 to support the development.
                </p>
                <div className='flex flex-col gap-4 md:flex-row'>
                    <ProjectLink href='https://github.com/jarvin-s/cardan'>
                        View GitHub Repository
                    </ProjectLink>
                </div>
            </div>

            {/* User Testing */}
            <div
                className='mt-20 max-w-sm px-4 md:max-w-2xl md:px-0'
                ref={addToRefs}
            >
                <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                    User Testing
                </h3>
                <p className='mb-4 text-base md:text-lg'>
                    After a big part of the development was done, we both held
                    some user tests.
                </p>
                <div className='flex flex-col gap-4 md:flex-row'>
                    <ProjectLink href='/files/ux-report.pdf'>
                        View UX Report
                    </ProjectLink>
                </div>
            </div>

            {/* Showcase */}
            <div
                className='mt-20 max-w-sm px-4 pb-[20rem] md:max-w-2xl md:px-0'
                ref={addToRefs}
            >
                <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                    Showcase
                </h3>
                <p className='mb-4 text-base md:text-lg'>
                    A video showcasing the final product. This is the production
                    version of the website, deployed using Vercel.
                </p>
                <video
                    src='/videos/development-showcase.mp4'
                    autoPlay
                    loop
                    muted
                    ref={videoRef}
                />
                <div className='mt-4 flex flex-col gap-4 md:flex-row'>
                    <ProjectLink href='https://cardan-groep-1.vercel.app/'>
                        View Website
                    </ProjectLink>
                </div>
            </div>
        </div>
    )
}

export default Development
