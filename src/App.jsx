import { useState } from 'react'


import Navbar from './navbar/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Education1 from './education/Education1';
import './App.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Hero from './hero/Hero';
import Parallax from './parallax/Parallax';
import Portfolio from './portfolio/Portfolio';
import Contact1 from './contact/Contact1';


const prop = [{ id: crypto.randomUUID(), name: "about", adress: "/" },
{ id: crypto.randomUUID(), name: "education", adress: "/education" },
{ id: crypto.randomUUID(), name: "projects", adress: "/projects" },
{ id: crypto.randomUUID(), name: "contact", adress: "/contact" }

];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="background">


      {/* <Routes>
        <Route path="/" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes> */}
      <section id="Homepage">
        <Navbar prop={prop} />
        <Hero />
      </section>
      <section id="Education" >
        <Parallax type={"Education"} />
      </section>
      <section >
        <Education1 />
      </section>
      <section id="Projects">
        <Parallax type={"Projects"} />
      </section>
      <section>
        <Portfolio />
      </section>
      <section>

      </section>
      <section>

      </section>



      <section id="Contact">
        <Contact1 />
      </section>
    </div>

  );
};

export default App
