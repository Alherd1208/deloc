'use client'

import { useState } from 'react'
import { Menu, X, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container-custom">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <Truck className="h-8 w-8 text-primary-600" />
                        <span className="text-2xl font-bold text-gray-900">Delog</span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a>
                        <a href="#play-to-earn" className="text-gray-600 hover:text-primary-600 transition-colors">Play to Earn</a>
                        <a href="#tokenomics" className="text-gray-600 hover:text-primary-600 transition-colors">Tokenomics</a>
                        <a href="#roadmap" className="text-gray-600 hover:text-primary-600 transition-colors">Roadmap</a>
                        <Button asChild>
                            <a href="#contact">Get Started</a>
                        </Button>
                    </nav>

                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <nav className="flex flex-col space-y-6 mt-6">
                                <a
                                    href="#features"
                                    className="text-lg text-gray-600 hover:text-primary-600 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Features
                                </a>
                                <a
                                    href="#play-to-earn"
                                    className="text-lg text-gray-600 hover:text-primary-600 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Play to Earn
                                </a>
                                <a
                                    href="#tokenomics"
                                    className="text-lg text-gray-600 hover:text-primary-600 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Tokenomics
                                </a>
                                <a
                                    href="#roadmap"
                                    className="text-lg text-gray-600 hover:text-primary-600 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Roadmap
                                </a>
                                <Button asChild className="w-full">
                                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>Get Started</a>
                                </Button>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

