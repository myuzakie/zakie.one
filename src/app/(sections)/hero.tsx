'use client'

import { motion } from 'framer-motion'
import {
  HeaderNavigation,
  HeroContent,
  PlatformIcons,
  InstagramPreviewCard,
  containerVariants,
  itemVariants
} from '@/components/hero'



export default function HeroSection() {
  return (
    <section className="min-h-screen h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px] bg-gradient-to-br from-pink-200/40 to-orange-200/40 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] xl:w-[1000px] xl:h-[1000px] bg-gradient-to-r from-transparent via-purple-100/20 to-transparent rounded-full blur-3xl animate-spin" style={{animationDuration: '60s'}}></div>
      </div>

      {/* Header Navigation */}
      <HeaderNavigation />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen h-full flex items-center px-6 sm:px-8 lg:px-16 xl:px-20 2xl:px-18 py-20 sm:py-24 lg:py-32 xl:py-40 2xl:py-22">
        <div className="max-w-7xl mx-auto w-full h-full">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-12 sm:space-y-16">
            {/* Hero Content */}
            <div className="text-center px-2 sm:px-4">
              <HeroContent
                containerVariants={containerVariants}
                itemVariants={itemVariants}
              />
            </div>

            {/* Platform Icons and Preview - Mobile */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center justify-center space-y-12 sm:space-y-0 sm:space-x-12 px-4 sm:px-6"
            >
              {/* Platform Icons */}
               <div className="flex sm:flex-col items-center sm:items-start">
                 <PlatformIcons itemVariants={itemVariants} />
               </div>

              {/* Instagram Preview Card */}
              <div className="w-full max-w-sm sm:max-w-md">
                <InstagramPreviewCard itemVariants={itemVariants} />
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 xl:gap-20 2xl:gap-24 items-center min-h-[80vh]">
            {/* Left Content */}
            <HeroContent
              containerVariants={containerVariants}
              itemVariants={itemVariants}
            />

            {/* Right Content - Platform Icons and Preview */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative flex items-center justify-between h-full"
            >
              {/* Platform Icons */}
              <PlatformIcons itemVariants={itemVariants} />

              {/* Instagram Preview Card */}
              <InstagramPreviewCard itemVariants={itemVariants} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
