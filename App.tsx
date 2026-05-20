import Landing from './pages/Landing';
import About from './pages/About';

function App() {
    const pathname = window.location.pathname.toLowerCase();

    if (pathname === '/about') {
        return <About />;
    }

    return <Landing />;
}

export default App;
