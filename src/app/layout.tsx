import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Cursor from '@/components/Cursor'
import { PostHogProvider } from '@/components/PostHogProvider'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'

const inter = Inter_Tight({
    subsets: ['latin'],
})

export const metadata: Metadata = {
    metadataBase: new URL('https://portfolio-jarvin.vercel.app'),
    title: 'Jarvin Siegers - Portfolio',
    description:
        'Portfolio of Jarvin Siegers, a Frontend Developer based in the Netherlands.',
    openGraph: {
        title: 'Jarvin Siegers - Portfolio',
        description:
            'Portfolio of Jarvin Siegers, a Frontend Developer based in the Netherlands.',
        images: [
            {
                url: '/images/hero-oreo.jpg',
            },
        ],
    },
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className={`${inter.className} antialiased`}>
                <PostHogProvider>
                    <SmoothScrollProvider>
                        <Navbar />
                        {children}
                        <Cursor />
                    </SmoothScrollProvider>
                </PostHogProvider>
            </body>
        </html>
    )
}
