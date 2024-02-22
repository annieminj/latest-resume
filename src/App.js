import NavBar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Services from './components/Services/services'
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import AboutMe from './components/About-Me/about-me';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <AboutMe />
      <Skills />
      <Works />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
