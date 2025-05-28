import Banner from "./components/home/Banner";
import IceCreamCarousel from "./components/home/Carousel";
import CTA from "./components/home/CTA";
import Gallery from "./components/home/Gallery";
import Location from "./components/home/Location";

export default function Home() {
  return (
    <div>
      <Banner />
      <Gallery />
      <IceCreamCarousel />
      <Location />
      <CTA />
    </div>
  );
}
