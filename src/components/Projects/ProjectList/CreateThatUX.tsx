import ProjectLink from '@/components/LearningOutcomes/ProjectLink'
import Image from 'next/image'
import React from 'react'

const CreateThatUX = () => {
    return (
        <div className='my-8'>
            <div className='mx-auto flex max-w-2xl flex-col justify-center px-4 md:px-0'>
                <div className='max-w-sm md:max-w-2xl'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-6xl'>
                        Project Overview
                    </h3>
                    <p className='mt-4 text-base md:text-left md:text-lg'>
                        I created a UX for a company called Cardan. Cardan
                        promotes digital accessibility through five physical
                        stations that show how people with disabilities
                        experience websites. Our task is to turn these into a
                        digital, interactive UX experience.
                    </p>
                </div>
            </div>

            <div className='mt-20 flex flex-col items-center gap-10 md:gap-20'>
                <div className='max-w-sm px-4 md:max-w-2xl md:px-0'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        The Client
                    </h3>
                    <p className='text-base md:text-lg'>
                        The company is called Cardan, but our stakeholder was
                        Carolina van Setten. She is the Brand Manager and a WCAG
                        specialist at Cardan. She organizes on-site training
                        sessions for companies and also attends them herself.
                    </p>
                </div>

                {/* Research */}
                <div className='max-w-sm px-4 md:max-w-2xl md:px-0'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Research
                    </h3>
                    <p className='text-base md:text-lg'>
                        I started our project by doing research on digital
                        accessibility. The goal was to find best way to
                        digitally simulate the physical stations. Eventually, we
                        divided the five stations among our group of five
                        people, so each member had their own station to design.
                    </p>
                </div>

                {/* Design */}
                <div className='max-w-sm px-4 md:max-w-2xl md:px-0'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Design
                    </h3>
                    <p className='text-base md:text-lg'>
                        I designed the cognitive impairment station, focusing on
                        ADHD specifically. The goal of this station was to
                        simulate the experience of someone with ADHD, using
                        pop-up notifications to distract the user while writing
                        an email. I created multiple versions of this station,
                        all of which are shown below in order (left to right,
                        top to bottom). The images are arranged in two rows,
                        progressing from version 1 to version 6.
                    </p>
                    <Image
                        src='/images/projects/create-that-ux/cognitive-station-design-1.jpg'
                        alt='ADHD Station 1'
                        width={1920}
                        height={1080}
                        className='mt-4'
                    />
                    <Image
                        src='/images/projects/create-that-ux/cognitive-station-design-2.jpg'
                        alt='ADHD Station 2'
                        width={1920}
                        height={1080}
                    />
                </div>

                {/* Prototype */}
                <div className='max-w-sm px-4 md:max-w-2xl md:px-0'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                        Prototype
                    </h3>
                    <p className='mb-4 text-base md:text-lg'>
                        I, along with my group, created an interactive prototype
                        of the designs, using Figma.
                    </p>
                    <div className='flex gap-4'>
                        <ProjectLink href='https://www.figma.com/proto/HOaKHvzGYPiUdqkCOMPzHC/Project-UX?page-id=35%3A3&node-id=46-41&p=f&viewport=1913%2C-601%2C0.06&t=Vcd38LeDdoipriPB-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=46%3A41'>
                            View Figma Prototype
                        </ProjectLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateThatUX
