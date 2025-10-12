import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Deloc - Decentralized Logistics Marketplace',
    description: 'Anyone can order transportation of any product from anywhere to anywhere. Powered by crypto trackers, $DLOG coin, and blockchain verification.',
    keywords: 'logistics marketplace, crypto trackers, DLOG coin, play to earn, blockchain, transportation',
    authors: [{ name: 'Deloc Team' }],
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

