import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EarPhone from '../assets/EarPhone.svg';
import Location from '../assets/Location.svg';
import coms from '../assets/coms.svg';
import CustomButton from './CustomButton';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="bg-transparent px-10 py-10 mb-[340px]" id="features" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
        Build Powerful AI Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <img src={coms} alt="Feature Icon" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Natural Language Processing</h3>
            <p className="text-gray-300 text-center">
            Build intelligent applications that understand and process
             human language with state-of-the-art LLMs.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={EarPhone} alt="Feature Icon" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">AI Agents & Automation</h3>
            <p className="text-gray-300 text-center">
            Create autonomous agents that can perform complex tasks 
            and make decisions using advanced reasoning
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src={Location} alt="Feature Icon" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Knowledge Integration</h3>
            <p className="text-gray-300 text-center">
            Connect your LLMs with external data sources and 
            knowledge bases for enhanced capabilities.
            </p>
          </motion.div>
          
        </div>
        <div className='flex justify-center mt-10'>
          <CustomButton text="Testimonials" link="testimonials" />
          </div>
      </div>
    </section>
  );
};

export default Features;
