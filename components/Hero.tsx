'use client'

import { ArrowRight, MapPin, Shield, Zap, Truck, Globe, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
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
                            <span className="text-sm font-medium text-primary-100">Europe & Asia Connected</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                            <span className="text-white">Smart Cargo</span>
                            <br />
                            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                                Transportation
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                            Revolutionary logistics platform with AI-powered driver matching, real-time GNSS tracking,
                            and blockchain-verified deliveries. Transform your cargo operations today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-primary-500/25 flex items-center justify-center gap-3"
                            >
                                Get Started <ArrowRight className="h-5 w-5" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                            >
                                Watch Demo
                            </motion.button>
                        </div>

                        <div className="grid grid-cols-3 gap-8">
                            {[
                                { icon: MapPin, label: 'Real-time Tracking', color: 'primary' },
                                { icon: Shield, label: 'Blockchain Verified', color: 'secondary' },
                                { icon: Zap, label: 'Auto Driver Match', color: 'primary' }
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
                        {/* Main dashboard mockup */}
                        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-primary-500/90 to-primary-600/90 backdrop-blur-sm rounded-2xl p-6 text-white mb-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                                <div className="relative">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold">Live Dashboard</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="text-sm opacity-90">Live</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-sm">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold mb-1">1,247</div>
                                            <div className="opacity-80 text-xs">Active Shipments</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold mb-1">28</div>
                                            <div className="opacity-80 text-xs">Countries</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold mb-1">99.2%</div>
                                            <div className="opacity-80 text-xs">Success Rate</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Shipment tracking */}
                            <div className="space-y-3 mb-6">
                                {[
                                    { route: 'Berlin → Warsaw', status: 'In Transit', color: 'green', progress: 75 },
                                    { route: 'Istanbul → Almaty', status: 'Loading', color: 'blue', progress: 25 },
                                    { route: 'Prague → Kiev', status: 'Delivered', color: 'green', progress: 100 }
                                ].map((shipment, index) => (
                                    <motion.div
                                        key={shipment.route}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-3 h-3 bg-${shipment.color}-500 rounded-full ${shipment.status === 'In Transit' ? 'animate-pulse' : ''}`}></div>
                                                <span className="text-white font-medium">{shipment.route}</span>
                                            </div>
                                            <span className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded-full">
                                                {shipment.status}
                                            </span>
                                        </div>
                                        <div className="w-full bg-white/10 rounded-full h-1">
                                            <div
                                                className={`bg-gradient-to-r from-${shipment.color}-500 to-${shipment.color}-400 h-1 rounded-full transition-all duration-1000`}
                                                style={{ width: `${shipment.progress}%` }}
                                            ></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gradient-to-br from-secondary-500/20 to-secondary-600/20 backdrop-blur-sm border border-secondary-400/30 rounded-xl p-4 text-center">
                                    <TrendingUp className="h-6 w-6 text-secondary-400 mx-auto mb-2" />
                                    <div className="text-lg font-bold text-white">+24%</div>
                                    <div className="text-xs text-gray-300">This Month</div>
                                </div>
                                <div className="bg-gradient-to-br from-primary-500/20 to-primary-600/20 backdrop-blur-sm border border-primary-400/30 rounded-xl p-4 text-center">
                                    <Truck className="h-6 w-6 text-primary-400 mx-auto mb-2" />
                                    <div className="text-lg font-bold text-white">2.8k</div>
                                    <div className="text-xs text-gray-300">Active Drivers</div>
                                </div>
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
