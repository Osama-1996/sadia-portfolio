import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const servicesData = [
  {
    delay: 0,
    title: 'Talent Acquisition',
    description: 'Efficiently sourcing, attracting, and hiring top talent to meet organizational needs. Utilizing advanced recruitment strategies and technologies to ensure a seamless hiring process and build a strong workforce.',
  },
  {
    delay: 600,
    title: 'Employee Relations',
    description: 'Fostering a positive work environment by addressing employee concerns, mediating conflicts, and promoting effective communication. Implementing policies and practices that enhance employee satisfaction and productivity.',
  },
  {
    delay: 1200,
    title: 'Training and Development',
    description: 'Designing and implementing comprehensive training programs to enhance employee skills and career growth. Ensuring continuous professional development to align with the organizations goals and improve overall performance.',
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">Services</h2>
        <h4 className="subtitle" data-aos="fade-down">WHAT I OFFER</h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {servicesData.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={service.delay}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none"
            >
            
              <h6 className="my-3">{service.title}</h6>
              <p className="leading-7">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
