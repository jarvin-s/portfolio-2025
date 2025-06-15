'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface OutcomeNavigationProps {
    onNavigate: (outcomeId: string) => void
    activeOutcome: string
}

const outcomes = [
    { id: 'interactive-media', label: 'Interactive Media' },
    { id: 'development', label: 'Development' },
    { id: 'iterative-design', label: 'Iterative Design' },
    { id: 'professional-standard', label: 'Professional Standard' },
    { id: 'personal-leadership', label: 'Personal Leadership' },
]

const OutcomeNavigation: React.FC<OutcomeNavigationProps> = ({
    onNavigate,
    activeOutcome,
}) => {
    const pillsRef = useRef(null)
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.fromTo(
            pillsRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 2 }
        )
    }, [])
    return (
        <div className='sticky top-4 z-10 mb-8 flex justify-center'>
            <div
                ref={pillsRef}
                className='flex gap-2 rounded-full bg-black/20 p-2 backdrop-blur-sm'
            >
                {outcomes.map((outcome) => (
                    <button
                        key={outcome.id}
                        onClick={() => onNavigate(outcome.id)}
                        className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 md:text-sm ${
                            activeOutcome === outcome.id
                                ? 'bg-white text-black'
                                : 'text-white hover:bg-white/10'
                        }`}
                    >
                        {outcome.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default OutcomeNavigation
