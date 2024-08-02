// import components
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Skills />
      <Service />
      {/* <Projects /> */}
      <Testimonials />
      <Hireme />
      <Contact id="contact-us"/>
    </div>
  );
};

export default App;
