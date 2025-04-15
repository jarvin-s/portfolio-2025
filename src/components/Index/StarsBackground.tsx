'use client'
import { cn } from '@/lib/utils'
import React, { useState, useEffect, useRef, useCallback } from 'react'

interface StarProps {
    x: number
    y: number
    radius: number
    opacity: number
    twinkleSpeed: number | null
    velocityX: number
    velocityY: number
}

interface StarBackgroundProps {
    starDensity?: number
    allStarsTwinkle?: boolean
    twinkleProbability?: number
    minTwinkleSpeed?: number
    maxTwinkleSpeed?: number
    starSpeed?: number
    className?: string
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
    starDensity = 0.00015,
    allStarsTwinkle = true,
    twinkleProbability = 0.1,
    minTwinkleSpeed = 0.5,
    maxTwinkleSpeed = 1,
    starSpeed = 0.2,
    className,
}) => {
    const [stars, setStars] = useState<StarProps[]>([])
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const canvasDimensionsRef = useRef({ width: 0, height: 0 })

    const generateStars = useCallback(
        (width: number, height: number): StarProps[] => {
            const area = width * height
            const numStars = Math.floor(area * starDensity)
            return Array.from({ length: numStars }, () => {
                const shouldTwinkle =
                    allStarsTwinkle || Math.random() < twinkleProbability
                return {
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 0.05 + 0.75,
                    opacity: Math.random() * 0.5 + 0.5,
                    twinkleSpeed: shouldTwinkle
                        ? minTwinkleSpeed +
                          Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
                        : null,
                    velocityX: (Math.random() - 0.5) * starSpeed,
                    velocityY: (Math.random() - 0.5) * starSpeed,
                }
            })
        },
        [
            starDensity,
            allStarsTwinkle,
            twinkleProbability,
            minTwinkleSpeed,
            maxTwinkleSpeed,
            starSpeed,
        ]
    )

    useEffect(() => {
        const updateStars = () => {
            if (canvasRef.current) {
                const canvas = canvasRef.current
                const ctx = canvas.getContext('2d')
                if (!ctx) return

                const { width, height } = canvas.getBoundingClientRect()
                canvas.width = width
                canvas.height = height
                canvasDimensionsRef.current = { width, height }
                setStars(generateStars(width, height))
            }
        }

        updateStars()

        const resizeObserver = new ResizeObserver(updateStars)
        if (canvasRef.current) {
            resizeObserver.observe(canvasRef.current)
        }

        return () => {
            if (canvasRef.current) {
                resizeObserver.unobserve(canvasRef.current)
            }
        }
    }, [
        starDensity,
        allStarsTwinkle,
        twinkleProbability,
        minTwinkleSpeed,
        maxTwinkleSpeed,
        generateStars,
    ])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let currentStars = [...stars]

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const { width, height } = canvasDimensionsRef.current

            currentStars = currentStars.map((star) => {
                let newX = star.x + star.velocityX
                let newY = star.y + star.velocityY

                if (newX < 0) newX = width
                if (newX > width) newX = 0
                if (newY < 0) newY = height
                if (newY > height) newY = 0

                let newOpacity = star.opacity
                if (star.twinkleSpeed !== null) {
                    newOpacity =
                        0.5 +
                        Math.abs(
                            Math.sin(
                                (Date.now() * 0.001) / star.twinkleSpeed
                            ) * 0.5
                        )
                }

                return {
                    ...star,
                    x: newX,
                    y: newY,
                    opacity: newOpacity,
                }
            })

            currentStars.forEach((star) => {
                ctx.beginPath()
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
                ctx.fill()
            })

            animationFrameId = requestAnimationFrame(render)
        }

        render()

        return () => {
            cancelAnimationFrame(animationFrameId)
        }
    }, [stars])

    return (
        <canvas
            ref={canvasRef}
            className={cn('absolute inset-0 h-full w-full', className)}
        />
    )
}
