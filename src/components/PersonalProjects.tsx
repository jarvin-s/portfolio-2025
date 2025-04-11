'use client'

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { PowerGlitch } from 'powerglitch'
import localFont from 'next/font/local'
import { personalProjects } from '@/data/projects'
import TransitionLink from './TransitionLink'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const drukCond = localFont({
    src: '/../../public/fonts/DrukCond-Super-Trial.otf',
    display: 'swap',
})

const PersonalProjects = () => {
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
        if (titleRef.current) {
            PowerGlitch.glitch(titleRef.current, {
                playMode: 'always',
                createContainers: true,
                hideOverflow: false,
                timing: {
                    duration: 4000,
                },
                glitchTimeSpan: {
                    start: 0.2,
                    end: 0.6,
                },
                slice: {
                    count: 2,
                },
            })
        }
    }, [])

    useEffect(() => {
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

            projects.forEach((project) => {
                projectsTl.fromTo(
                    project,
                    { x: 100, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.8,
                    }
                )
            })
        }
    }, [])

    return (
        <main
            className={`${drukCond.className} my-40 flex flex-col items-center`}
        >
            <h1
                // ref={titleRef}
                className='px-5 text-center text-9xl font-bold uppercase text-white mix-blend-difference'
            >
                Personal Projects
            </h1>
            <div
                ref={projectsRef}
                className='mt-20 flex flex-col justify-center'
            >
                {personalProjects.map((project) => (
                    <div
                        key={project.title}
                        className='project-item py-4 uppercase'
                    >
                        <TransitionLink href={`/projects/${project.slug}`}>
                            <h2
                                className='mb-2 cursor-pointer text-7xl font-bold uppercase mix-blend-difference transition-colors duration-150'
                                onMouseEnter={() =>
                                    setHoveredProject(project.title)
                                }
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <div className='flex gap-2'>
                                    <span className='text-3xl text-red-500'>
                                        {project.number}
                                    </span>{' '}
                                    {project.title}
                                </div>
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
                            personalProjects.find(
                                (p) => p.title === hoveredProject
                            )?.image || ''
                        }
                        alt={hoveredProject}
                        width={400}
                        height={400}
                        className='rounded-lg'
                        loading='lazy'
                    />
                </div>
            )}
        </main>
    )
}

export default PersonalProjects
