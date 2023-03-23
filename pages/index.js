import { Inter } from 'next/font/google'
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
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Youth Service</title>
        <meta
          name="description"
          content=" Nous sommes Digital Youth Service Fr, une agence web spécialisée dans la création de solutions numériques pour les entreprises et les particuliers. Nous comprenons que votre entreprise a besoin d'une présence en ligne forte pour réussir et c'est là que nous intervenons."
        />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Feature />
        <CTA1 />
        <Projects />
        <Logo_Clouds />
        <Testimonials />
        <CTA3 />
      </main>

      <Footers />
    </>
  );
}
