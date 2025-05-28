import Link from 'next/link'
import React from 'react'

interface ProjectLinkProps {
    href: string
    children: React.ReactNode
    className?: string
}

const ProjectLink: React.FC<ProjectLinkProps> = ({
    href,
    children,
    className = 'flex items-center gap-1 text-lg text-blue-400 transition-colors hover:text-blue-300',
}) => {
    return (
        <Link href={href} target='_blank' className={className}>
            {children}
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
        </Link>
    )
}

export default ProjectLink
