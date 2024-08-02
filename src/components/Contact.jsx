import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const ContactMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-dark_primary text-white" id="contact-us">
      <div style={{ position: 'fixed', zIndex: 9999, inset: '16px', pointerEvents: 'none' }}></div>
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">Contact Me</h2>
        <h4 className="subtitle" data-aos="fade-down">GET IN TOUCH</h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form data-aos="fade-up" className="flex-1 flex flex-col gap-5">
            <input 
              type="text" 
              name="from_name" 
              placeholder="Name" 
              required 
              className="border border-slate-600 p-3 rounded" 
            />
            <input 
              type="email" 
              name="user_email" 
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" 
              placeholder="Email Id" 
              required 
              className="border border-slate-600 p-3 rounded" 
            />
            <textarea 
              name="message" 
              placeholder="Message" 
              className="border border-slate-600 p-3 rounded h-44" 
              required 
            ></textarea>
            <button className="btn self-start bg-white text-dark_primary">Submit</button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            <div data-aos="fade-down" data-aos-delay="0" className="flex items-center gap-2">
              <h4 className="text-white">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"></path>
                </svg>
              </h4>
              <a className="font-Poppins" href="mailto:sadiasyed7676@gmail.com" target="_blank" rel="noopener noreferrer">sadiasyed7676@gmail.com</a>
            </div>
            <div data-aos="fade-down" data-aos-delay="430" className="flex items-center gap-2">
              <h4 className="text-white">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                </svg>
              </h4>
              <a className="font-Poppins" href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">+92-3168506149</a>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
