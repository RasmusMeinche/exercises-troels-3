"use client";

export default function ThreeWatches({ onColorChange }) {
  return (
    <div className="grid grid-cols-2 items-center">
      <div>
        <p className="left">← 1 →</p>
      </div>
      <div className="flex justify-end gap-16 items-center relative">
      <span className="absolute w-[120px] h-[70px] rounded-[15px] top-8 left-[10rem] bg-[#434558]" ></span>
      <span className="absolute w-[120px] h-[70px] rounded-[15px] top-8 left-[19rem] bg-[#6ADDCC]"></span>
      <span className="absolute w-[120px] h-[70px] rounded-[15px] top-8 left-[28rem] bg-[#c0daea;]"></span>
        <img src="/images/ur1.png" alt="navy" className="cursor-pointer w-20 z-1" onClick={() => onColorChange("navy")} />
        <img src="/images/ur2.png" alt="mint" className="cursor-pointer w-20 z-1" onClick={() => onColorChange("mint")} />
        <img src="/images/ur3.png" alt="ocean" className="cursor-pointer w-20 z-1" onClick={() => onColorChange("ocean")} />
      </div>
    </div>
  );
}