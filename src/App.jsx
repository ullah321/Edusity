import About from "./Components/About";
import Campus from "./Components/Campus";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Programme from "./Components/Programme";
import Testimonials from "./Components/Testimonials";
import Title from "./Components/Title";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Hero />
      <Title subTitle='OUR PROGRAMME' title='What We Offer' />
      <Programme />
      <About />
      <Title subTitle='GALLERY' title='Campus Photos' />
      <Campus />
      <Title subTitle='TESTIMONIALS' title='What Student`s Says' />
      <Testimonials />
      <Title subTitle='CONTACT US' title='Get In Touch' />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
