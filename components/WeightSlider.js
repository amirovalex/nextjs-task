'use client'
import { useState } from "react";

const WeightSlider = () => {
  const [weight, setWeight] = useState(167); 

  const calculateLoss = (currentWeight) => {
    return Math.round(currentWeight * 0.25); 
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-4">SELECT YOUR CURRENT WEIGHT</h2>
      <div className="relative w-full">
        <input
          type="range"
          min="100"
          max="300"
          step="1"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="w-full h-2 bg-gradient-to-r from-orange-400 via-yellow-300 to-blue-400 rounded-lg appearance-none cursor-pointer focus:outline-none
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md"
        />
        <p className="mt-4 text-lg font-semibold text-gray-700">
          Current Weight: <span className="text-blue-600">{weight} lbs</span>
        </p>
      </div>
      <div className="mt-6 p-4 bg-btnPrimary rounded-lg text-white font-bold text-lg">
        You could lose: {calculateLoss(weight)} lbs
      </div>
    </div>
  );
};

export default WeightSlider;