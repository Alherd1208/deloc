'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Circle, Rocket } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const roadmapItems = [
    {
        title: 'Regional Expansion',
        description: 'Accumulate carriers and clients of cars transition in Georgia, Armenia, Azerbaijan, Belarus, Russia, Turkmenistan, Uzbekistan, Kazakhstan, Kyrgyzstan',
        status: 'in-progress'
    },
    {
        title: 'Trackers MVP Development',
        description: 'Trackers MVP development with core sensor integration',
        status: 'in-progress'
    },
    {
        title: 'Seed Investments',
        description: 'Seed investments for initial platform development',
        status: 'in-progress'
    },
    {
        title: 'Trackers First Release',
        description: 'Trackers first version release to market',
        status: 'upcoming'
    },
    {
        title: 'Telegram Bot Launch',
        description: 'Automatic match app in Telegram launch',
        status: 'upcoming'
    },
    {
        title: 'Private Investments',
        description: 'Private investments for scaling operations',
        status: 'upcoming'
    },
    {
        title: 'DePin App Launch',
        description: 'DePin app for tracker owners with trackers marketplace',
        status: 'upcoming'
    },
    {
        title: 'Public Investments',
        description: 'Public investments for community expansion',
        status: 'upcoming'
    },
    {
        title: '$DLOG Coin Launch',
        description: '$DLOG coin launch for all transactions',
        status: 'future'
    },
    {
        title: 'Mobile Apps Launch',
        description: 'Automatic match Android/iOS app launch',
        status: 'future'
    },
    {
        title: 'DePin App Game',
        description: 'DePin app for tracker owners Android/iOS app',
        status: 'future'
    },
    {
        title: 'Cargo Type Expansion',
        description: 'Expand the types of cargo to transfer not only cars but also premium food products and post',
        status: 'future'
    },
    {
        title: 'Territory Expansion',
        description: 'Expand the territory of transfers to additional regions',
        status: 'future'
    },
    {
        title: 'To be continued...',
        description: 'To be continued with more exciting developments',
        status: 'future'
    }
]

export default function Roadmap() {
    const getStatusIcon = (status: string) => {
        if (status === 'in-progress') return <Rocket className="h-5 w-5" />
        if (status === 'upcoming') return <Circle className="h-5 w-5" />
        return <Circle className="h-5 w-5 opacity-50" />
    }

    const getStatusColor = (status: string) => {
        if (status === 'in-progress') return 'bg-primary-100 text-primary-700 border-primary-300'
        if (status === 'upcoming') return 'bg-blue-100 text-blue-700 border-blue-300'
        return 'bg-gray-100 text-gray-700 border-gray-300'
    }

    const getStatusLabel = (status: string) => {
        if (status === 'in-progress') return 'In Progress'
        if (status === 'upcoming') return 'Upcoming'
        return 'Future'
    }

    return (
        <section id="roadmap" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Roadmap
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Building the future of decentralized logistics, step by step
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {roadmapItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-3">
                                        <Badge className={`${getStatusColor(item.status)} border`}>
                                            <span className="flex items-center gap-1">
                                                {getStatusIcon(item.status)}
                                                {getStatusLabel(item.status)}
                                            </span>
                                        </Badge>
                                        <span className="text-sm text-gray-400 font-mono">#{index + 1}</span>
                                    </div>
                                    <CardTitle className="text-lg">
                                        {item.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

