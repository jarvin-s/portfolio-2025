'use client'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '@/utils/animations'
import { useState, useEffect } from 'react'

interface Props {
    href: string
    label?: string
    onClick?: () => void
    children: React.ReactNode
}

const TransitionLink = ({ href, label, onClick, children }: Props) => {
    const router = useRouter()
    const pathname = usePathname()
    const [isHovered, setIsHovered] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkIfMobile()

        window.addEventListener('resize', checkIfMobile)

        return () => window.removeEventListener('resize', checkIfMobile)
    }, [])

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()

        const isSameBasePath =
            pathname.includes('/projects/') &&
            href.includes('/projects/') &&
            pathname !== href

        if (isSameBasePath || pathname !== href) {
            animatePageOut(href, router)
        } else {
            router.push(href)
        }

        if (onClick) onClick()
    }

    return (
        <button
            className='flex items-center gap-1 text-lg text-blue-400 transition-colors hover:text-blue-300'
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='flex items-center'>
                {children}
                {isMobile && isHovered && (
                    <span className='ml-2 inline-flex animate-fade-in items-center justify-center'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='32'
                            height='32'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        >
                            <line x1='12' y1='5' x2='12' y2='19'></line>
                            <line x1='5' y1='12' x2='19' y2='12'></line>
                        </svg>
                    </span>
                )}
            </div>
            {label && <span className='text-center'>{label}</span>}
            <ExternalLink />
        </button>
    )
}

const ExternalLink = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
        >
            <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5'
            />
        </svg>
    )
}

export default TransitionLink
