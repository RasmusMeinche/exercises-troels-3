import ThreeDots from "./ThreeDots";
import ThreeWatches from "./ThreeWatches";


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
           <ThreeDots />
          </div>
        </div>
          <ThreeWatches />
      </section>
  );
}

