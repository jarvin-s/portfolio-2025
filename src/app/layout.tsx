import type { Metadata } from 'next'
import { Inter_Tight } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Cursor from '@/components/Cursor'
import { PostHogProvider } from '@/components/PostHogProvider'

const inter = Inter_Tight({
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Jarvin Siegers - Portfolio',
    description: 'Portfolio website for Jarvin Siegers, a software developer',
}

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className={`${inter.className} antialiased`}>
                <PostHogProvider>
                    <Navbar />
                    {children}
                    <Cursor />
                </PostHogProvider>
            </body>
        </html>
    )
}
