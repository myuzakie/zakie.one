'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
interface HeroContentProps {
  containerVariants: import('framer-motion').Variants;
  itemVariants: import('framer-motion').Variants;
  className?: string;
}



export default function HeroContent({
  containerVariants,
  itemVariants,
  className = ''
}: HeroContentProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`space-y-8 ${className}`}
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          The Simplest Way to Share Your Creativity Across Every Platform
        </h1>
      </motion.div>

      <motion.div variants={itemVariants}>
        <p className="text-xl text-gray-600 leading-relaxed">
          Streamline your creative process <span className="text-gray-400">and share your work with the world</span> in just a few clicks.
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button
          size="lg"
          className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Create once. Publish everywhere.
        </Button>
      </motion.div>
    </motion.div>
  )
}
