'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TransitionLink from '../TransitionLink'

const ProfessionalStandard = () => {
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
        <div className='flex items-center justify-center pb-[30rem]'>
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
                            Professional Standard
                        </h2>
                        <div ref={textRef}>
                            <p className='text-lg italic leading-relaxed md:text-xl'>
                                &quot;You apply professional practice, both
                                individually and in teams, in the areas of
                                communicating, collaboration, problem-solving
                                ability, learning ability and methodical
                                acting.&quot;
                            </p>
                            <h3 className='mb-4 mt-8 text-2xl font-bold'>
                                Where have I proved this learning outcome?
                            </h3>
                            <div className='space-y-6'>
                                <h4 className='text-xl font-bold uppercase'>
                                    Communication and collaboration
                                </h4>
                                <p className='mb-4 text-lg text-gray-200'>
                                    Throughout all the projects, I collaborated
                                    closely with my team and maintained clear
                                    communication with team members. Each
                                    project involved different methods of
                                    communication. For instance, in the Branding
                                    Project, we primarily used WhatsApp and
                                    Discord, alongside Figma for design
                                    collaboration. Similarly, during the Create
                                    That UX project, we continued using Discord
                                    and Figma. The entire team worked within a
                                    shared Figma project, allowing us to design
                                    together in real time. During the
                                    Development project, the collaboration was
                                    very different from before. We used GitHub
                                    to manage our codebase and collaborated
                                    effectively with my project partner.
                                </p>
                                <p className='mb-4 text-lg text-gray-200'>
                                    Across all 3 projects, communication with
                                    the stakeholder played a key role. In the
                                    Branding Project, most meetings were held
                                    online, with the final presentation taking
                                    place in person. During the last two
                                    projects, the stakeholder was mostly present
                                    at our school, offering ongoing feedback and
                                    support throughout the process.
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
                                <h4 className='text-xl font-bold uppercase'>
                                    Problem-solving and learning ability
                                </h4>
                                <p className='mb-4 text-lg text-gray-200'>
                                    Problem solving was a key aspect of the
                                    Development Project. When writing code, you
                                    are constantly problem solving, thinking of
                                    what the best way is to implement something,
                                    and inevitably fixing the errors that come
                                    along with it.
                                </p>
                                <div className='flex flex-col gap-4 md:flex-row'>
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

export default ProfessionalStandard
