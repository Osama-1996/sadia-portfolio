import React from 'react';

// Define your skills array with skill objects
const skills = [
  {
    name: 'Technical Recruiting',
   
  },
  {
    name: 'Training and Development (HR)',
   
  },
  {
    name: 'Organizational Development',
   
  },
  {
    name: 'Employee Relations',
   
  },
  {
    name: 'Human Resources (HR)',
   
  },
  {
    name: 'IT Recruitment',
   
  },
  {
    name: 'Organizational Culture',
   
  },
  {
    name: 'HR Management',
   
  },
  {
    name: 'Human Resource Development',
   
  },
  {
    name: 'Coaching',
   
  },

  {
    name: 'Marketing Management',
   
  },
  {
    name: 'Project Management',
   
  },
  {
    name: 'Market Research',
   
  },
  {
    name: 'Digital Marketing',
  },
  {
    name: 'Business Planning',
  },
  {
    name: 'Sales Management',
  },
  {
    name: 'Marketing Strategy',
  },
  {
    name: 'Business Relationship Management',
  },
  {
    name: 'Account Management',
  },
  {
    name: 'Marketing',
  },
  {
    name: 'Microsoft Outlook',
  },
  {
    name: 'Business Development',
  },
  {
    name: 'Sales & Marketing',
  },
  {
    name: 'Performance Analysis',
  },
];

const SkillsSection = () => {
  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      <ins
        className="adsbygoogle"
        data-ad-client="ca-pub-5330892218225177"
        data-ad-slot="4496439745"
        data-ad-format="auto"
        data-full-width-responsive="true"
        style={{ display: 'block' }}
      ></ins>
      <amp-ad
        width="100vw"
        height="320"
        type="adsense"
        data-ad-client="ca-pub-5330892218225177"
        data-ad-slot="4496439745"
        data-auto-format="rspv"
        data-full-width=""
      >
        <div overflow=""></div>
      </amp-ad>
      <div className="md:container px-5 py-14">
        <h2 className="title aos-init aos-animate" data-aos="fade-down">Skills</h2>
        <h4 className="subtitle aos-init aos-animate" data-aos="fade-down">MY TOP SKILLS</h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 aos-init aos-animate"
            >
              {/* <div>
                <img
                  src={skill.imgSrc}
                  alt={skill.name}
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div> */}
              <div>
                <h6>{skill.name}</h6>
            
                <div className="text-xl absolute top-7 right-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
