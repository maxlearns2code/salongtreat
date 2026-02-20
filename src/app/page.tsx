import BottomBar from "@/components/BottomBar";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      
      {/* Placeholder for Hero and Services to test scrolling */}
      <div className="h-[150vh] bg-background pt-32 px-5">
        <h1 className="font-serif text-4xl mb-6">Welcome to Salong Treat</h1>
        <p className="font-sans text-lg">Scroll down to see the header transform.</p>
      </div>

      <BottomBar />
    </main>
  );
}
