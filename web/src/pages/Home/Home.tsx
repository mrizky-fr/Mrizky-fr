import Footer from '../../components/layout/Footer/Footer';
import Header from '../../components/layout/Header/Header';
import { useReveal } from '../../hooks/useReveal';
import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

export default function Home() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
