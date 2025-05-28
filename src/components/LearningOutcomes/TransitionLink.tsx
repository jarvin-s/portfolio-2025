'use client'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '@/utils/animations'

interface Props {
    href: string
    label?: string
    onClick?: () => void
    children: React.ReactNode
}

const TransitionLink = ({ href, label, onClick, children }: Props) => {
    const router = useRouter()
    const pathname = usePathname()

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
        >
            <div className='flex items-center'>{children}</div>
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
