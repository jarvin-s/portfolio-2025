'use client'

import ProjectLink from '@/components/LearningOutcomes/ProjectLink'
import Image from 'next/image'
import React, { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const CreateThatUX = () => {
    const imageRefs = useRef<(HTMLImageElement | null)[]>([])
    const textSectionRefs = useRef<(HTMLDivElement | null)[]>([])
    const showcaseImageRef = useRef<HTMLImageElement | null>(null)

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
                        rotationY: isEven ? 10 : -10,
                    })
                }
            })
        }

        const initializeAnimations = () => {
            setInitialStates()

            const showcaseImage = document.querySelector('.showcase-image') as HTMLImageElement
            if (showcaseImage) {
                showcaseImageRef.current = showcaseImage
                if (showcaseImage.complete) {
                    startAnimations()
                } else {
                    showcaseImage.addEventListener('load', startAnimations)
                }
            } else {
                startAnimations()
            }
        }

        const startAnimations = () => {
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
                            end: '100% bottom',
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
                                end: 'bottom 60%',
                                toggleActions: 'play none none reverse',
                                scrub: true,
                            },
                        }
                    )
                }
            })
        }

        const timer = setTimeout(initializeAnimations, 50)

        return () => {
            clearTimeout(timer)
            if (showcaseImageRef.current) {
                showcaseImageRef.current.removeEventListener('load', startAnimations)
            }
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    const addToRefs = (el: HTMLImageElement | null) => {
        if (el && !imageRefs.current.includes(el)) {
            imageRefs.current.push(el)
        }
    }

    const addToTextRefs = (el: HTMLDivElement | null) => {
        if (el && !textSectionRefs.current.includes(el)) {
            textSectionRefs.current.push(el)
        }
    }

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
                    <p className='mt-4 text-base md:text-left md:text-lg'>
                        I created a UX for a company called Cardan. Cardan
                        promotes digital accessibility through five physical
                        stations that show how people with disabilities
                        experience websites. Our task is to turn these into a
                        digital, interactive UX experience.
                    </p>
                </div>
            </div>

            <div className='mt-20 flex flex-col items-center gap-10 md:gap-20'>
                <div
                    className='max-w-sm px-4 md:max-w-2xl md:px-0'
                    ref={addToRefs}
                >
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        The Client
                    </h3>
                    <p className='text-base md:text-lg'>
                        The company is called Cardan, but our stakeholder was
                        Carolina van Setten. She is the Brand Manager and a WCAG
                        specialist at Cardan. She organizes on-site training
                        sessions for companies and also attends them herself.
                    </p>
                </div>

                {/* Research */}
                <div
                    className='max-w-sm px-4 md:max-w-2xl md:px-0'
                    ref={addToRefs}
                >
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Research
                    </h3>
                    <p className='text-base md:text-lg'>
                        I started our project by doing research on digital
                        accessibility. The goal was to find best way to
                        digitally simulate the physical stations. Eventually, we
                        divided the five stations among our group of five
                        people, so each member had their own station to design.
                    </p>
                </div>

                {/* Design */}
                <div
                    className='max-w-sm px-4 md:max-w-2xl md:px-0'
                    ref={addToRefs}
                >
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Design
                    </h3>
                    <p className='text-base md:text-lg'>
                        I designed the cognitive impairment station, focusing on
                        ADHD specifically. The goal of this station was to
                        simulate the experience of someone with ADHD, using
                        pop-up notifications to distract the user while writing
                        an email. I created multiple versions of this station,
                        all of which are shown below in order (left to right,
                        top to bottom). The images are arranged in two rows,
                        progressing from version 1 to version 6.
                    </p>
                    <Image
                        src='/images/projects/create-that-ux/cognitive-station-design-1.jpg'
                        alt='ADHD Station 1'
                        width={1920}
                        height={1080}
                        className='mt-4'
                        ref={addToRefs}
                    />
                    <Image
                        src='/images/projects/create-that-ux/cognitive-station-design-2.jpg'
                        alt='ADHD Station 2'
                        width={1920}
                        height={1080}
                        className='mt-4'
                        ref={addToRefs}
                    />
                </div>

                {/* Prototype */}
                <div
                    className='max-w-sm px-4 pb-[20rem] md:max-w-2xl md:px-0'
                    ref={addToTextRefs}
                >
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Prototype
                    </h3>
                    <p className='mb-4 text-base md:text-lg'>
                        I, along with my group, created an interactive prototype
                        of the designs, using Figma.
                    </p>
                    <div className='flex gap-4' ref={addToRefs}>
                        <ProjectLink href='https://www.figma.com/proto/HOaKHvzGYPiUdqkCOMPzHC/Project-UX?page-id=35%3A3&node-id=46-41&p=f&viewport=1913%2C-601%2C0.06&t=Vcd38LeDdoipriPB-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=46%3A41'>
                            View Figma Prototype
                        </ProjectLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateThatUX
