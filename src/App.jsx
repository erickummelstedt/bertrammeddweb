import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('Home');
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    fetch('/content/content.json')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading content:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!content) {
    return <div className="error">Failed to load content</div>;
  }

  const droneShots = content.cv?.droneShots || [];
  const isHomePage = currentSection === 'Home';
  const firstVideoThumbnail = content.highlighted?.[0]?.thumbnail || '';

  return (
    <div className="app">
      <header className={`hero-header ${isHomePage ? 'static-header' : ''}`}>
        {!isHomePage && droneShots.length > 0 ? (
          <div className="hero-video-background">
            <video
              key={currentVideo}
              className="header-background-video"
              autoPlay
              muted
              playsInline
              onEnded={() => setCurrentVideo((prev) => (prev + 1) % droneShots.length)}
            >
              <source src={droneShots[currentVideo]} />
            </video>
            <div className="hero-header-overlay"></div>
          </div>
        ) : isHomePage && firstVideoThumbnail ? (
          <div className="hero-video-background">
            <img src={firstVideoThumbnail} alt="" className="header-background-image" />
            <div className="hero-header-overlay"></div>
          </div>
        ) : null}
        <div className="hero-header-content">
          <h1>{content.siteTitle}</h1>
          {content.siteSubtitle && <p className="subtitle">{content.siteSubtitle}</p>}
          <Navigation currentSection={currentSection} onNavigate={setCurrentSection} />
        </div>
      </header>

      <main className="main-content">
        {currentSection === 'Home' && <Home content={content} />}
        {currentSection === 'About Me' && <About cvData={content.cv || {}} />}
        {currentSection === 'Contact' && <Contact contactInfo={content.contact || {}} />}
      </main>
    </div>
  );
}

export default App;
