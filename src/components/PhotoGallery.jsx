import { useState } from 'react';
import './PhotoGallery.css';

export default function PhotoGallery({ item, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % item.photos.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + item.photos.length) % item.photos.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrev();
    if (e.key === 'Escape') onClose();
  };

  return (
    <div 
      className="photo-gallery-overlay" 
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="photo-gallery-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="photo-display">
          <button className="nav-button prev" onClick={goToPrev}>‹</button>
          <img src={item.photos[currentIndex]} alt={`${item.title} - ${currentIndex + 1}`} />
          <button className="nav-button next" onClick={goToNext}>›</button>
        </div>

        <div className="photo-info">
          <h3>{item.title}</h3>
          <p className="photo-counter">{currentIndex + 1} / {item.photos.length}</p>
          {item.description && <p>{item.description}</p>}
        </div>

        <div className="thumbnail-strip">
          {item.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Thumbnail ${index + 1}`}
              className={index === currentIndex ? 'active' : ''}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
