import Landing from './pages/Landing';
import About from './pages/About';
import Services from './pages/Services/Services';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';

function App() {
    const pathname = window.location.pathname.toLowerCase();

    if (pathname === '/about') {
        return <About />;
    }
    if (pathname === '/services') {
        return <Services />;
    }
    if (pathname === '/gallery') {
        return <Gallery />;
    }
    if (pathname === '/contact') {
        return <Contact />;
    }

    return <Landing />;
}

export default App;
