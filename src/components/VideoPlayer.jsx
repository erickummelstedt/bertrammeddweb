import { useState, useRef } from 'react';
import './VideoPlayer.css';

function getEmbedUrl(url) {
  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return {
      type: 'vimeo',
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?title=0&byline=0&portrait=0`
    };
  }
  
  // YouTube
  const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
  if (youtubeMatch) {
    return {
      type: 'youtube',
      embedUrl: `https://www.youtube.com/embed/${youtubeMatch[1]}`
    };
  }
  
  return null;
}

export default function VideoPlayer({ video, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  
  const embedInfo = video.videoUrl ? getEmbedUrl(video.videoUrl) : null;
  const isEmbed = embedInfo !== null;

  const togglePlay = () => {
    if (videoRef.current && !isEmbed) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="video-player-overlay" onClick={onClose}>
      <div className="video-player-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="video-wrapper">
          {isEmbed ? (
            <iframe
              src={embedInfo.embedUrl}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={video.title}
            />
          ) : (
            <video
              ref={videoRef}
              src={video.videoUrl}
              poster={video.thumbnail}
              onClick={togglePlay}
              onEnded={() => setIsPlaying(false)}
              controls
            />
          )}
        </div>
        {video.title && (
          <div className="video-info">
            <h3>{video.title}</h3>
            {video.description && <p>{video.description}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
