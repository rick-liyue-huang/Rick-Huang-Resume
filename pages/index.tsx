import type { NextPage } from 'next';
import Head from 'next/head';
import Contact from '../components/Contact';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Resume from '../components/Resume';
import ScrollToTop from '../components/ScrollToTop';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rick Huang Online Resume</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="global">
        <Intro />
        <Resume />
        <Project />
        <Features />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </div>
  );
};

export default Home;
