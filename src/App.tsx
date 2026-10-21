import { useMemo, useState } from 'react';
import { Faq } from './components/Faq';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { MakeItYours } from './components/MakeItYours';
import { Moods } from './components/Moods';
import { NavBar } from './components/NavBar';
import { Rooms } from './components/Rooms';
import { SavedMeals } from './components/SavedMeals';
import { DEFAULT_BUBBY_COLOR, type BubbyColorId } from './data/bubbyColors';
import { BubbyColorContext } from './lib/bubbyColorContext';

function App() {
  const [colorId, setColorId] = useState<BubbyColorId>(DEFAULT_BUBBY_COLOR);
  const bubbyColor = useMemo(() => ({ colorId, setColorId }), [colorId]);

  return (
    <BubbyColorContext.Provider value={bubbyColor}>
      <div className="site-shell">
        <NavBar />
        <main>
          <Hero />
          <HowItWorks />
          <Rooms />
          <MakeItYours />
          <SavedMeals />
          <Moods />
          <Faq />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </BubbyColorContext.Provider>
  );
}

export default App;
