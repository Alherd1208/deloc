'use client'

import { Satellite, Shield, Search, Thermometer, Compass, Gauge, Coins, Gamepad2, ShoppingCart, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const features = [
    {
        icon: Search,
        title: 'Automatic Match',
        description: 'Automatic matching of orders with carriers for seamless logistics coordination.',
        color: 'primary'
    },
    {
        icon: Shield,
        title: 'Crypto Tracker',
        description: 'Private key-based data publishing to blockchain ensuring 100% trust and transparency.',
        color: 'secondary'
    },
    {
        icon: Satellite,
        title: 'A-GNSS Data',
        description: 'Advanced GPS tracking providing real-time location data with high precision.',
        color: 'primary'
    },
    {
        icon: Thermometer,
        title: 'Temperature Monitoring',
        description: 'Built-in thermometer for temperature-sensitive cargo tracking and monitoring.',
        color: 'secondary'
    },
    {
        icon: Compass,
        title: 'Gyroscope',
        description: 'Orientation and movement tracking for secure cargo handling.',
        color: 'primary'
    },
    {
        icon: Gauge,
        title: 'Barometer',
        description: 'Atmospheric pressure monitoring for optimal cargo conditions.',
        color: 'secondary'
    },
    {
        icon: Coins,
        title: '$DLOG Coin',
        description: 'Native cryptocurrency for all platform transactions and rewards.',
        color: 'primary'
    },
    {
        icon: Gamepad2,
        title: 'Play to Earn',
        description: 'Tracker owners earn rewards through gamification and carrier earnings sharing.',
        color: 'secondary'
    },
    {
        icon: ShoppingCart,
        title: 'Trackers Marketplace',
        description: 'Buy, sell, and upgrade trackers to maximize your earnings.',
        color: 'primary'
    },
    {
        icon: Star,
        title: 'Decentralized Ratings',
        description: 'Transparent carrier and client rating system on the blockchain.',
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
                        Main Features
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Revolutionary logistics marketplace with crypto-powered tracking,
                        play-to-earn mechanics, and complete decentralization.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                            >
                                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                                    <CardHeader>
                                        <div className={`bg-${colorClass}-100 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center`}>
                                            <Icon className={`h-6 w-6 text-${colorClass}-600`} />
                                        </div>
                                        <CardTitle className="text-xl">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base leading-relaxed">
                                            {feature.description}
                                        </CardDescription>
                                        <Badge
                                            variant="secondary"
                                            className={`mt-4 bg-${colorClass}-100 text-${colorClass}-700 hover:bg-${colorClass}-200`}
                                        >
                                            {feature.color === 'primary' ? 'Core Feature' : 'Advanced'}
                                        </Badge>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

