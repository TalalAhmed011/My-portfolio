// src/App.jsx
import Hero from "./assets/components/hero";
import About from "./assets/components/about";
import Projects from "./assets/components/projects";
import Contact from "./assets/components/contact";
import Footer from "./assets/components/footer";
import Navbar from "./assets/components/navbar";
import Navbar from "./assets/components/navbar";


function App() {
  return (
    <>
    <Navbar/>
      <Hero />
      <Projects />
      <Contact/>
      <About />
      <Footer />
      
    </>
  );
}

export default App;
