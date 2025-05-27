'use client'

import BrandingSwiper from '@/components/BrandingSwiper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Branding = () => {
    return (
        <div className='my-8'>
            <div className='mx-auto flex max-w-2xl flex-col justify-center px-4 md:px-0'>
                <div className='max-w-sm md:max-w-2xl'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-6xl'>
                        Project Overview
                    </h3>
                    <p className='mt-4 text-base md:text-left md:text-lg'>
                        I created a branding for a techno artist named Boris
                        Schmidt to promote his music.
                    </p>
                    <Link
                        href='https://www.figma.com/design/OCiXVPDe0LuBUgKbfiqAXR/Fontys---Media-semester-2?node-id=0-1'
                        target='_blank'
                        className='mt-2 flex items-center gap-1 text-lg text-blue-400 transition-colors hover:text-blue-300'
                    >
                        View Figma
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                        >
                            <path
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5'
                            />
                        </svg>
                    </Link>
                </div>
            </div>

            <div className='mt-20 flex flex-col items-center gap-10 md:gap-20'>
                <div className='max-w-sm px-4 md:max-w-2xl md:px-0'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        The Client
                    </h3>
                    <p className='text-base md:text-lg'>
                        Boris is a small techno artist from the Netherlands. He
                        is looking for branding for his music, which includes a
                        new logo, album covers, posters, and more.
                    </p>
                </div>

                <div className='max-w-sm px-4 md:max-w-2xl md:px-0'>
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
                <div className='max-w-sm px-4 md:max-w-2xl md:px-0'>
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
                <div className='max-w-sm px-4 md:max-w-2xl md:px-0'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Logos
                    </h3>
                    <p className='text-base md:text-lg'>
                        I created logos for the artist, varying in style. The
                        process of creating logos consisted of doing research
                        and bringing every single idea to life.
                    </p>
                    <div className='flex flex-col'>
                        <BrandingSwiper />
                    </div>
                </div>

                {/* Merch */}
                <div className='max-w-sm px-4 md:max-w-2xl md:px-0'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Merchandise
                    </h3>
                    <p className='text-base md:text-lg'>
                        I created merchandise concepts, with a fitting tour
                        name. The logo on the front and tour dates along with
                        the tour name on the back.
                    </p>
                    <div className='flex flex-col'>
                        <Image
                            src='/images/projects/branding/merch.jpg'
                            alt='Merch'
                            width={1920}
                            height={1080}
                            className='mt-4'
                        />
                    </div>
                </div>

                {/* Album Covers */}
                <div className='max-w-sm px-4 md:max-w-2xl md:px-0'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Album Covers
                    </h3>
                    <p className='text-base md:text-lg'>
                        I created a couple album covers, with our chosen colour
                        palette and my own logos.
                    </p>
                    <div className='flex flex-col'>
                        <Image
                            src='/images/projects/branding/albums.jpg'
                            alt='Album 1'
                            width={1920}
                            height={1080}
                            className='mt-4'
                        />
                    </div>
                </div>

                {/* Interviews */}
                <div className='max-w-sm px-4 md:max-w-2xl md:px-0'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Interviews
                    </h3>
                    <p className='text-base md:text-lg'>
                        During the Branding project, our group held interviews
                        on different topics. My topic was &quot;Discovering New
                        Artists&quot;, you will find a summary of this below:
                    </p>
                    <div className='mt-4 flex flex-col'>
                        <p className='mb-4 font-bold'>
                            &quot;The interviewee (25) listens to music daily,
                            mainly K-pop, Indie, and Pop. He discovers new
                            artists through fandoms, family, and social media.
                            He enjoys attending concerts but not festivals.
                            Social media (Instagram, TikTok) plays a significant
                            role in his music choices.
                        </p>
                        <p className='font-bold'>
                            He uses Spotify, creates his own playlists, and
                            typically discovers new music by chance through
                            social media or algorithms. Whether he continues to
                            follow an artist depends on the music, appearance,
                            and image, especially with K-pop.&quot;
                        </p>
                    </div>
                </div>

                {/* Meeting Boris */}
                <div className='max-w-sm px-4 md:max-w-2xl md:px-0'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Meeting Boris
                    </h3>
                    <p className='text-base md:text-lg'>
                        During the Branding project, we had a meeting with Boris
                        to discuss the designs we had made. Based on his
                        feedback we continued with our work.
                    </p>
                    <div className='mt-4 flex flex-col'>
                        <p className='font-bold'>
                            Below is the video of my part of the meeting with
                            Boris.
                        </p>
                        <video
                            src='/videos/boris-meeting.mp4'
                            className='mt-4'
                            controls
                        />
                    </div>
                </div>

                {/* Reflection */}
                <div className='max-w-sm px-4 md:max-w-2xl md:px-0'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Reflection
                    </h3>
                    <p className='text-base md:text-lg'>
                        Overall, I am happy with the outcome of the branding
                        project. The client was happy with the results and I
                        learned a lot about branding and design. Something I
                        could improve on is definitely the stylescapes. In my
                        opinion, the process could have been better.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Branding
