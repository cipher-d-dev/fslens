import TopScenes from '@/components/scenes/TopScenes';
import AboutScene from '@/components/scenes/AboutScene';
import FeaturesScene from '@/components/scenes/FeaturesScene';
import BeforeAfterScene from '@/components/scenes/BeforeAfterScene';
import MarqueeScene from '@/components/scenes/MarqueeScene';
import GridGalleryScene from '@/components/scenes/GridGalleryScene';
import FooterScene from '@/components/scenes/FooterScene';
import KeepScrolling from '@/components/ui/KeepScrolling';
import Navbar from '@/components/ui/Navbar';
import ContactModal from '@/components/ui/ContactModal';
import Head from 'next/head';

export default function Home() {
  return (
    <main className="relative bg-black w-full min-h-screen">
      <Head>
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <Navbar />
      <TopScenes />
      <AboutScene />
      <FeaturesScene />
      <BeforeAfterScene />
      <MarqueeScene />
      <GridGalleryScene />
      <FooterScene />
      <KeepScrolling />
      <ContactModal />
    </main>
  );
}
