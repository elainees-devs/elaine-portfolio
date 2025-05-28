// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { Home, About, Portfolio, Services, Contact } from "./pages";
import { AgriNext, Edusynx, MerExpress } from "./features/Projects";

function App() {
  return (
    <div className="text-white h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/projects/edusynx" element={<Edusynx />} />
        <Route path="/projects/agrinext" element={<AgriNext />} />
        <Route path="/projects/merexpress" element={<MerExpress />} />
      </Routes>
    </div>
  );
}

export default App;
