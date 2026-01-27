import './GridItem.css';

export default function GridItem({ item, onClick, showDescription = false }) {
  return (
    <div 
      className="grid-item"
      onClick={() => onClick(item)}
    >
      <div className="grid-item-image">
        <img src={item.thumbnail} alt={item.title} />
        <div className="grid-item-overlay">
          <h3 className="grid-item-title">{item.title}</h3>
          <div className="play-icon">
            {item.type === 'video' ? '▶' : '📷'}
          </div>
        </div>
      </div>
      {showDescription && item.description && (
        <div className="grid-item-info">
          <p className="grid-item-description">{item.description}</p>
        </div>
      )}
    </div>
  );
}
