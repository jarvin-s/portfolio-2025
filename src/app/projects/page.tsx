import PersonalProjects from '@/components/PersonalProjects'
import Projects from '@/components/Projects'
import React from 'react'

const Work = () => {
    return (
        <>
            <div className='overflow-x-hidden'>
                <Projects />
                <PersonalProjects />
            </div>
        </>
    )
}

export default Work
