// src/pages/Home.tsx
import { Header, Hero, About, Skills, Projects } from "../features";
import { Footer } from "../shared/layout";

const Home = () => {
  return (
    <>
      <div className="m-4">
        <Header />
        <Hero />
        <About />
        <Skills />
        {/* Hide on screens smaller than 600px (sm = 640px in Tailwind) */}
        <div className="hidden sm:block">
          <Projects />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
