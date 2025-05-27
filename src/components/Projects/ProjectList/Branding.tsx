'use client'

import BrandingSwiper from '@/components/BrandingSwiper'
import Image from 'next/image'
import React, { useEffect, useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectLink from '@/components/LearningOutcomes/ProjectLink'

const Branding = () => {
    const imageRefs = useRef<(HTMLImageElement | null)[]>([])
    const videoRef = useRef<HTMLVideoElement>(null)
    const textSectionRefs = useRef<(HTMLDivElement | null)[]>([])
    const swiperRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const setInitialStates = () => {
            gsap.set('.project-overview h3', { opacity: 0, y: 60, scale: 0.9 })
            gsap.set('.project-overview p', { opacity: 0, y: 40 })
            gsap.set('.project-overview a, .project-overview div:has(a)', {
                opacity: 0,
                y: 30,
                x: -20,
            })

            textSectionRefs.current.forEach((section) => {
                if (section) {
                    const heading = section.querySelector('h3')
                    const paragraph = section.querySelector('p')
                    const additionalContent = section.querySelectorAll(
                        '.interview-content p, .video-description'
                    )

                    gsap.set([heading, paragraph, ...additionalContent], {
                        opacity: 0,
                        y: 50,
                        filter: 'blur(10px)',
                    })
                }
            })

            imageRefs.current.forEach((image, index) => {
                if (image) {
                    const isEven = index % 2 === 0
                    const xStart = isEven ? '-25%' : '25%'

                    gsap.set(image, {
                        x: xStart,
                        opacity: 0,
                        scale: 0.9,
                        filter: 'blur(15px)',
                        rotationY: isEven ? -10 : 10,
                    })
                }
            })

            if (swiperRef.current) {
                gsap.set(swiperRef.current, {
                    x: '-25%',
                    opacity: 0,
                    rotationY: 15,
                    filter: 'blur(20px)',
                })
            }

            if (videoRef.current) {
                const videoIndex = imageRefs.current.length
                const isEven = videoIndex % 2 === 0
                const xStart = isEven ? '-25%' : '25%'

                gsap.set(videoRef.current, {
                    x: xStart,
                    opacity: 0,
                    scale: 0.9,
                    filter: 'blur(15px)',
                })
            }
        }

        setInitialStates()
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            const tl = gsap.timeline()
            tl.fromTo(
                '.project-overview h3',
                { opacity: 0, y: 60, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                }
            )
                .fromTo(
                    '.project-overview p',
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
                    '-=0.6'
                )
                .fromTo(
                    '.project-overview a, .project-overview div:has(a)',
                    { opacity: 0, y: 30, x: -20 },
                    {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        duration: 0.8,
                        ease: 'back.out(1.7)',
                    },
                    '-=0.4'
                )

            textSectionRefs.current.forEach((section) => {
                if (section) {
                    const heading = section.querySelector('h3')
                    const paragraph = section.querySelector('p')
                    const additionalContent = section.querySelectorAll(
                        '.interview-content p, .video-description'
                    )

                    const sectionTl = gsap.timeline({
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 100%',
                            end: 'bottom 100%',
                            toggleActions: 'play none none reverse',
                            scrub: true,
                        },
                    })

                    sectionTl
                        .to(heading, {
                            opacity: 1,
                            y: 0,
                            filter: 'blur(0px)',
                            duration: 1,
                            ease: 'power3.out',
                        })
                        .to(
                            paragraph,
                            {
                                opacity: 1,
                                y: 0,
                                filter: 'blur(0px)',
                                duration: 0.8,
                                ease: 'power2.out',
                            },
                            '-=0.6'
                        )

                    if (additionalContent.length > 0) {
                        sectionTl.to(
                            additionalContent,
                            {
                                opacity: 1,
                                y: 0,
                                filter: 'blur(0px)',
                                duration: 0.6,
                                stagger: 0.2,
                                ease: 'power2.out',
                            },
                            '-=0.4'
                        )
                    }
                }
            })

            if (swiperRef.current) {
                gsap.fromTo(
                    swiperRef.current,
                    {
                        x: '-25%',
                        opacity: 0,
                        rotationY: 15,
                        filter: 'blur(20px)',
                    },
                    {
                        opacity: 1,
                        x: 0,
                        rotationY: 0,
                        filter: 'blur(0px)',
                        duration: 1.5,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: swiperRef.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                            toggleActions: 'play none none reverse',
                            scrub: true,
                        },
                    }
                )
            }

            imageRefs.current.forEach((image, index) => {
                if (image) {
                    const isEven = index % 2 === 0
                    const xStart = isEven ? '-25%' : '25%'

                    gsap.fromTo(
                        image,
                        {
                            x: xStart,
                            opacity: 0,
                            scale: 0.9,
                            filter: 'blur(15px)',
                            rotationY: isEven ? -10 : 10,
                        },
                        {
                            x: '0%',
                            opacity: 1,
                            scale: 1,
                            filter: 'blur(0px)',
                            rotationY: 0,
                            duration: 1.2,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: image,
                                start: 'top 80%',
                                end: 'bottom 20%',
                                toggleActions: 'play none none reverse',
                                scrub: true,
                            },
                        }
                    )
                }
            })

            if (videoRef.current) {
                const videoIndex = imageRefs.current.length
                const isEven = videoIndex % 2 === 0
                const xStart = isEven ? '-25%' : '25%'

                gsap.fromTo(
                    videoRef.current,
                    {
                        x: xStart,
                        opacity: 0,
                        scale: 0.9,
                        filter: 'blur(15px)',
                    },
                    {
                        x: '0%',
                        opacity: 1,
                        scale: 1,
                        filter: 'blur(0px)',
                        duration: 1.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: videoRef.current,
                            start: 'top 80%',
                            end: 'bottom 20%',
                            toggleActions: 'play none none reverse',
                            scrub: true,
                        },
                    }
                )
            }
        }, 50)

        return () => {
            clearTimeout(timer)
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    const addToRefs = (el: HTMLImageElement | null) => {
        if (el && !imageRefs.current.includes(el)) {
            imageRefs.current.push(el)
        }
    }

    const addToTextRefs = (el: HTMLDivElement | null) => {
        if (el && !textSectionRefs.current.includes(el)) {
            textSectionRefs.current.push(el)
        }
    }

    return (
        <div className='my-8 overflow-x-hidden'>
            <div className='mx-auto flex max-w-2xl flex-col justify-center px-4 md:px-0'>
                <div
                    className='project-overview max-w-sm md:max-w-2xl'
                    ref={addToRefs}
                >
                    <h3 className='mb-2 text-2xl font-semibold md:text-6xl'>
                        Project Overview
                    </h3>
                    <p className='mt-4 text-base md:text-left md:text-lg'>
                        I created a branding for a techno artist named Boris
                        Schmidt to promote his music.
                    </p>
                    <div className='mt-4'>
                        <ProjectLink href='https://www.figma.com/design/OCiXVPDe0LuBUgKbfiqAXR/Fontys---Media-semester-2?node-id=0-1'>
                            View Figma
                        </ProjectLink>
                    </div>
                </div>
            </div>

            <div className='mt-20 flex flex-col items-center gap-10 md:gap-20'>
                <div
                    className='max-w-sm px-4 md:max-w-2xl md:px-0'
                    ref={addToRefs}
                >
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        The Client
                    </h3>
                    <p className='text-base md:text-lg'>
                        Boris is a small techno artist from the Netherlands. He
                        is looking for branding for his music, which includes a
                        new logo, album covers, posters, and more.
                    </p>
                </div>

                <div
                    className='max-w-sm px-4 md:max-w-2xl md:px-0'
                    ref={addToRefs}
                >
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
                        ref={addToRefs}
                    />
                </div>

                {/* Stylescapes */}
                <div
                    className='max-w-sm px-4 md:max-w-2xl md:px-0'
                    ref={addToTextRefs}
                >
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
                            ref={addToRefs}
                        />
                        <Image
                            src='/images/projects/branding/stylescape-2.jpg'
                            alt='Stylescapes'
                            width={1920}
                            height={1080}
                            ref={addToRefs}
                        />
                    </div>
                </div>

                {/* Logos */}
                <div
                    className='max-w-sm px-4 md:max-w-2xl md:px-0'
                    ref={addToTextRefs}
                >
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Logos
                    </h3>
                    <p className='text-base md:text-lg'>
                        I created logos for the artist, varying in style. The
                        process of creating logos consisted of doing research
                        and bringing every single idea to life.
                    </p>
                    <div className='flex flex-col' ref={swiperRef}>
                        <BrandingSwiper />
                    </div>
                </div>

                {/* Merch */}
                <div
                    className='max-w-sm px-4 md:max-w-2xl md:px-0'
                    ref={addToTextRefs}
                >
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
                            ref={addToRefs}
                        />
                    </div>
                </div>

                {/* Album Covers */}
                <div
                    className='max-w-sm px-4 md:max-w-2xl md:px-0'
                    ref={addToTextRefs}
                >
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
                            ref={addToRefs}
                        />
                    </div>
                </div>

                {/* Interviews */}
                <div
                    className='max-w-sm px-4 md:max-w-2xl md:px-0'
                    ref={addToTextRefs}
                >
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Interviews
                    </h3>
                    <p className='text-base md:text-lg'>
                        During the Branding project, our group held interviews
                        on different topics. My topic was &quot;Discovering New
                        Artists&quot;, you will find a summary of this below:
                    </p>
                    <div className='interview-content mt-4 flex flex-col'>
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
                <div
                    className='max-w-sm px-4 md:max-w-2xl md:px-0'
                    ref={addToTextRefs}
                >
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Meeting Boris
                    </h3>
                    <p className='text-base md:text-lg'>
                        During the Branding project, we had a meeting with Boris
                        to discuss the designs we had made. Based on his
                        feedback we continued with our work.
                    </p>
                    <div className='mt-4 flex flex-col'>
                        <p className='video-description font-bold'>
                            Below is the video of my part of the meeting with
                            Boris.
                        </p>
                        <video
                            src='/videos/boris-meeting.mp4'
                            className='mt-4'
                            controls
                            ref={videoRef}
                        />
                    </div>
                </div>

                {/* Reflection */}
                <div
                    className='max-w-sm px-4 pb-[20rem] md:max-w-2xl md:px-0'
                    ref={addToTextRefs}
                >
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
