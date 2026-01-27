import { useState } from 'react';
import GridItem from './GridItem';
import VideoPlayer from './VideoPlayer';
import PhotoGallery from './PhotoGallery';
import './Portfolio.css';

export default function Portfolio({ content }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  // Combine highlighted and gallery items into one array
  const allItems = [
    ...(content.highlighted || []),
    ...(content.gallery || [])
  ];

  return (
    <div className="portfolio-section">
      <section className="all-work-section">
        <div className="grid">
          {allItems.map(item => (
            <GridItem 
              key={item.id} 
              item={item} 
              onClick={handleItemClick}
              showDescription={true}
            />
          ))}
        </div>
      </section>

      {selectedItem && selectedItem.type === 'video' && (
        <VideoPlayer video={selectedItem} onClose={closeModal} />
      )}

      {selectedItem && selectedItem.type === 'photos' && (
        <PhotoGallery item={selectedItem} onClose={closeModal} />
      )}
    </div>
  );
}
