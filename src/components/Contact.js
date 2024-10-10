import React, { useRef } from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// emailjs
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef(); // create a reference to the form

  // Function to send email on form submission
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission
    
    emailjs.sendForm(
      'service_db9nte8', // Replace with your EmailJS Service ID
      'template_yur3rca', // Replace with your EmailJS Template ID
      form.current,
      'EqOHyIWRcLYJDZ7_x' // Replace with your EmailJS User ID
    )
    .then((result) => {
      console.log('Message Sent Successfully', result.text);
      alert('Message sent successfully!'); // show success message
    }, (error) => {
      console.log('Failed to send message', error.text);
      alert('Failed to send message. Please try again.');
    });

    // Clear the form after sending the message
    e.target.reset();
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
        {/* text */}
        <motion.div 
          variants={fadeIn('right', 0.2)} 
          initial='hidden'
          exit='exit' 
          whileInView={'show'} 
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>
              Get in touch
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Let's Work <br />together!!
            </h2>
          </div>
        </motion.div>

        {/* form */}
        <motion.form 
          ref={form} // attach form reference
          onSubmit={sendEmail} // handle form submission
          variants={fadeIn('left', 0.2)} 
          initial='hidden'
          exit='exit' 
          whileInView={'show'} 
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 border rounded-lg flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input 
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all rounded-lg' 
            type='text' 
            placeholder='Your name' 
            name='name' // Add name attribute for EmailJS to capture
            required 
          />
          <input 
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all rounded-lg' 
            type='email' 
            placeholder='Your email' 
            name='email' // Add name attribute for EmailJS to capture
            required 
          />
          <textarea 
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12 rounded-lg' 
            placeholder='Your message' 
            name='message' // Add name attribute for EmailJS to capture
            required 
          ></textarea>
          <button className='btn btn-lg rounded-lg' type='submit'>
            Send message
          </button>
        </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
