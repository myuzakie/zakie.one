'use client'

import { motion, Variants } from 'framer-motion'
import { Bookmark, Heart, MessageCircle, Share2 } from 'lucide-react'
import Image from 'next/image'

interface InstagramPreviewCardProps {
  itemVariants: Variants;
  className?: string;
}

export default function InstagramPreviewCard({
  itemVariants,
  className = ''
}: InstagramPreviewCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={`bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-3 sm:p-4 md:p-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-120 ${className}`}
    >
      {/* User Info */}
      <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-300 rounded-full"></div>
          <div>
            <p className="font-semibold text-gray-900 text-xs sm:text-sm">Fons Mans</p>
            <p className="text-xs text-gray-500">Netherlands</p>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="relative mb-3 sm:mb-4 md:mb-6 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="https://i.pinimg.com/1200x/4a/64/30/4a643009a122e89d48794635365dd1c9.jpg"
          alt="Instagram feed style image"
          width={600}
          height={400}
          className="w-full h-48 sm:h-64 md:h-80 lg:h-100 object-cover"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 sm:p-3 md:p-4">
          <div className="text-white">
            <p className="text-xs sm:text-sm opacity-90 mb-1">Creative Content</p>
            <p className="text-base sm:text-lg md:text-xl font-semibold">Off-Grid</p>
          </div>
        </div>
      </div>

      {/* Interaction Icons */}
      <div className="flex items-center justify-between px-1 sm:px-2 md:px-3 py-1 sm:py-2">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-red-500 transition-colors cursor-pointer" />
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-blue-500 transition-colors cursor-pointer" />
          <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-green-500 transition-colors cursor-pointer" />
        </div>
        <Bookmark className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 hover:text-yellow-500 transition-colors cursor-pointer" />
      </div>
    </motion.div>
  )
}
