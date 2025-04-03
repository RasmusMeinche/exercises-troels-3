"use client";

export default function ThreeWatches() {
    return (
            <div className="grid grid-cols-2 items-center">
              <div>
                <p className="left">← 1 →</p>
              </div>
                <div className="flex justify-center gap-16 items-center">
                    <span></span>
                    <span></span>
                    <span></span>
                    <img src="/images/ur1.png" alt="small-watch-black" />
                    <img src="/images/ur2.png" alt="small-watch-green" />
                    <img src="/images/ur3.png" alt="small-watch-pink" />
              </div>
            </div>
    );
  }
  

