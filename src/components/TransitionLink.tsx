'use client'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '@/utils/animations'

interface Props {
    href: string
    label: string
}

const TransitionLink = ({ href, label }: Props) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = () => {
        if (pathname !== href) {
            animatePageOut(href, router)
        }
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
