'use client'

import { Upload, Users, Truck, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const steps = [
    {
        icon: Upload,
        title: 'Submit Cargo Details',
        description: 'Upload your cargo information including dimensions, weight, destination, and special requirements through our intuitive platform.'
    },
    {
        icon: Users,
        title: 'Auto Driver Matching',
        description: 'Our AI algorithm instantly searches and matches verified drivers based on route optimization, capacity, and reliability scores.'
    },
    {
        icon: Truck,
        title: 'Real-time Tracking',
        description: 'Monitor your cargo with GNSS tracking technology, receiving live updates on location, estimated arrival, and route progress.'
    },
    {
        icon: CheckCircle,
        title: 'Blockchain Confirmation',
        description: 'Secure delivery confirmation with immutable blockchain records, ensuring transparency and proof of successful transportation.'
    }
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="section-padding bg-gray-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        How Deloc Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Simple, secure, and efficient cargo transportation in four easy steps.
                        From upload to delivery, we handle everything with cutting-edge technology.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                                    <CardHeader className="pb-4">
                                        <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                            <Icon className="h-8 w-8 text-primary-600" />
                                        </div>
                                        <Badge variant="default" className="w-8 h-8 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-bold">
                                            {index + 1}
                                        </Badge>
                                        <CardTitle className="text-xl">
                                            {step.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base leading-relaxed">
                                            {step.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>

                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                        <div className="w-8 h-0.5 bg-gradient-to-r from-primary-300 to-primary-500"></div>
                                    </div>
                                )}
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Button size="lg" className="px-8 py-4">
                        Start Your First Shipment
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

