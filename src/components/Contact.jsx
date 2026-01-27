import './Contact.css';

export default function Contact({ contactInfo }) {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        
        <div className="contact-methods">
          {contactInfo.email && (
            <div className="contact-item">
              <h3>Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="contact-link">
                {contactInfo.email}
              </a>
            </div>
          )}

          {contactInfo.phone && (
            <div className="contact-item">
              <h3>Phone</h3>
              <a href={`tel:${contactInfo.phone}`} className="contact-link">
                {contactInfo.phone}
              </a>
            </div>
          )}

          {contactInfo.location && (
            <div className="contact-item">
              <h3>Location</h3>
              <p className="contact-text">{contactInfo.location}</p>
            </div>
          )}
        </div>

        {(contactInfo.vimeo || contactInfo.instagram || contactInfo.linkedin) && (
          <div className="social-links">
            <h3>Connect</h3>
            <div className="social-links-grid">
              {contactInfo.vimeo && (
                <a href={contactInfo.vimeo} target="_blank" rel="noopener noreferrer" className="social-link">
                  Vimeo
                </a>
              )}
              {contactInfo.instagram && (
                <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                  Instagram
                </a>
              )}
              {contactInfo.linkedin && (
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
