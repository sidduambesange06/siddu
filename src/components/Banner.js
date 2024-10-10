import React, { useState, useEffect } from 'react';
// images
import Image from '../assets/avatar.png';
// icons
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';
// variants (if needed)
import { fadeIn } from '../variants';

const Banner = () => {
  const welcomeText = `
    // Welcome to my world of code
    const role = "Ai&data science intern";
    const passion = "AI, Data Science, and Web Development";
    
    // Let's build something amazing!
  `;

  const [typedText, setTypedText] = useState(''); // Holds the text displayed during typing
  const [isTypingDone, setIsTypingDone] = useState(false); // Tracks if typing is complete

  useEffect(() => {
    let index = 0;
    const speed = 30; // Typing speed
    const typeQuote = () => {
      if (index < welcomeText.length) {
        setTypedText(prev => prev + welcomeText.charAt(index)); // Add one character at a time
        index++;
      } else {
        setIsTypingDone(true);
      }
    };
    const interval = setInterval(typeQuote, speed);
    return () => clearInterval(interval);
  }, [welcomeText]);

  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' 
    id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up',0.3)} 
              initial="hidden"
              whileInView={'show'} 
              viewport={{once: false, amount:0.7}} 
              className='text-[40px] lg:text-[80px] font-bold leading-[1]'>
              SIDDU <span>AMBESANGE</span>
            </motion.h1>
            <motion.div 
              variants={fadeIn('up',0.5)} 
              initial="hidden"
              whileInView={'show'} 
              viewport={{once: false, amount:0.7}} 
              className='mb-4 text-[50px] lg:text-[50px] font-secondary
              font-semibold uppercase leading-[1]'>
              <span className='text-white mr-2'>I am a</span>
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                  'Data Science Enthusiast',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            {/* Code Typing Welcome Quote */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 max-w-md mx-auto lg:mx-0 text-sm font-mono text-green-400'  // Code styling with mono font
            >
              <pre>{typedText}</pre> {/* Display the typed text */}
            </motion.div>

            <motion.div 
              variants={fadeIn('up',0.6)} 
              initial="hidden"
              whileInView={'show'} 
              viewport={{once: false, amount:0.7}} 
              className='flex max-w-max gap-x-4 items-center mb-10 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='https://yourportfolio.com' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>

            {/* socials */}
            <motion.div 
              variants={fadeIn('up',0.7)} 
              initial="hidden"
              whileInView={'show'} 
              viewport={{once: false, amount:0.7}} 
              className='flex text-[22px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://linkedin.com'>
                <FaLinkedin />
              </a>
              <a href='https://github.com'>
                <FaGithub />
              </a>
              <a href='https://twitter.com'>
                <FaTwitter/>
              </a>
            </motion.div>
          </div>

          {/* images */}
          <motion.div 
            variants={fadeIn('down',0.3)} 
            initial="hidden"
            whileInView={'show'} 
            className='hidden lg:flex flex-1 justify-end max-w-[600px]'>
            <img src={Image} alt="Avatar" className="w-[500px] h-[500px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
