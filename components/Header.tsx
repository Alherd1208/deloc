'use client'

import { useState } from 'react'
import { Menu, X, Truck } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container-custom">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <Truck className="h-8 w-8 text-primary-600" />
                        <span className="text-2xl font-bold text-gray-900">Deloc</span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a>
                        <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors">How it Works</a>
                        <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">About</a>
                        <a href="#contact" className="btn-primary">Get Started</a>
                    </nav>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <nav className="flex flex-col space-y-4">
                            <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a>
                            <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors">How it Works</a>
                            <a href="#about" className="text-gray-600 hover:text-primary-600 transition-colors">About</a>
                            <a href="#contact" className="btn-primary inline-block text-center">Get Started</a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
