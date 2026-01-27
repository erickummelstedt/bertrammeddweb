import './Navigation.css';

export default function Navigation({ currentSection, onNavigate }) {
  const sections = ['Home', 'About Me', 'Contact'];

  return (
    <nav className="main-navigation">
      {sections.map(section => (
        <button
          key={section}
          className={currentSection === section ? 'active' : ''}
          onClick={() => onNavigate(section)}
        >
          {section}
        </button>
      ))}
    </nav>
  );
}
