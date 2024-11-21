'use client'
import { useRef } from "react";

const ImageSlider = () => {

  return (
    <div className="mx-auto p-4 max-w-7xl">

      <div className="relative overflow-hidden">
        <div
          className="grid grid-cols-3 gap-4 overflow-hidden scroll-smooth"
          style={{
            gridAutoFlow: "column",
            gridAutoColumns: "100%",
          }}
        >
          {[
            "/weight-loss-before-and-after-02.webp",
            "/weight-loss-before-and-after-03.webp",
            "/weight-loss-before-and-after-06.webp",
          ].map((src, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold"
        >
          &lt;
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;