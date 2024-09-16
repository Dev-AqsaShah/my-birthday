'use client';

import { useState } from 'react';

const BirthdayCard = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCelebrateClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 60000); // Confetti for 1 minute
  };

  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center">
      {/* Birthday message */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-500">Happy Birthday Aqsa🎂</h1>
        <h4 className='text-4xl font-bold to-blue-600'>september-17th</h4>
        {/* Celebrate Button */}
        <button
          onClick={handleCelebrateClick}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Let's Celebrate
        </button>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}vw`,
                animationDelay: `${Math.random() * 5}s`,
                backgroundColor: getRandomColor(),
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

// Generate random confetti color
function getRandomColor() {
  const colors = ['#FFCC00', '#FF6666', '#66FF66', '#66CCFF', '#FF66CC'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default BirthdayCard;
