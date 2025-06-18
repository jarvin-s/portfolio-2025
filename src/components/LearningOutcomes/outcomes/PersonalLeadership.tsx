'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectLink from '../ProjectLink'

const PersonalLeadership = () => {
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
                    scrub: 0.2,
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
                            Personal Leadership
                        </h2>
                        <div ref={textRef}>
                            <p className='text-lg italic leading-relaxed md:text-xl'>
                                &quot;You take the initiative in asking for, and
                                reflecting on, feedback. You identify your own
                                core values as the basis for your study career
                                and professional development.&quot;
                            </p>
                            <h3 className='mb-4 mt-8 text-2xl font-bold'>
                                Where have I proved this learning outcome?
                            </h3>
                            <div className='space-y-6'>
                                <div className='flex flex-col gap-4'>
                                    <h4 className='text-xl font-bold uppercase'>
                                        Portfolio reflection
                                    </h4>
                                    <p className='text-lg text-gray-200'>
                                        The whole process of creating my
                                        portfolio went well. My goal was to
                                        design a portfolio with a minimalistic
                                        yet professional look. To achieve this,
                                        I focused on using clean animations and
                                        a simple color scheme. As always, I
                                        ensured the website was responsive and
                                        accessible.
                                    </p>
                                    <p className='text-lg text-gray-200'>
                                        I gathered feedback from my teachers
                                        during each version of my portfolio. For
                                        example, Bram mentioned that he liked my
                                        font choice, he thought it looked
                                        similar to Helvetica and said I found a
                                        good alternative. He also said the
                                        overall look of my portfolio gave off a
                                        movie-like impression, especially with
                                        the dark color scheme and the design of
                                        the index page.
                                    </p>
                                    <p className='text-lg text-gray-200'>
                                        My portfolio assessments were also
                                        positive. The feedback I received was
                                        usually only small points to improve on.
                                        In general my teachers were always
                                        satisfied with my portfolio progression.
                                    </p>
                                    <p className='text-lg text-gray-200'>
                                        More of this can be found by clicking
                                        the link below. Along with my personal
                                        reflections of each portfolio round.
                                    </p>
                                </div>
                                <div className='flex flex-col gap-4 md:flex-row'>
                                    <ProjectLink href='/files/feedpulse-feedback.pdf'>
                                        View Feedback
                                    </ProjectLink>
                                    <ProjectLink href='/files/personal-leadership/portfolio-rounds-reflections.pdf'>
                                        View Portfolio Rounds
                                    </ProjectLink>
                                </div>
                                <h4 className='text-xl font-bold uppercase'>
                                    Other activities
                                </h4>
                                <p className='mb-4 text-lg text-gray-200'>
                                    Between the second and third projects, I
                                    attended The Art Department event at the
                                    Klokgebouw in Eindhoven, as well as a
                                    company visit to LiveWall, organised by
                                    Salve Mundi. The LiveWall visit was
                                    particularly insightful, as it is a company
                                    I have been interested in for both
                                    internship opportunities and potential
                                    future employment.
                                </p>
                                <div className='flex flex-col gap-4 md:flex-row'>
                                    <ProjectLink href='/files/personal-leadership/the-art-department.pdf'>
                                        View The Art Department
                                    </ProjectLink>
                                    <ProjectLink href='/files/personal-leadership/livewall-visit.pdf'>
                                        View LiveWall Visit
                                    </ProjectLink>
                                </div>
                                <h4 className='text-xl font-bold uppercase'>
                                    Course switch reflection
                                </h4>
                                <p className='mb-4 text-lg text-gray-200'>
                                    During the last project of the second
                                    semester, I decided to switch from the AD
                                    program to the Bachelor&apos;s. I had
                                    started the AD course because I did not feel
                                    ready to start working after my MBO, and a
                                    four-year program felt too long after
                                    already studying for seven years. But as the
                                    semesters went on, I realized that I really
                                    enjoyed the projects and found the subjects
                                    interesting. The upcoming semesters also
                                    looked promising, and two of my teachers
                                    recommended the Bachelor&apos;s program,
                                    saying it would suit me well. In the end, I
                                    think switching was the right choice and I
                                    am happy I made that decision.
                                </p>
                                <h4 className='text-xl font-bold uppercase'>
                                    Upcoming semester choice
                                </h4>
                                <p className='mb-4 text-lg text-gray-200'>
                                    The next semester I have chosen for Frontend
                                    Development. I chose this as my first
                                    semester as this is the field I want to work
                                    in later. It is also the subject I am most
                                    motivated for to do next semester.
                                </p>
                                <h4 className='text-xl font-bold uppercase'>
                                    Personal Leadership Workshop 1
                                </h4>
                                <p className='mb-4 text-lg text-gray-200'>
                                    Guido gave a workshop on core values, where
                                    I had to reflect on my own core values and
                                    then compare them with my classmates. This
                                    helped me understand whether I give a good
                                    impression and how my values are perceived
                                    by others. Eventually, you combine 3 to 4 of
                                    your best core values.
                                </p>
                                <div className='flex flex-col gap-4 md:flex-row'>
                                    <ProjectLink href='/files/personal-leadership/personal-leadership-workshop.pdf'>
                                        View Workshop
                                    </ProjectLink>
                                </div>
                                <h4 className='text-xl font-bold uppercase'>
                                    Personal Leadership Workshop 2
                                </h4>
                                <p className='mb-4 text-lg text-gray-200'>
                                    Guido assigned us the task of identifying
                                    which Belbin team role best fits each team
                                    member, including ourselves. At the end, we
                                    presented our findings and determined which
                                    roles are missing in our team.
                                </p>
                                <div className='flex flex-col gap-4 md:flex-row'>
                                    <ProjectLink href='/files/personal-leadership/personal-leadership-workshop-2.pdf'>
                                        View Workshop
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

export default PersonalLeadership
