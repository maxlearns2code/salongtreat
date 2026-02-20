import BottomBar from "@/components/BottomBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-background">
      <Header />
      
      <Hero />

      {/* Services Section Spacehoder for scrolling */}
      <div className="h-screen bg-transparent" />

      <BottomBar />
    </main>
  );
}
