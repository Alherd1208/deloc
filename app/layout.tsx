import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Deloc - Smart Cargo Transportation Across Europe & Asia',
    description: 'Auto search drivers for cargo transfer with GNSS tracking and blockchain confirmation. Secure, transparent, and efficient logistics solution.',
    keywords: 'cargo transport, logistics, GNSS tracking, blockchain, Europe, Asia, drivers, freight',
    authors: [{ name: 'Deloc Team' }],
    viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}

