'use client'

import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import { PowerGlitch } from 'powerglitch'
import localFont from 'next/font/local'

const drukCond = localFont({
    src: '/../../public/fonts/DrukCond-Super-Trial.otf',
    display: 'swap',
})

const PersonalProjects = () => {
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
                    duration: 3000,
                },
                glitchTimeSpan: {
                    start: 0.1,
                    end: 0.8,
                },
            })
        }
    }, [])

    return (
        <div
            className={`${drukCond.className} my-20 flex flex-col items-center`}
        >
            <h1
                ref={titleRef}
                className='px-5 text-center text-9xl font-bold uppercase text-white mix-blend-difference'
            >
                Personal Projects
            </h1>
            <div className='mt-20 flex flex-col justify-center'>
                {projects.map((project) => (
                    <div key={project.title} className='py-4 uppercase'>
                        <h2
                            className='mb-2 cursor-pointer text-7xl font-bold mix-blend-difference transition-colors duration-150'
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

export default PersonalProjects

const projects = [
    {
        number: '01.',
        title: 'DIVE INTO IVE',
        description: 'A collection of data, stats and info about IVE.',
        image: '/images/projects/project-ive.jpg',
        link: 'https://diveintoive.world',
    },
]
