

export default function Hero() {
  return (
      <section className="hero">
        <div className="hero-content">
          <div className="hero-grid1">
            <h1>The Perfect Moment</h1>
            <h2>Between Past and Future</h2>
            <button>Buy Now</button>
          </div>
          <div className="hero-grid2">
            <img src="/images/watch.png" alt="Watch" />
            <img src="/images/ColorIndicator.png" alt="Watch" />
          </div>
            <div className="three-watches">
              <span></span>
              <span></span>
              <span></span>
              <img src="/images/ur1.png" alt="small-watch-black" />
              <img src="/images/ur2.png" alt="small-watch-green" />
              <img src="/images/ur3.png" alt="small-watch-pink" />
            </div>
            <p>← 1 →</p>
        </div>
      </section>
  );
}

