'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TransitionLink from '../TransitionLink'
import ProjectLink from '../ProjectLink'

const IterativeDesign = () => {
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
                            Iterative Design
                        </h2>
                        <div ref={textRef}>
                            <p className='text-lg italic leading-relaxed md:text-xl'>
                                &quot;You explore and use professional design
                                tools and you iteratively design visual
                                works.&quot;
                            </p>
                            <h3 className='mb-4 mt-8 text-2xl font-bold'>
                                Where have I proved this learning outcome?
                            </h3>
                            <div className='space-y-6'>
                                <h4 className='text-xl font-bold uppercase'>
                                    Using professional design tools
                                </h4>
                                <p className='mb-4 text-lg text-gray-200'>
                                    During the semester I used industry standard
                                    design tools like Figma to design my
                                    projects. I used Figma for all my projects,
                                    from logo design to stylescapes to
                                    interactive prototypes. Using a tool like
                                    Figma in a group has also significantly
                                    improved my design skills. Alternatively, I
                                    used tools like Excalidraw to create my
                                    wireframes.
                                </p>
                                <p className='mb-4 text-lg text-gray-200'>
                                    For both projects below, I used Figma to
                                    design every product you see. From the
                                    stylescapes to the logos to the website
                                    designs and prototypes.
                                </p>
                                <div className='flex gap-4'>
                                    <TransitionLink href='/projects/branding'>
                                        View Project 1
                                    </TransitionLink>
                                    <TransitionLink href='/projects/create-that-ux'>
                                        View Project 2
                                    </TransitionLink>
                                </div>
                            </div>

                            <div className='mt-6 space-y-6'>
                                <h4 className='mb-2 text-xl font-bold uppercase'>
                                    Iteratively design visual works
                                </h4>
                                <p className='mb-4 text-lg text-gray-200'>
                                    During the project, I followed an iterative
                                    design approach to develop and refine visual
                                    elements across various deliverables. In the
                                    first project (Branding), this method was
                                    particularly valuable in the creation of
                                    logos and stylescapes. Feedback from
                                    stakeholders and peers played a key role in
                                    shaping and improving the final designs. In
                                    the second project, I used the same approach
                                    to create designs for the Cardan website.
                                </p>
                                <p className='mb-4 text-lg text-gray-200'>
                                    My portfolio design also reflects a clear
                                    progression through multiple iterations
                                    influenced by feedback. I started with basic
                                    wireframes and slowly refined the design by
                                    implementing suggestions from teachers
                                    regarding visual elements.
                                </p>
                                <div className='flex flex-col gap-4 md:flex-row'>
                                    <TransitionLink href='/projects/branding'>
                                        View Project 1
                                    </TransitionLink>
                                    <TransitionLink href='/projects/create-that-ux'>
                                        View Project 2
                                    </TransitionLink>
                                    <ProjectLink href='https://www.figma.com/design/OCiXVPDe0LuBUgKbfiqAXR/Fontys---Media-semester-2?node-id=227-491'>
                                        View Portfolio Figma
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

export default IterativeDesign
