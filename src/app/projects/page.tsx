import PersonalProjects from '@/components/Projects/PersonalProjects'
import Projects from '@/components/Projects/Projects'
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
