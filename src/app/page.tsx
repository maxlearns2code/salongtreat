import BottomBar from "@/components/BottomBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-background">
      <Header />
      
      <Hero />

      <Services />

      <BottomBar />
    </main>
  );
}
