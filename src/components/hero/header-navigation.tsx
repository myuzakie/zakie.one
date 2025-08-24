'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Instagram, Mail, Menu, MessageCircle, Twitter, X } from 'lucide-react'

interface HeaderNavigationProps {
  className?: string
}

export default function HeaderNavigation({ className = '' }: HeaderNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={`absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 py-4 sm:py-6 ${className}`}>
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 sm:space-x-8">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Muzakie.</h1>
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Work</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">services</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Faq</a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center space-x-3 lg:space-x-4">
          <MessageCircle className="w-6 h-6" />
          <Mail className="w-6 h-6" />
          <Instagram className="w-6 h-6" />
          <Twitter className="w-6 h-6" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 px-4 py-6"
        >
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors">Features</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors">How it works</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2 transition-colors">Pricing</a>
            <hr className="border-gray-200" />
            <button className="text-gray-700 hover:text-gray-900 font-medium py-2 text-left transition-colors">
              Log in
            </button>
            <button className="bg-black text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors w-full">
              Sign up
            </button>
          </div>
        </motion.div>
      )}
    </header>
  )
}
