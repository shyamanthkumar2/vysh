import { useState } from 'react';
import './styles.css';
import './Cake.css'; // Add this import
import GiftBox from './components/GiftBox';
import Balloons from './components/Balloons';
import Confetti from './components/Confetti';
import MessageCard from './components/MessageCard';
import PhotoFrame from './components/PhotoFrame';
import Cake from './components/Cake'; // Add this import
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  // Add these two new state variables
  const [showCake, setShowCake] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const handleGiftOpen = () => {
    setIsOpen(true);
    setTimeout(() => setShowMessage(true), 1500);
    setTimeout(() => setShowPhoto(true), 3000);
    setTimeout(() => setShowCake(true), 20000); // Add this line to show cake after 5 seconds
  };

  // Add this new handler
  const handleCutComplete = () => {
    setShowFinal(true);
  };

  return (
    <div className="app">
      {/* Music Player remains completely unchanged */}
      <MusicPlayer />
      
      <Confetti active={isOpen || showFinal} /> {/* Updated to include showFinal */}
      <Balloons count={20} />
      
      <h1 className="title">Happy Birthday To My Lovely Mardhal vyshuuuu! ❤️😘💖</h1>
      
      <div className="gift-container">
        {!isOpen ? (
          <GiftBox onClick={handleGiftOpen} />
        ) : (
          <div className="opened-gift">
            {showMessage && <MessageCard />}
            {showPhoto && <PhotoFrame />}
            {/* Add Cake component here */}
            {showCake && <Cake onCutComplete={handleCutComplete} />}
          </div>
        )}
      </div>
      
      {/* Add final animation */}
      {showFinal && (
        <div className="final-animation">
          <h2>Wishing you endless happiness!</h2>
          <div className="floating-hearts">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="heart-emoji">💖</div>
            ))}
          </div>
        </div>
      )}
      
      <div className="hearts">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="heart"></div>
        ))}
      </div>
    </div>
  );
}