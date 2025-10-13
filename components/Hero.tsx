'use client'

import { ArrowRight, MapPin, Shield, Zap, Truck, Globe, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { getImagePath } from '../lib/utils'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            {/* Generated background pattern */}
            <div className="absolute inset-0 opacity-30">
                <Image
                    src={getImagePath("/images/hero-background-pattern.png")}
                    alt="Background pattern"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-full blur-3xl"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            <div className="relative container-custom section-padding">
                <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center px-4 py-2 bg-primary-500/20 backdrop-blur-sm rounded-full border border-primary-400/30 mb-6"
                        >
                            <Globe className="h-4 w-4 mr-2 text-primary-300" />
                            <span className="text-sm font-medium text-primary-100">Decentralized Logistics Marketplace</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            <span className="text-white">Logistics Marketplace</span>
                            <br />
                            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                                Transport Anything
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                            Anyone can order transportation of any product from anywhere to anywhere.
                            Powered by crypto trackers with 100% blockchain trust, $DLOG coin, and automatic carrier matching.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-primary-500/25 gap-3"
                                >
                                    Get Started <ArrowRight className="h-5 w-5" />
                                </Button>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg"
                                >
                                    Watch Demo
                                </Button>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-3 gap-8">
                            {[
                                { icon: MapPin, label: 'A-GNSS Tracking', color: 'primary' },
                                { icon: Shield, label: 'Blockchain Trust', color: 'secondary' },
                                { icon: Zap, label: 'Auto Matching', color: 'primary' }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className={`bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/20 backdrop-blur-sm border border-${item.color}-400/30 rounded-2xl p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className={`h-8 w-8 text-${item.color}-400`} />
                                    </div>
                                    <p className="text-sm text-gray-300 font-medium">{item.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        {/* Generated Dashboard Mockup */}
                        <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-4 shadow-2xl overflow-hidden">
                            <Image
                                src={getImagePath("/images/hero-dashboard-mockup.png")}
                                alt="Delog Dashboard Interface"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-2xl"
                                priority
                            />

                            {/* Live indicator overlay */}
                            <div className="absolute top-8 right-8 flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-white text-sm font-medium">Live Dashboard</span>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-gradient-to-br from-primary-400/20 to-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-2xl p-4"
                        >
                            <Shield className="h-8 w-8 text-primary-400" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-4 -left-4 bg-gradient-to-br from-secondary-400/20 to-secondary-500/20 backdrop-blur-sm border border-secondary-400/30 rounded-2xl p-4"
                        >
                            <Globe className="h-8 w-8 text-secondary-400" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
