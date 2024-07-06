import CTA from "@/components/main/CTA";
import Hero from "@/components/main/Hero";
import Category from "@/components/main/Category";
import Collection from "@/components/main/Collection";
import Support from "@/components/main/Support";

export default function Home() {
  return (
    <div className="pt-28 md:pt-32">
      <Hero />

      <CTA />

      <Category />

      <Collection />

      <Support />
    </div>
  );
}
