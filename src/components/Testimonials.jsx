import React, { useEffect } from 'react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'aos/dist/aos.css';
import AOS from 'aos';

SwiperCore.use([Pagination, EffectFade]);

const testimonialsData = [
  {
    text: "Sadia's expertise in talent acquisition transformed our hiring process. Her ability to identify and recruit top talent has significantly strengthened our team."
,
    name: '— Ali Khan, CEO of TechCorp',
  },
  {
    text: "Sadia's dedication to employee relations is unparalleled. She has a knack for resolving conflicts and creating a positive work environment.",
    name: '— Sara Ahmed, HR Director at Innovate Solutions',
  },
  {
    text: "Sadia's training programs have been a game-changer for our company. Our employees are more skilled and motivated, thanks to her efforts.",
    name: '— Michael Brown, Manager at Growth Inc.',
  },
  {
    text: "Working with Sadia has been a pleasure. Her professionalism and HR expertise have been invaluable to our organization's success.",
    name: '— Ayesha Malik, CEO of Enterprise Ltd.',
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="testimonials my-4">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">Testimonials</h2>
        <h4 className="subtitle" data-aos="fade-down">MY CLIENT REVIEWS</h4>
        <br />
        <Swiper
          direction="vertical"
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
          className=" h-[20rem] max-w-3xl my-6"
          data-aos="fade-up"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="duration-500 bg-bg_light_primary mx-8 border-2 p-8 h-full rounded-2xl flex items-center gap-6 border-slate-200 md:flex-row flex-col">
                {/* <img src={testimonial.imgSrc} alt="..." className="h-24" /> */}
                <div>
                  <p className="sm:text-base text-sm">{testimonial.text}</p>
                  <br />
                  <h6>{testimonial.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
