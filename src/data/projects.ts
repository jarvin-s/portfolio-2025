export interface Project {
    number: string
    title: string
    description: string
    image: string
    showcase_image?: string
    slug: string
    link?: string
}

export interface PersonalProject {
    number: string
    title: string
    description: string
    image: string
    showcase_image: string
    slug: string
    link?: string
}

export const projects: Project[] = [
    {
        number: '01.',
        title: 'Branding',
        description: 'Branding for a techno artist called Boris Schmidt',
        image: '/images/projects/glitch-branding.jpg',
        showcase_image: '/images/projects/project-branding.png',
        slug: 'branding',
    },
    {
        number: '02.',
        title: 'Create that UX',
        description: 'Creating a UX for Cardan',
        image: '/images/projects/glitch-cardan.jpg',
        showcase_image: '/images/projects/project-cardan.png',
        slug: 'cardan',
    },
]

export const personalProjects: PersonalProject[] = [
    {
        number: '01.',
        title: 'DIVE INTO IVE',
        description: 'A collection of data, stats and info about IVE.',
        image: '/images/projects/glitch-ive.jpg',
        showcase_image: '/images/projects/project-ive.png',
        slug: 'dive-into-ive',
        link: 'https://diveintoive.world',
    },
    {
        number: '02.',
        title: "Mario's Pizza",
        description:
            "Website built for a pizza restaurant called Mario's Pizza",
        image: '/images/projects/glitch-mario.jpg',
        showcase_image: '/images/projects/project-mario.png',
        slug: 'marios-pizza',
        link: 'https://marios-pizza.vercel.app/',
    },
    {
        number: '03.',
        title: 'Aqua Alert',
        description: 'Website for a water alert app',
        image: '/images/projects/glitch-aqua.jpg',
        showcase_image: '/images/projects/project-aqua.png',
        slug: 'aqua-alert',
        link: 'https://aqua-alert.nl/'
    },
]