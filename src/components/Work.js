import React from 'react';
// motion 
import { motion } from 'framer-motion';
// img
import img1 from '../assets/portfolio-img1.png';
import img2 from '../assets/portfolio-img2.png';
import img3 from '../assets/portfolio-img3.png';

import { fadeIn } from '../variants';

const Work = () => {
  return (
    <section className='section' id='work'>
      {/* Center-align container, full viewport height */}
      <div className='container mx-auto min-h-screen flex flex-col justify-center items-center'>
        {/* Flex row with reduced gap between left and right content */}
        <div className='flex flex-col lg:flex-row gap-y-10 lg:gap-x-8 justify-center items-center'>

          {/* Left side - text and image 1 with animation on scroll */}
          <motion.div
            variants={fadeIn('right', 0.2)} 
            initial='hidden'
            exit='exit' 
            whileInView={'show'} 
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10 items-center text-center'
          >
            {/* Text content */}
            <div className='text-center'>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                work.
              </h2>
              <p className='max-w-sm mb-12'>
  Building visually appealing and functional digital experiences. Check out my latest projects which are listed below for more click the below link.
</p>

              {/* GitHub link button */}
              <a href='https://github.com/sidduambs?tab=repositories' target='_blank' rel='noopener noreferrer'>
                <button className='btn btn-sm'>View all projects</button>
              </a>
            </div>

            {/* Image 1 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 rounded-xl'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500 rounded-xl' src={img1} alt=''/>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white'>Portfolio Website</span>
              </div>
            </div>
          </motion.div>

          {/* Right side - two images (Shifted slightly upwards) */}
          <motion.div
            initial='hidden'
            whileInView={'show'}
            variants={fadeIn('left', 0.2)} 
            exit='exit' 
            viewport={{ once: false, amount: 0.3 }} 
            className='flex-1 flex flex-col gap-y-10 items-center'
            style={{ marginTop: '-30px' }}  // Shifting the right content upwards
          >
            {/* Image 2 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 rounded-xl'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500 rounded-xl' src={img2} alt=''/>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Web Development</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white'>E-commerce Platform</span>
              </div>
            </div>

            {/* Image 3 */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 rounded-xl'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500 rounded-xl' src={img3} alt=''/>
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Graphic Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-3xl text-white'>Branding Design</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
