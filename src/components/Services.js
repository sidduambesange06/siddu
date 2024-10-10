import React from 'react';
// icons
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants'; // Ensure that fadeIn is correctly imported and structured

// services data
const services = [
  {
    name: 'Development',
    description:
      'Culpa anim amet ipsum pariatur nostrud. Mollit velit adipisicing dolor ipsum eu non in duis mollit id in consequat nulla voluptate. Id laborum ullamco ea velit sunt dolore mollit consequat quis velit est. Lorem duis labore sunt sunt ad.',
    link: 'Learn more',
  },
  {
    name: 'Data analytics',
    description:
      'Culpa anim amet ipsum pariatur nostrud. Mollit velit adipisicing dolor ipsum eu non in duis mollit id in consequat nulla voluptate. Id laborum ullamco ea velit sunt dolore mollit consequat quis velit est. Lorem duis labore sunt sunt ad.',
    link: 'Learn more',
  },
  {
    name: 'UI/UX Design',
    description:
      'Culpa anim amet ipsum pariatur nostrud. Mollit velit adipisicing dolor ipsum eu non in duis mollit id in consequat nulla voluptate. Id laborum ullamco ea velit sunt dolore mollit consequat quis velit est. Lorem duis labore sunt sunt ad.',
    link: 'Learn more',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* Text Content - sliding from left */}
          <motion.div
            className='flex-1 flex justify-center items-center'
            initial='hidden'
            animate='show'
            variants={fadeIn('left', 0.3)} // Slide from left
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              <h2 className='h2 text-accent mb-6'>What I Do.</h2>
              <h3 className='h3 max-w-[455px] mb-16'>
              building web applications and currently intern working on Ai & Data science , constantly learning and adapting to new technologies.
              </h3>
              <button className='btn btn-sm'>See my work</button>
            </div>
          </motion.div>

          {/* Services List - sliding from right */}
          <motion.div
            className='flex-1'
            initial='hidden'
            animate='show'
            variants={fadeIn('right', 0.3)} // Slide from right
            viewport={{ once: false, amount: 0.3 }}
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a
                        href='#'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
