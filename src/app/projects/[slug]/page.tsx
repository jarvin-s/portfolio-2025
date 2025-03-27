import { notFound } from 'next/navigation'
import { projects, Project } from '@/components/Projects'
import Image from 'next/image'

export function generateStaticParams() {
    return projects.map((project: Project) => ({
        slug: project.slug,
    }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p: Project) => p.slug === params.slug)

    if (!project) {
        notFound()
    }

    return (
        <div className='container mx-auto py-12'>
            <h1 className='mb-8 text-5xl font-bold'>{project.title}</h1>
            <div className='mb-8'>
                <Image
                    src={project.image}
                    alt={project.title}
                    className='w-full max-w-2xl rounded-lg'
                    width={1000}
                    height={1000}
                />
            </div>
            <p className='text-xl'>{project.description}</p>
            {/* Add more project details here */}
        </div>
    )
}
