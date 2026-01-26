import FinalAskSection from './componets/FinalAskSection';
import HeroSection from './componets/HeroSection';
import MemoryLane from './componets/MemoryLane';
import ReasonsSection from './componets/ReasonsSection';
import HighlightReel from './componets/HighlightReel';

function App() {
  return (
    <main className="bg-slate-900 min-h-screen w-full selection:bg-pink-500 selection:text-white">
      <HeroSection />
      <ReasonsSection />
      <MemoryLane/>
      <HighlightReel/>
      <FinalAskSection/>
    </main>
  );
}

export default App;