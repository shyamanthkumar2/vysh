import { useState } from 'react';
import '../Cake.css';

export default function Cake({ onCutComplete }) {
  const [isCut, setIsCut] = useState(false);
  const [showWish, setShowWish] = useState(false);

  const handleCut = () => {
    setIsCut(true);
    setTimeout(() => setShowWish(true), 1000);
    setTimeout(() => onCutComplete(), 3000);
  };

  return (
    <div className={`cake-container ${isCut ? 'cut' : ''}`}>
      <div className="cake" onClick={!isCut ? handleCut : null}>
        <div className="cake-top">
          <div className="frosting"></div>
          {!isCut && (
            <>
              <div className="candle candle1">🎂</div>
              <div className="candle candle2">🎂</div>
            </>
          )}
        </div>
        <div className="cake-bottom"></div>
        {isCut && <div className="knife">🔪</div>}
      </div>
      
      {showWish && (
        <div className="final-wish">
          <h2>May all your dreams come true!</h2>
          <div className="hearts">💖💖💖</div>
        </div>
      )}
    </div>
  );
}