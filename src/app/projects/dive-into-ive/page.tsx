'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { PowerGlitch } from 'powerglitch'

const DiveIntoIve = () => {
    const titleRef = useRef<HTMLHeadingElement>(null)

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
        <div className='container mx-auto px-4 py-12'>
            <main className='flex flex-col items-center'>
                <h1
                    ref={titleRef}
                    className='mb-12 px-5 text-center text-7xl font-bold uppercase text-white mix-blend-difference md:text-9xl'
                >
                    <span className='text-pink-600'>DIVE </span>INTO{' '}
                    <span className='text-pink-600'>IVE</span>
                </h1>

                <div className='mx-auto mb-16 max-w-4xl'>
                    <Image
                        src='/images/projects/project-ive.jpg'
                        alt='IVE Group'
                        width={200}
                        height={200}
                        className='rounded-lg'
                    />
                </div>

                <div className='prose prose-lg prose-invert mb-16 max-w-4xl'>
                    <p className='mb-6 text-xl'>
                        A comprehensive data visualization project dedicated to
                        IVE, one of K-pop&apos;s most successful girl groups.
                        This platform offers fans and music enthusiasts detailed
                        statistics, performance metrics, and insights about the
                        group&apos;s journey in the music industry.
                    </p>

                    <h2 className='mb-6 mt-10 text-3xl font-bold'>
                        Project overview
                    </h2>
                    <p>
                        DIVE INTO IVE is a passion project for fans of IVE. It
                        shows various data and statistics about the group&apos;s
                        journey in the music industry. It also features a quiz
                        section to test your knowledge about the group.
                    </p>

                    <h2 className='mb-6 mt-10 text-3xl font-bold'>
                        Technologies used
                    </h2>
                    <ul className='list-disc space-y-2 pl-6'>
                        <li>Next.js for frontend development</li>
                        <li>Tailwind CSS for styling</li>
                        <li>Supabase for backend database</li>
                    </ul>

                    <h2 className='mb-6 mt-10 text-3xl font-bold'>
                        Key features
                    </h2>
                    <ul className='list-disc space-y-2 pl-6'>
                        <li>Interactive timeline of the group&apos;s career</li>
                        <li>Member profiles with individual achievements</li>
                        <li>Discography explorer with streaming metrics</li>
                        <li>Awards and recognition tracker</li>
                    </ul>
                </div>
            </main>
        </div>
    )
}

export default DiveIntoIve
