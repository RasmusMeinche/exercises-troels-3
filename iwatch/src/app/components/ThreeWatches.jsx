"use client";

export default function ThreeWatches({ onColorChange }) {
  return (
    <div className="grid grid-cols-2 items-center">
      <div>
        <p className="left">← 1 →</p>
      </div>
      <div className="flex justify-end gap-16 items-center">
        <img src="/images/ur1.png" alt="navy" className="cursor-pointer w-20" onClick={() => onColorChange("navy")} />
        <img src="/images/ur2.png" alt="mint" className="cursor-pointer w-20" onClick={() => onColorChange("mint")} />
        <img src="/images/ur3.png" alt="ocean" className="cursor-pointer w-20" onClick={() => onColorChange("ocean")} />
      </div>
    </div>
  );
}