'use client'

import { Truck, Mail, Phone, MapPin } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container-custom py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Truck className="h-8 w-8 text-primary-400" />
                            <span className="text-2xl font-bold">Deloc</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Decentralized logistics marketplace where anyone can order transportation
                            of any product from anywhere to anywhere. Powered by $DLOG coin.
                        </p>
                        <div className="space-y-2 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>alherd.havartsou@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>+351913583824</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>Portugal, Lisbon</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Platform</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="#play-to-earn" className="hover:text-white transition-colors">Play to Earn</a></li>
                            <li><a href="#tokenomics" className="hover:text-white transition-colors">Tokenomics</a></li>
                            <li><a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Regions</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Georgia & Armenia</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Belarus & Russia</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Central Asia</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Azerbaijan & Turkmenistan</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Trackers Marketplace</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Whitepaper</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <Separator className="mt-12 bg-gray-800" />
                <div className="pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 Deloc. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto text-sm">
                                Privacy Policy
                            </Button>
                            <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto text-sm">
                                Terms of Service
                            </Button>
                            <Button variant="link" className="text-gray-400 hover:text-white p-0 h-auto text-sm">
                                Cookie Policy
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

