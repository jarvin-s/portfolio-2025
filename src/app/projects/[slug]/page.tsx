import { notFound } from 'next/navigation'
import {
    projects,
    Project,
    personalProjects,
    PersonalProject,
} from '@/data/projects'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { capitalize } from '@/utils/string'
import TransitionLink from '@/components/TransitionLink'

const slugToComponentMap: Record<string, string> = {
    'create-that-ux': 'CreateThatUX',
    branding: 'Branding',
    development: 'Development',
}

export function generateStaticParams() {
    const allProjects = [...projects, ...personalProjects]
    return allProjects.map((project) => ({
        slug: project.slug,
    }))
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const project =
        projects.find((p: Project) => p.slug === slug) ||
        personalProjects.find((p: PersonalProject) => p.slug === slug)

    if (!project) {
        console.log('Project not found', project)
        notFound()
    }

    const componentName = slugToComponentMap[slug] || capitalize(slug)

    const ProjectComponent = dynamic(
        () =>
            import(`@/components/Projects/ProjectList/${componentName}`)
                .then((mod) => mod.default)
                .catch(() => {
                    console.log(
                        `Component for ${componentName} not found, using default view`
                    )
                    return () => null
                }),
        { ssr: true }
    )

    return (
        <div className='mt-20 flex flex-col items-center justify-center'>
            <div className='flex flex-col'>
                <h1 className='mb-4 text-2xl opacity-50'>PROJECT</h1>
                <h1 className='mb-2 text-3xl font-bold md:text-9xl'>
                    {project?.title}
                </h1>
                <div className='mb-8 flex gap-2 self-start'>
                    <TransitionLink href='/projects'>
                        <ArrowLeftIcon />
                        Back to all projects
                    </TransitionLink>
                </div>
            </div>
            <div className='mb-8'>
                <Image
                    src={project?.showcase_image || ''}
                    alt={project?.title || ''}
                    className='w-full'
                    width={1920}
                    height={1080}
                    onLoad={() => {
                        if (typeof window !== 'undefined') {
                            import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                                ScrollTrigger.refresh()
                            })
                        }
                    }}
                />
            </div>

            {/* Render project-specific component if it exists */}
            <ProjectComponent />
        </div>
    )
}

const ArrowLeftIcon = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
        >
            <path
                fill='currentColor'
                d='m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z'
            />
        </svg>
    )
}
