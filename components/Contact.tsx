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
                            <Button
                                size="lg"
                                className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 font-semibold gap-2"
                            >
                                Get Started Now <ArrowRight className="h-5 w-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-6 py-3 font-semibold"
                            >
                                Schedule Demo
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card className="shadow-2xl">
                            <CardHeader>
                                <CardTitle className="text-2xl">Get a Quote</CardTitle>
                                <CardDescription>
                                    Fill out the form below and we'll get back to you with a customized quote for your cargo transportation needs.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="fullName">Full Name</Label>
                                            <Input
                                                id="fullName"
                                                type="text"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="company">Company</Label>
                                            <Input
                                                id="company"
                                                type="text"
                                                placeholder="Company name"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="from">From</Label>
                                            <Input
                                                id="from"
                                                type="text"
                                                placeholder="Origin city"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="to">To</Label>
                                            <Input
                                                id="to"
                                                type="text"
                                                placeholder="Destination city"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="cargoDetails">Cargo Details</Label>
                                        <Textarea
                                            id="cargoDetails"
                                            rows={4}
                                            placeholder="Describe your cargo (weight, dimensions, special requirements...)"
                                        />
                                    </div>

                                    <Button type="submit" className="w-full" size="lg">
                                        Get Quote
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

