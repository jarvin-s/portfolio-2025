'use client'

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { PowerGlitch } from 'powerglitch'
import localFont from 'next/font/local'
import { BackgroundGradient } from './BackgroundGradient'
import { projects } from '@/data/projects'
import TransitionLink from './TransitionLink'

const drukCond = localFont({
    src: '/../../public/fonts/DrukCond-Super-Trial.otf',
})

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null)
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
    const titleRef = useRef<HTMLHeadingElement>(null)

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

    return (
        <div
            className={`${drukCond.className} mt-20 flex flex-col items-center`}
        >
            <BackgroundGradient />
            <h1
                ref={titleRef}
                className='px-5 text-center text-9xl font-bold uppercase text-white mix-blend-difference'
            >
                Projects
            </h1>
            <div className='mt-20 flex flex-col justify-center'>
                {projects.map((project) => (
                    <div key={project.title} className='py-4 uppercase'>
                        <TransitionLink href={`/projects/${project.slug}`}>
                            <h2
                                className='mb-2 cursor-pointer text-7xl font-bold mix-blend-difference transition-colors duration-150 uppercase'
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
                    className='pointer-events-none fixed z-50 animate-fade-in'
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
