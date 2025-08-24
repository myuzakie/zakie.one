import type { Metadata } from 'next'
import HeroSection from './(sections)/hero'
import AboutSection from './(sections)/about'

// Page-specific metadata
export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to my portfolio. I\'m a Full Stack Developer specializing in React, Next.js, and modern web technologies.',
  openGraph: {
    title: 'John Doe - Full Stack Developer & UI/UX Designer',
    description: 'Experienced Full Stack Developer creating exceptional digital experiences with modern technologies.',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Future sections will be added here */}
      {/* <ProjectsSection /> */}
      {/* <ContactSection /> */}
    </main>
  )
}
