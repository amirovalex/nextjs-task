'use client';
import { useState } from 'react';

const ImageSlider = () => {

  const images = [
    '/weight-loss-before-and-after-02.webp',
    '/weight-loss-before-and-after-03.webp',
    '/weight-loss-before-and-after-06.webp',
    '/weight-loss-before-and-after-02.webp',
    '/weight-loss-before-and-after-03.webp',
    '/weight-loss-before-and-after-06.webp',
  ];
  
  const imagesPerRow = 3; 
  const rows = images.reduce((rows, image, index) => {
    const rowIndex = Math.floor(index / imagesPerRow);
    if (!rows[rowIndex]) rows[rowIndex] = []; 
    rows[rowIndex].push(image);
    return rows;
  }, [])

  const totalRows = Math.ceil(images.length / imagesPerRow); 
  const [currentRow, setCurrentRow] = useState(0);

  const handleNext = () => {
    setCurrentRow((prevRow) => (prevRow + 1) % totalRows);
  };

  const handlePrev = () => {
    setCurrentRow((prevRow) => (prevRow === 0 ? totalRows - 1 : prevRow - 1)); 
  };

  return (
    <div className="mx-auto p-4 max-w-7xl">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentRow * 100}%)`,
            width: '100%', 
          }}
        >
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-3 gap-4 flex-shrink-0 w-full"
            >
              {row.map((src, index) => (
                <div key={index} className="overflow-hidden">
                  <img
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;