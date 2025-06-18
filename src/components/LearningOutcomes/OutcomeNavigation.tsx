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
    const pillsRef = useRef<HTMLDivElement>(null)

    const getCurrentIndex = () =>
        outcomes.findIndex((o) => o.id === activeOutcome)

    const scrollToOutcome = (index: number) => {
        if (!pillsRef.current) return
        const pill = pillsRef.current.querySelectorAll('button')[index]
        if (pill) {
            ;(pill as HTMLElement).scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
            })
        }
    }

    const handleArrow = (direction: 'left' | 'right') => {
        const currentIndex = getCurrentIndex()
        const newIndex =
            direction === 'left' ? currentIndex - 1 : currentIndex + 1
        if (newIndex < 0 || newIndex >= outcomes.length) return
        onNavigate(outcomes[newIndex].id)
        scrollToOutcome(newIndex)
    }

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.fromTo(
            pillsRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 2 }
        )
    }, [])
    return (
        <div className='sticky top-16 z-10 mb-8 flex justify-center px-4 md:top-4 md:px-0'>
            <div className='relative flex w-full max-w-[300px] flex-nowrap gap-2 overflow-auto overflow-x-hidden rounded-full p-2 backdrop-blur-sm md:max-w-max md:overflow-visible md:overflow-x-visible'>
                {/* Left Arrow */}
                {getCurrentIndex() > 0 && (
                    <div className='sticky left-0 z-20 flex items-center md:hidden'>
                        <button
                            className='rounded-full bg-white p-2 text-[10px] font-medium transition-all duration-300'
                            onClick={() => handleArrow('left')}
                            aria-label='Scroll left'
                        >
                            <ArrowLeft />
                        </button>
                    </div>
                )}
                <div
                    ref={pillsRef}
                    className='flex flex-nowrap gap-2 rounded-full bg-transparent p-0 md:max-w-max'
                >
                    {outcomes.map((outcome) => (
                        <button
                            key={outcome.id}
                            onClick={() => {
                                onNavigate(outcome.id)
                                scrollToOutcome(
                                    outcomes.findIndex(
                                        (o) => o.id === outcome.id
                                    )
                                )
                            }}
                            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-[10px] font-medium transition-all duration-300 sm:px-4 sm:py-2 sm:text-xs md:text-sm ${
                                activeOutcome === outcome.id
                                    ? 'bg-white text-black'
                                    : 'text-white hover:bg-white/10'
                            }`}
                        >
                            {outcome.label}
                        </button>
                    ))}
                </div>
                {/* Right Arrow */}
                {getCurrentIndex() < outcomes.length - 1 && (
                    <div className='sticky right-0 z-20 flex items-center md:hidden'>
                        <button
                            className='rounded-full bg-white p-2 text-[10px] font-medium transition-all duration-300'
                            onClick={() => handleArrow('right')}
                            aria-label='Scroll right'
                        >
                            <ArrowRight />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

const ArrowLeft = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            className='text-black'
        >
            <path
                fill='currentColor'
                d='m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z'
            />
        </svg>
    )
}

const ArrowRight = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            className='text-black'
        >
            <path
                fill='currentColor'
                d='m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z'
            />
        </svg>
    )
}

export default OutcomeNavigation
