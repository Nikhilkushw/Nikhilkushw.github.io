import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particles from "./utils/particles";
import { useCallback } from "react";

function App() {
  const location = useLocation();
  console.log(location);

  const renderParticleInHomePage = location.pathname === "/";
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="App">
      {/* Particles js */}
      {renderParticleInHomePage && (
        <Particles id="tsparticles" options={particles} init={particlesInit} />
      )}

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className="App__main-page-content">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/resume" element={<Resume />} />
          <Route index path="/skills" element={<Skills />} />
          <Route index path="/portfolio" element={<Portfolio />} />
          <Route index path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
