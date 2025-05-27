'use client'

import React, { useState, useEffect } from 'react'
import InteractiveMedia from './outcomes/InteractiveMedia'
import Development from './outcomes/Development'
import IterativeDesign from './outcomes/IterativeDesign'
import ProfessionalStandard from './outcomes/ProfessionalStandard'
import OutcomeNavigation from './OutcomeNavigation'

const ScrollRevealSection = () => {
    const [activeOutcome, setActiveOutcome] = useState('interactive-media')

    const handleNavigate = (outcomeId: string) => {
        const element = document.getElementById(outcomeId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                'interactive-media',
                'development',
                'iterative-design',
                'professional-standard',
            ]

            const scrollPosition = window.scrollY + 600

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveOutcome(sectionId)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <OutcomeNavigation
                onNavigate={handleNavigate}
                activeOutcome={activeOutcome}
            />
            <div id='interactive-media'>
                <InteractiveMedia />
            </div>
            <div id='development'>
                <Development />
            </div>
            <div id='iterative-design'>
                <IterativeDesign />
            </div>
            <div id='professional-standard'>
                <ProfessionalStandard />
            </div>
        </>
    )
}

export default ScrollRevealSection
