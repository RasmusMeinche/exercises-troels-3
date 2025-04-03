import { useState } from "react";
import ThreeDots from "./ThreeDots";
import ThreeWatches from "./ThreeWatches";

function Hero() {
  const [watchColor, setWatchColor] = useState("navy");

  const handleColorChange = (color) => {
    setWatchColor(color);
  };

  return (
    <div className="grid grid-cols-[minmax(20px,0.2fr)_1fr_minmax(20px,0.2fr)] bg-[#B6CCDA]">
      <section className="col-2 text-white">
        <div className="grid grid-cols-[auto_auto] mt-4">
          <div>
            <h1 className="font-bold text-7xl">The Perfect Moment</h1>
            <h2 className="text-7xl w-3xl leading-[1.2] mt-4">
              Between Past and Future
            </h2>
            <button className="mt-8 text-2xl px-16 py-3 border-white border-3 rounded-full">
              Buy Now
            </button>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-full"
              src={`/images/${watchColor}.png`}
              alt={watchColor}
            />
            <ThreeDots selectedColor={watchColor} onColorChange={handleColorChange} />
          </div>
        </div>
        <ThreeWatches onColorChange={handleColorChange} />
      </section>
    </div>
  );
}

export default Hero;