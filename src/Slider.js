import React, { useEffect, useState } from 'react';

const quotes = [
  "Success in agriculture requires not only hard work but also wise management.",
  "Innovative solutions in farm management lead to sustainable agricultural development.",
  "Optimize your resources, increase productivity, and achieve greater profits through farm management.",
  "A good farmer is a good manager.",
  "Efficient farm management is the key to success in agriculture."
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      {quotes.map((quote, index) => (
        <p
          key={index}
          className={`quote ${index === currentIndex ? 'active' : ''}`}
        >
          {quote}
        </p>
      ))}
    </div>
  );
}
