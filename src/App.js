import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Projectlist from "./components/projects/Projectlist"
import Contact from "./components/Contact";
import Techstacks from "./components/Techstacks";
import About from "./components/About"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Hero/>
      <About/>
      <Projectlist/>
      <Techstacks/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
