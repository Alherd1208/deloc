'use client'

import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <section id="contact" className="section-padding bg-gradient-to-br from-primary-600 to-primary-800">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Transform Your Logistics?
                        </h2>
                        <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                            Join thousands of businesses already using Deloc for secure,
                            transparent, and efficient cargo transportation across Europe and Asia.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4 text-primary-100">
                                <Mail className="h-5 w-5" />
                                <span>contact@deloc.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-primary-100">
                                <Phone className="h-5 w-5" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-4 text-primary-100">
                                <MapPin className="h-5 w-5" />
                                <span>Berlin, Germany</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
                                Get Started Now <ArrowRight className="h-5 w-5" />
                            </button>
                            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                                Schedule Demo
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Get a Quote
                        </h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Company name"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        From
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Origin city"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        To
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                        placeholder="Destination city"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Cargo Details
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="Describe your cargo (weight, dimensions, special requirements...)"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                            >
                                Get Quote
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
