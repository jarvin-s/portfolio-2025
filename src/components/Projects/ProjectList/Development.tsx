import ProjectLink from '@/components/LearningOutcomes/ProjectLink'
import React from 'react'

const Development = () => {
    return (
        <div className='my-8'>
            <div className='mx-auto flex max-w-2xl flex-col justify-center px-4 md:px-0'>
                <div className='mt-20 max-w-sm md:max-w-2xl'>
                    <h3 className='mb-2 text-2xl font-semibold md:text-6xl'>
                        Project Overview
                    </h3>
                    <p className='mb-4 mt-4 text-base md:text-left md:text-lg'>
                        Together with my duo partner, I turned the designs from
                        the Create That UX project into a fully digital
                        experience.
                    </p>
                </div>
            </div>

            {/* Tools Used */}
            <div className='mt-20 max-w-sm px-4 md:max-w-2xl md:px-0'>
                <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                    Tools Used
                </h3>
                <p className='mb-4 text-base md:text-lg'>
                    The framework used was Next.js, the styling was done with
                    regular CSS and animations were done with Framer Motion.
                    After discussing with my duo partner, we ended up choosing
                    for this stack. They had no experience with a framework, but
                    was eager to learn and this seemed like the perfect
                    opportunity.
                </p>
            </div>

            {/* Task Distribution */}
            <div className='mt-20 max-w-sm px-4 md:max-w-2xl md:px-0'>
                <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                    Task Distribution
                </h3>
                <p className='mb-4 text-base md:text-lg'>
                    We divided the tasks in 2 halves, and I was responsible for
                    the following pages: Cognitive, Motor & Dyslexia.
                </p>
                <div className='flex gap-4'></div>
            </div>

            {/* Development Process */}
            <div className='mt-20 max-w-sm px-4 md:max-w-2xl md:px-0'>
                <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                    Development Process
                </h3>
                <p className='mb-4 text-base md:text-lg'>
                    The development process went smoothly thanks to a clear plan
                    and a balanced division of tasks. With prior experience in
                    this field, I was able to guide my duo partner through the
                    development process and introduce them to the framework we
                    used. I worked with Cursor as my IDE, and we managed our
                    codebase using GitHub for version control. Throughout the
                    project, I also made use of AI models like Claude 3.5 and
                    GPT-4.0 to support the development.
                </p>
                <div className='flex flex-col gap-4 md:flex-row'>
                    <ProjectLink href='https://github.com/jarvin-s/cardan'>
                        View GitHub Repository
                    </ProjectLink>
                </div>
            </div>

            {/* User Testing */}
            <div className='mt-20 max-w-sm px-4 md:max-w-2xl md:px-0'>
                <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                    User Testing
                </h3>
                <p className='mb-4 text-base md:text-lg'>
                    After a big part of the development was done, we both held
                    some user tests.
                </p>
                <div className='flex flex-col gap-4 md:flex-row'>
                    <ProjectLink href='/files/ux-report.pdf'>
                        View UX Report
                    </ProjectLink>
                </div>
            </div>

            {/* Showcase */}
            <div className='mt-20 max-w-sm px-4 md:max-w-2xl md:px-0'>
                <h3 className='mb-2 text-2xl font-semibold md:text-3xl'>
                    Showcase
                </h3>
                <p className='mb-4 text-base md:text-lg'>
                    A video showcasing the final product. This is the production
                    version of the website, deployed using Vercel.
                </p>
                <video
                    src='/videos/development-showcase.mp4'
                    autoPlay
                    loop
                    muted
                />
                <div className='mt-4 flex flex-col gap-4 md:flex-row'>
                    <ProjectLink href='https://cardan-groep-1.vercel.app/'>
                        View Website
                    </ProjectLink>
                </div>
            </div>
        </div>
    )
}

export default Development
