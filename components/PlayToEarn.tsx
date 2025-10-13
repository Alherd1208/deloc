'use client'

import { motion } from 'framer-motion'
import { Gamepad2, TrendingUp, RefreshCw, Award } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const features = [
    {
        icon: TrendingUp,
        title: 'Earn from Carriers',
        description: 'As an owner of the tracker you will earn some % of the carrier earnings'
    },
    {
        icon: RefreshCw,
        title: 'Trade Your Trackers',
        description: 'You can trade your trackers and upgrade them to earn more'
    },
    {
        icon: Award,
        title: 'Trackers Marketplace',
        description: 'DePin app for tracker owners with trackers marketplace integration'
    }
]

export default function PlayToEarn() {
    return (
        <section id="play-to-earn" className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-400 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                        <Gamepad2 className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">DePin Ecosystem</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        DePin App for Tracker Owners
                    </h2>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        Join the revolution as a tracker owner and earn passive income through the DePin app with trackers marketplace
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {features.map((feature, index) => {
                        const Icon = feature.icon

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full hover:bg-white/15 transition-all duration-300">
                                    <CardHeader>
                                        <div className="bg-white/20 rounded-full p-3 w-14 h-14 mb-4 flex items-center justify-center">
                                            <Icon className="h-7 w-7 text-white" />
                                        </div>
                                        <CardTitle className="text-white text-xl">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-gray-200 text-base">
                                            {feature.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">How DePin App Works</h3>
                        <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                            As an owner of the tracker you will earn some % of the carrier earnings. You can trade your trackers and upgrade them to earn more.
                            The DePin app provides a complete marketplace for tracker owners to maximize their earning potential through the logistics network.
                        </p>
                        <Button
                            size="lg"
                            className="bg-white text-primary-900 hover:bg-gray-100 px-8 py-4 font-semibold"
                        >
                            Learn More About DePin App
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

