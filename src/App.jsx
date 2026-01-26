import HeroSection from './componets/HeroSection';
import ReasonsSection from './componets/ReasonsSection';

function App() {
  return (
    <main className="bg-slate-900 min-h-screen w-full selection:bg-pink-500 selection:text-white">
      <HeroSection />
      <ReasonsSection />
    </main>
  );
}

export default App;