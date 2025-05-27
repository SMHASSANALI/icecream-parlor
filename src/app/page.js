import Banner from "./components/home/Banner";
import IceCreamCarousel from "./components/home/Carousel";
import Gallery from "./components/home/Gallery";

export default function Home() {
  return (
    <div>
      <Banner />
      <Gallery />
      <IceCreamCarousel />
    </div>
  );
}
