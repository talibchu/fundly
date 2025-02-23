import { FeaturesCarousel } from "@/components/features";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturesCarousel />
    </main>
  );
}
