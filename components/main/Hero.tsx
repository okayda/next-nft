import HeroText from "../sub/HeroContent/HeroText";
import HeroGlobe from "../sub/HeroContent/HeroGlobe";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="md:flex md:items-center md:justify-evenly xl:justify-between">
        <HeroText />

        <HeroGlobe />
      </div>
    </section>
  );
}
