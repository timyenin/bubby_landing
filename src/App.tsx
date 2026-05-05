import { FeatureCards } from './components/FeatureCards';
import { FinalCTA } from './components/FinalCTA';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { MealDemo } from './components/MealDemo';
import { NavBar } from './components/NavBar';
import { PersonalityShowcase } from './components/PersonalityShowcase';
import { ProblemCards } from './components/ProblemCards';

function App() {
  return (
    <div className="site-shell">
      <NavBar />
      <main>
        <Hero />
        <ProblemCards />
        <FeatureCards />
        <MealDemo />
        <HowItWorks />
        <PersonalityShowcase />
        <FinalCTA />
      </main>
    </div>
  );
}

export default App;
