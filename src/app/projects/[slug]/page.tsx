import { notFound } from 'next/navigation'
import {
    projects,
    Project,
    personalProjects,
    PersonalProject,
} from '@/data/projects'
import Image from 'next/image'

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

    return (
        <div className='mt-20 flex flex-col items-center justify-center'>
            <h1 className='mb-8 text-5xl font-bold'>
                {project?.title}
                <span
                    className='text-primary'
                    style={{ color: project?.titleWithColor?.color }}
                >
                    {project?.titleWithColor?.text}
                </span>
            </h1>
            <div className='mb-8 px-4'>
                <Image
                    src={project?.showcase_image || ''}
                    alt={project?.title || ''}
                    className='w-full rounded-lg'
                    width={1920}
                    height={1080}
                    loading='lazy'
                />
            </div>
            <p className='text-center text-xl md:text-left'>
                {project?.description}
            </p>
        </div>
    )
}
