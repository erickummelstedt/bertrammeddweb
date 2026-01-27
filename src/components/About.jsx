import './About.css';

export default function About({ cvData }) {
  return (
    <div className="about-section">
      <div className="about-container">
        <section className="bio-section">
          {cvData.bio && <p className="bio">{cvData.bio}</p>}
        </section>

        {cvData.experience && cvData.experience.length > 0 && (
          <section className="cv-section">
            <h2>Documentary Credits</h2>
            <div className="cv-items">
              {cvData.experience.map((item, index) => (
                <div key={index} className="cv-item">
                  <div className="cv-item-header">
                    <h3>{item.title}</h3>
                    {item.year && <span className="cv-year">{item.year}</span>}
                  </div>
                  {item.role && <p className="cv-role">{item.role}</p>}
                  {item.description && <p className="cv-description">{item.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {cvData.skills && cvData.skills.length > 0 && (
          <section className="cv-section">
            <h2>Skills & Equipment</h2>
            <div className="skills-grid">
              {cvData.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </section>
        )}

        {cvData.awards && cvData.awards.length > 0 && (
          <section className="cv-section">
            <h2>Awards & Recognition</h2>
            <div className="cv-items">
              {cvData.awards.map((award, index) => (
                <div key={index} className="cv-item">
                  <div className="cv-item-header">
                    <h3>{award.title}</h3>
                    {award.year && <span className="cv-year">{award.year}</span>}
                  </div>
                  {award.description && <p className="cv-description">{award.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
