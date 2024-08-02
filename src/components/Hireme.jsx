import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const HireMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const handleHireMeClick = () => {
    document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="bg-bg_light_primary my-8">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">Hire Me</h2>
        <h4 className="subtitle" data-aos="fade-down">FOR YOUR PROJECTS</h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse">
        
          <div 
            data-aos="fade-left" 
            className="border-2 border-dark_primary max-w-sm p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">
            Looking for a dedicated and experienced HR manager? Let's work together to build a stronger, more efficient team. Contact me today to discuss how I can contribute to your organization's success.
            </p>
            <br />
            <button className="btn bg-dark_primary text-white" onClick={handleHireMeClick} >Hire Me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
