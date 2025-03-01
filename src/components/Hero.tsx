import { League_Gothic } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { Meteors } from './ui/meteor-effect'
// import { BoxesCore } from './ui/background-boxes'
// import { StarsBackground } from './ui/stars-background'

const leagueGothic = League_Gothic({
    subsets: ['latin'],
    weight: ['400'],
})

const Hero = () => {
    return (
        <>
            <Meteors />
            {/* <BoxesCore /> */}
            {/* <StarsBackground /> */}
            <div className='relative'>
                <div className='mt-20 flex flex-col items-center'>
                    {/* <h1 className='text-3xl font-extrabold italic text-[#FF5959]'>
                        Hey there, I am
                    </h1> */}
                    <div className='relative mt-24'>
                        <h1
                            className={`${leagueGothic.className} text-9xl font-bold md:text-[16rem]`}
                        >
                            JARVIN{' '}
                            <span className='absolute left-[33.6px] top-[95px] md:left-[67.5px] md:top-[190px]'>
                                SIEGERS
                            </span>
                        </h1>
                    </div>
                    <Image
                        src='/images/hero-oreo.jpg'
                        alt='Jarvin'
                        width={750}
                        height={500}
                        className='absolute right-0 z-[-1] hidden object-cover opacity-80 blur-sm md:block'
                    />
                </div>
            </div>
        </>
    )
}

export default Hero
