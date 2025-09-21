'use client'

import { Upload, Users, Truck, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

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
                                <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                                        <Icon className="h-8 w-8 text-primary-600" />
                                    </div>
                                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
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
                    <button className="btn-primary">
                        Start Your First Shipment
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
