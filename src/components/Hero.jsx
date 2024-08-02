import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Whatsapp from "../assets/images/Hero/whatsapp.png";
import Image from "../assets/images/Hero/sadia4.png"
const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleHireMeClick = () => {
    document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="overflow-hidden">
      <div className='fixed bottom-4 right-4 z-20'>
        <a href="https://api.whatsapp.com/send?phone=923168506149" target='_blank' rel='noopener noreferrer' className=''>
          <img src={Whatsapp} alt='WhatsApp' className="w-24 h-24" />
        </a>
      </div>
    
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div 
          data-aos="slide-left" 
          data-aos-delay="1200" 
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[50%] right-[-15%] text-[#EAF2FA]">
            Sadia<span className=" px-2 text-dark_primary">Murtaza</span>
          </h1>
        </div>
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>Hr Manager</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn" onClick={handleHireMeClick}>Hire Me</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            <div data-aos="fade-down" data-aos-delay="0" className="flex items-center w-80 gap-5">
              <h3>3+</h3>
              <p>Years of Experience in Human Resource (HR)</p>
            </div>
            <div data-aos="fade-down" data-aos-delay="300" className="flex items-center w-80 gap-5 flex-row-reverse text-right">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </div>
        <div className="md:h-[37rem] h-96">
          <img 
            src={Image} 
            data-aos="slide-up" 
            alt="Profile" 
            className="h-full w-full object-cover" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
