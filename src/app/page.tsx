import { Causes } from "@/components/causes";
import { FeaturesCarousel } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { TrendingCampaigns } from "@/components/trending-campaigns";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturesCarousel />
      <TrendingCampaigns />
      <Causes />
      <Footer />
    </main>
  );
}
