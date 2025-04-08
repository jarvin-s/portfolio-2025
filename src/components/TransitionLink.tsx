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
            className='py-4 text-center transition-all duration-150 hover:text-[#FF5959]'
            onClick={handleClick}
        >
            {children}
            {label && <span className='text-center'>{label}</span>}
        </button>
    )
}

export default TransitionLink
