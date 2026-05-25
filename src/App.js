import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/about';
import WhyChooseUs from './components/whychooseus';
import Internships from './components/Internships';
import ITServices from './components/itservices';
import Partnership from './components/Partnership';
import Footer from './components/Footer';


function App()
{
  return (
    <div>
      <Navbar />
      <Hero   />
      <About  />
      <WhyChooseUs  />
      <Internships  />
      <ITServices   />
      <Partnership />
      <Footer  />
    </div>
  );
}

export default App;