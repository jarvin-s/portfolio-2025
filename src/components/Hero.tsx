import { League_Gothic } from 'next/font/google'
import React from 'react'

const leagueGothic = League_Gothic({
    subsets: ['latin'],
    weight: ['400'],
})

const Hero = () => {
    return (
        <>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-extrabold italic text-[#FF5959]'>
                    Hey there, I am
                </h1>
                <div className='relative'>
                    <h1
                        className={`${leagueGothic.className} text-9xl font-bold md:text-[16rem]`}
                    >
                        JARVIN{' '}
                        <span className='absolute left-[33.6px] top-[95px] md:left-[67.5px] md:top-[190px]'>
                            SIEGERS
                        </span>
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Hero
