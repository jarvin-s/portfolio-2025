'use client'

import Image from 'next/image'
import React from 'react'

const Branding = () => {
    return (
        <div className='my-8'>
            <div className='mx-auto flex max-w-2xl flex-col justify-center px-4 md:px-0'>
                <div className='max-w-sm md:max-w-2xl'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-6xl'>
                        Project overview
                    </h3>
                    <p className='text-base md:text-left md:text-lg'>
                        I created a branding for a techno artist named Boris
                        Schmidt to promote his music.
                    </p>
                </div>
            </div>

            <div className='mt-20 flex flex-col items-center gap-10 px-4 md:gap-20 md:px-0'>
                <div className='max-w-sm md:max-w-2xl'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        The Client
                    </h3>
                    <p className='text-base md:text-lg'>
                        Boris is a small techno artist from the Netherlands. He
                        is looking for branding for his music, which includes a
                        new logo, album covers, posters, and more.
                    </p>
                </div>

                <div className='max-w-sm md:max-w-2xl'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Moodboard
                    </h3>
                    <p className='text-base md:text-lg'>
                        I created a moodboard to help me understand the
                        client&apos;s style and preferences. This also helped to
                        understand the target group better.
                    </p>
                    <Image
                        src='/images/projects/branding/moodboard.jpg'
                        alt='Moodboard'
                        width={1920}
                        height={1080}
                        className='mt-4'
                    />
                </div>

                {/* Stylescapes */}
                <div className='max-w-sm md:max-w-2xl'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Stylescapes
                    </h3>
                    <p className='text-base md:text-lg'>
                        I created stylescapes to test out different styles and
                        themes. Multiple were created, each with a different
                        font family, color palette and style.
                    </p>
                    <div className='flex flex-col'>
                        <Image
                            src='/images/projects/branding/stylescape-1.jpg'
                            alt='Stylescapes'
                            width={1920}
                            height={1080}
                            className='mt-4'
                        />
                        <Image
                            src='/images/projects/branding/stylescape-2.jpg'
                            alt='Stylescapes'
                            width={1920}
                            height={1080}
                        />
                    </div>
                </div>

                {/* Logos */}
                <div className='max-w-sm md:max-w-2xl'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Logos
                    </h3>
                    <p className='text-base md:text-lg'>
                        I created logos for the artist, varying in style. The
                        process of creating logos consisted of doing research
                        and bringing every single idea to life.
                    </p>
                    <div className='flex flex-col gap-4'>
                        <Image
                            src='/images/projects/branding/logos-1.jpg'
                            alt='Logo'
                            width={1920}
                            height={1080}
                            className='mt-4'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Branding
