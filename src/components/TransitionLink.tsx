'use client'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '@/utils/animations'

interface Props {
    href: string
    label: string
    onClick?: () => void
}

const TransitionLink = ({ href, label, onClick }: Props) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = () => {
        if (pathname !== href) {
            animatePageOut(href, router)
        }
        if (onClick) onClick()
    }

    return (
        <button
            className='py-4 text-center lowercase transition-all duration-150 hover:text-[#FF5959]'
            onClick={handleClick}
        >
            {label}
        </button>
    )
}

export default TransitionLink
