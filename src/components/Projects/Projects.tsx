'use client'

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { BackgroundGradient } from '../BackgroundGradient'
import { projects } from '@/data/projects'
import TransitionLink from '../TransitionLink'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Bebas_Neue } from 'next/font/google'

gsap.registerPlugin(ScrollTrigger)

const bebasNeue = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
})

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null)
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
    const titleRef = useRef<HTMLHeadingElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 1 }
        )

        if (projectsRef.current) {
            const projects =
                projectsRef.current.querySelectorAll('.project-item')

            const projectsTl = gsap.timeline({
                defaults: { ease: 'power3.out' },
                scrollTrigger: {
                    trigger: projectsRef.current,
                    start: 'top bottom-=100',
                    toggleActions: 'play none none reverse',
                },
            })

            projects.forEach((project, index) => {
                projectsTl.fromTo(
                    project,
                    { x: 100, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.8,
                    },
                    index === 0 ? 2 : '-=0.4'
                )
            })
        }
    }, [])

    return (
        <div
            className={`${bebasNeue.className} mt-20 flex flex-col items-center px-0`}
        >
            <BackgroundGradient />
            <h1
                ref={titleRef}
                className='animate-slide-up px-5 text-center text-7xl font-bold uppercase -tracking-[0.075em] text-white mix-blend-difference md:text-9xl md:tracking-normal'
            >
                Projects
            </h1>
            <div
                ref={projectsRef}
                className='mt-20 flex flex-col justify-center'
            >
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className='project-item py-4 uppercase'
                    >
                        <TransitionLink href={`/projects/${project.slug}`}>
                            <h2
                                className='mb-2 cursor-pointer text-5xl font-bold uppercase -tracking-[0.075em] mix-blend-difference transition-colors duration-150 md:text-7xl md:tracking-normal'
                                onMouseEnter={() =>
                                    setHoveredProject(project.title)
                                }
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <span className='align-top text-3xl text-red-500'>
                                    {project.number}
                                </span>{' '}
                                {project.title}
                            </h2>
                        </TransitionLink>
                    </div>
                ))}
            </div>

            {hoveredProject && (
                <div
                    className='pointer-events-none fixed z-50 hidden animate-fade-in md:block'
                    style={{
                        left: `${cursorPosition.x}px`,
                        top: `${cursorPosition.y}px`,
                        transform: 'translate(-50%, -50%) rotate(-10deg)',
                        zIndex: -999,
                    }}
                >
                    <Image
                        src={
                            projects.find((p) => p.title === hoveredProject)
                                ?.image || ''
                        }
                        alt={hoveredProject}
                        width={400}
                        height={400}
                        className='rounded-lg'
                        loading='lazy'
                    />
                </div>
            )}
        </div>
    )
}

export default Projects
