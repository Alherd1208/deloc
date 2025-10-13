'use client'

import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function Contact() {
    return (
        <section id="contact" className="section-padding bg-gradient-to-br from-primary-600 to-primary-800">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Join the Logistics Marketplace?
                        </h2>
                        <p className="text-xl text-primary-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Join the decentralized logistics marketplace where anyone can order transportation of any product from anywhere to anywhere.
                            Powered by crypto trackers, $DLOG coin, and automatic carrier matching.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            <div className="flex flex-col items-center gap-4 text-primary-100">
                                <div className="bg-primary-500/20 rounded-full p-4">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <p>alherd.havartsou@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4 text-primary-100">
                                <div className="bg-primary-500/20 rounded-full p-4">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-semibold">Phone</p>
                                    <p>+351913583824</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4 text-primary-100">
                                <div className="bg-primary-500/20 rounded-full p-4">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-semibold">Location</p>
                                    <p>Lisbon, Portugal</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 font-semibold gap-2"
                            >
                                Get Started Now <ArrowRight className="h-5 w-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary-600 px-6 py-3 font-semibold"
                            >
                                Schedule Demo
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

