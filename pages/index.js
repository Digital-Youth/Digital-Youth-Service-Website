import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/navbar'
import Hero from '@/components/Hero/hero'
import Footers from '@/components/Footers/footers'
import Logo_Clouds from '@/components/Logo_Clouds/logoClouds'
import CTA1 from '@/components/CTA/cta1'
import CTA2 from '@/components/CTA/cta2'
import Feature from '@/components/Feature/features'
import Projects from '@/components/Project/projects'
import Testimonials from '@/components/Testimonials/testimonial'
import CTA3 from '@/components/CTA/cta3'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <CTA1 />
      <Projects />
      <Logo_Clouds />
      <Testimonials />
      <CTA3 />
      <Footers />
    </>
  );
}
