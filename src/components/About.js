import React from 'react';
// CountUp
import CountUp from 'react-countup';
// Intersection Observer
import { useInView } from 'react-intersection-observer';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* Image */}
          <motion.div 
            className='flex-1 bg-about bg-contain bg-no-repeat h-[800px] w-[60%] mix-blend-lighten bg-top'
            initial='hidden'
            animate={inView ? 'show' : ''}
            variants={fadeIn('right', 0.3)}
            viewport={{ once: false, amount: 0.3 }}
          ></motion.div>
          
          {/* Text */}
          <motion.div 
            className='flex-1 text-right'
            initial='hidden'
            animate={inView ? 'show' : ''}
            variants={fadeIn('left', 0.5)}
          >
            <div className='flex-1'>
              <h2 className='h2 text-accent'>About Me</h2>
              <h3 className='h3 mb-4'>
              "I AM A PASSIONATE DATA SCIENCE AND AI INTERN WITH OVER A YEAR OF EXPERIENCE IN WEB DESIGN"
              </h3>
              <p className='mb-6'>
                <CountUp start={inView ? 0 : null} end={1} duration={3} /> MY JOURNEY HAS BEEN ENRICHED BY COUNTLESS HACKATHONS WHERE I’VE HONED MY SKILLS IN BUILDING CREATIVE, USER-FRIENDLY SOLUTIONS. WHETHER IT'S CRAFTING SEAMLESS WEBSITES OR DIVING INTO DATA ANALYTICS, I THRIVE ON PROBLEM-SOLVING AND LEARNING NEW TECHNOLOGIES.
                </p>
              <div className='flex gap-x-8 items-center'>
                <button className='btn btn-lg'>Contact me</button>
                {/* Provide a valid href or replace with a button */}
                <a href='https://github.com/yourusername' className='text-gradient btn-link'>
                  My Portfolio
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
