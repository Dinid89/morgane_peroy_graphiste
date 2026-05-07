
import HeroSection from "./components/HeroSection";
import HomeSection from "./components/HomeSection"
import Partenaires from "./components/Partenaires";
import AutoCarousel from "./components/Caroussel";

function Home() {
  return (
    <div>
      <HeroSection />
      <AutoCarousel />
      <HomeSection />
      <Partenaires />
    </div>
  );
}

export default Home;
