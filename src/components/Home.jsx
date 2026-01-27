import { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import GridItem from './GridItem';
import './Home.css';

export default function Home({ content }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const youngWilders = content.highlighted?.[0];
  const allOtherVideos = [
    ...(content.highlighted?.slice(1) || []),
    ...(content.gallery || [])
  ];

  const contactInfo = content.contact || {};

  return (
    <div className="home-section">
      {/* Hero Video */}
      {youngWilders && (
        <div className="hero-video-container">
          <div className="video-embed-wrapper">
            <iframe
              src={`${content.youngWildersUrl}?autoplay=1&loop=0&autopause=0`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={youngWilders.title}
            />
          </div>
        </div>
      )}

      {/* Video Grid */}
      {allOtherVideos.length > 0 && (
        <div className="videos-grid-section">
          <div className="videos-grid">
            {allOtherVideos.map((item) => (
              <GridItem
                key={item.id}
                item={item}
                onClick={() => setSelectedVideo(item)}
                showDescription={false}
              />
            ))}
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div className="home-contact-section">
        <div className="home-contact-container">
          <h2>Get in Touch</h2>
          
          <div className="home-contact-grid">
            {contactInfo.email && (
              <div className="home-contact-item">
                <span className="contact-label">Email</span>
                <a href={`mailto:${contactInfo.email}`} className="contact-value">
                  {contactInfo.email}
                </a>
              </div>
            )}

            {contactInfo.phone && (
              <div className="home-contact-item">
                <span className="contact-label">Phone</span>
                <a href={`tel:${contactInfo.phone}`} className="contact-value">
                  {contactInfo.phone}
                </a>
              </div>
            )}

            {contactInfo.location && (
              <div className="home-contact-item">
                <span className="contact-label">Location</span>
                <span className="contact-value">{contactInfo.location}</span>
              </div>
            )}
          </div>

          {(contactInfo.vimeo || contactInfo.instagram || contactInfo.linkedin) && (
            <div className="home-social-links">
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
          )}
        </div>
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayer
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
}
