'use client'

import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'

// Made using AI (Claude 3.7)
const Cursor = () => {
    const [isVisible, setIsVisible] = useState(false)
    const cursorRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const xPos = e.clientX
            const yPos = e.clientY

            if (!isVisible) {
                setIsVisible(true)
            }

            if (cursorRef.current) {
                gsap.to(cursorRef.current, {
                    duration: 0.3,
                    x: xPos,
                    y: yPos,
                    xPercent: -50,
                    yPercent: -50,
                    ease: 'power2.out',
                })
            }
        }

        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [isVisible])

    return (
        <div
            ref={cursorRef}
            className={`circle-out pointer-events-none fixed z-50 hidden h-[40px] w-[40px] rounded-full border border-white/40 md:block ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ top: 0, left: 0 }}
        ></div>
    )
}

export default Cursor
