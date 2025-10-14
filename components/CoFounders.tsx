'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { getImagePath } from '../lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Trophy, Briefcase, Globe } from 'lucide-react'

const founders = [
    {
        name: "Alherd Havartsou",
        role: "Founder & CEO",
        shortBio: "Founder & CEO of the Baboon play to earn game",
        detailedBio: "His last startup Baboon started as usual play to earn game. And during first 7 months engaged 7M of users all over the world. With 35% 7 day retention what is super high value for the games. Now he is doing 2 more startups in web3 as a founder & CEO. Alherd Havartsou is a versatile software engineer and game developer with extensive experience in C++, Unreal Engine, and blockchain technologies. With a background in architecture and over seven years in software development, he has contributed to projects ranging from AAA titles like FIFA21 to blockchain-integrated shooters such as Kiraverse.",
        image: "/images/cofounder1.jpg",
        achievements: ["7M users in 7 months", "35% 7-day retention", "FIFA21 contributor", "Kiraverse developer"],
        expertise: ["Game Development", "Blockchain", "C++", "Unreal Engine"]
    },
    {
        name: "Pavel Volkov",
        role: "Co-Founder & CTO",
        shortBio: "Electronics engineer and founder of WILDSYNC",
        detailedBio: "Pavel Volkov is an electronics engineer and founder of WILDSYNC, a boutique brand creating unique audio synthesis and processing gear loved by artists and sound engineers around the world — including RHCP's Josh Klinghoffer. With hands-on experience in everything from CNC and 3D printer design to microcontroller programming, Pavel brings a maker's mindset and deep hardware expertise to every project.",
        image: "/images/pavel_volkov.png",
        achievements: ["WILDSYNC founder", "Hardware systems expert", "CNC & 3D printing", "Microcontroller programming"],
        expertise: ["Electronics", "Hardware Design", "Manufacturing", "Audio Engineering"]
    },
    {
        name: "Nikita Shevchenko",
        role: "Co-Founder & COO",
        shortBio: "Founder and leader of WEST MATTERHORN group of companies",
        detailedBio: "I am the founder and leader of WEST MATTERHORN group of companies. We are engaged in logistics and multimodal transportation, but essentially we are creating a system that connects people, businesses and countries. I am building a company not for volumes, but for sustainability. For me, logistics is not just delivery, but management of capital, time and reputation. I believe that a strong business should be predictable, even in an unpredictable world.",
        image: "/images/cofounder3.jpg",
        achievements: ["WEST MATTERHORN founder", "Multimodal logistics", "7+ years experience", "Process optimization"],
        expertise: ["Logistics", "Operations", "Analytics", "Digitalization"]
    }
]

export default function CoFounders() {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-primary-500/20 backdrop-blur-sm rounded-full border border-primary-400/30 mb-6">
                        <Users className="h-4 w-4 mr-2 text-primary-300" />
                        <span className="text-sm font-medium text-primary-100">Meet Our Team</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                            Co-Founders
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Our diverse team of industry experts brings together decades of experience in gaming,
                        hardware engineering, and logistics to revolutionize the transportation industry.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={founder.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-white/5 backdrop-blur-xl border-white/20 hover:bg-white/10 transition-all duration-300 group overflow-hidden">
                                <CardContent className="p-0">
                                    {/* Image Section */}
                                    <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                        <Image
                                            src={getImagePath(founder.image)}
                                            alt={founder.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            style={{
                                                objectPosition: 'center center',
                                                filter: 'contrast(1.15) saturate(1.05) brightness(1.05)',
                                                transform: 'scale(1.02)'
                                            }}
                                        />

                                        {/* Professional overlay for consistency */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

                                        {/* Subtle inner border for professional look */}
                                        <div className="absolute inset-3 border border-white/20 rounded-lg pointer-events-none" />

                                        {/* Role Badge */}
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-primary-500/95 backdrop-blur-sm text-white border-primary-400/50 shadow-lg px-3 py-1 text-xs font-medium">
                                                {founder.role}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                                            {founder.name}
                                        </h3>

                                        <p className="text-primary-200 text-lg mb-4 font-medium">
                                            {founder.shortBio}
                                        </p>

                                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                            {founder.detailedBio.length > 200
                                                ? founder.detailedBio.substring(0, 200) + "..."
                                                : founder.detailedBio
                                            }
                                        </p>

                                        {/* Achievements */}
                                        <div className="mb-6">
                                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                                <Trophy className="h-4 w-4 text-primary-400" />
                                                Key Achievements
                                            </h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {founder.achievements.map((achievement, idx) => (
                                                    <div key={idx} className="text-xs text-white bg-primary-500/20 rounded-lg px-3 py-2 border border-primary-400/30 backdrop-blur-sm text-center">
                                                        {achievement}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Expertise */}
                                        <div>
                                            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                                                <Briefcase className="h-4 w-4 text-green-400" />
                                                Expertise
                                            </h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {founder.expertise.map((skill, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="text-xs text-white bg-green-500/20 rounded-lg px-3 py-2 border border-green-400/30 backdrop-blur-sm text-center"
                                                    >
                                                        {skill}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Team Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {[
                        { icon: Users, value: "3", label: "Co-Founders" },
                        { icon: Globe, value: "50+", label: "Years Combined Experience" },
                        { icon: Trophy, value: "7M+", label: "Users Reached" },
                        { icon: Briefcase, value: "10+", label: "Successful Projects" }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-2xl p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <stat.icon className="h-10 w-10 text-primary-400" />
                            </div>
                            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-gray-300 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
