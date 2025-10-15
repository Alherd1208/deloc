'use client'

import { Satellite, Shield, Search, Thermometer, Compass, Gauge, Coins, Gamepad2, ShoppingCart, Star, Globe, Droplets } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const features = [
    {
        icon: Search,
        title: 'Automatic Match',
        description: 'Automatic matching of orders and carriers for seamless logistics coordination.',
        color: 'primary'
    },
    {
        icon: Shield,
        title: 'Crypto Tracker',
        description: 'Crypto tracker with private key to publish data to blockchain with 100% trust.',
        color: 'secondary'
    },
    {
        icon: Satellite,
        title: 'A-GNSS Data',
        description: 'GPS, Glonass, Galileo, BeiDou data + GSM towers locations for precise tracking.',
        color: 'primary'
    },
    {
        icon: Thermometer,
        title: 'Thermometer',
        description: 'Built-in temperature monitoring for temperature-sensitive cargo. Operating range: -40°C to +60°C for battery and modem.',
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
        icon: Droplets,
        title: 'Humidity Sensor',
        description: 'Humidity monitoring for moisture-sensitive cargo and optimal storage conditions.',
        color: 'primary'
    },
    {
        icon: Coins,
        title: '$DLOG Coin',
        description: '$DLOG coin for all transactions within the logistics marketplace.',
        color: 'primary'
    },
    {
        icon: Gamepad2,
        title: 'DePin App',
        description: 'DePin app for tracker owners with trackers marketplace.',
        color: 'secondary'
    },
    {
        icon: ShoppingCart,
        title: 'Trackers Marketplace',
        description: 'Trade your trackers and upgrade them to earn more.',
        color: 'primary'
    },
    {
        icon: Star,
        title: 'Decentralized Ratings',
        description: 'Decentralized carrier/client ratings system.',
        color: 'secondary'
    },
    {
        icon: Globe,
        title: 'Connectivity',
        description: 'Satellite Internet + Cat-NB, Cat-M connectivity for global coverage.',
        color: 'primary'
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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

