'use client'

import { Satellite, Shield, Search, Clock, Globe, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
    {
        icon: Search,
        title: 'Auto Driver Search',
        description: 'AI-powered algorithm automatically finds the best drivers for your cargo based on route, capacity, and reliability scores.',
        color: 'primary'
    },
    {
        icon: Satellite,
        title: 'GNSS Tracking',
        description: 'Real-time GPS/GLONASS tracking with precise location data, route optimization, and delivery time predictions.',
        color: 'secondary'
    },
    {
        icon: Shield,
        title: 'Blockchain Confirmation',
        description: 'Immutable transaction records and smart contracts ensure transparency and trust in every delivery.',
        color: 'primary'
    },
    {
        icon: Globe,
        title: 'Europe & Asia Coverage',
        description: 'Extensive network spanning from Western Europe to Central Asia, covering major trade routes and corridors.',
        color: 'secondary'
    },
    {
        icon: Clock,
        title: 'Real-time Updates',
        description: 'Instant notifications about pickup, transit milestones, delays, and successful deliveries.',
        color: 'primary'
    },
    {
        icon: TrendingUp,
        title: 'Analytics Dashboard',
        description: 'Comprehensive insights into shipping patterns, costs, driver performance, and route efficiency.',
        color: 'secondary'
    }
]

export default function Features() {
    return (
        <section id="features" className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Advanced Logistics Technology
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Cutting-edge features that revolutionize cargo transportation with transparency,
                        efficiency, and security at the core of every shipment.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        const colorClass = feature.color === 'primary' ? 'primary' : 'secondary'

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className={`bg-${colorClass}-100 rounded-full p-3 w-12 h-12 mb-6 flex items-center justify-center`}>
                                    <Icon className={`h-6 w-6 text-${colorClass}-600`} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
