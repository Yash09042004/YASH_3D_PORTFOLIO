import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services } from '../constants';
import {fadeIn,textVariant} from '../utils/motion';
import { style } from 'motion';
import { SectionWrapper } from '/src/hoc';



const ServiceCard = ({ index, title, icon, url }) => (
  <Tilt className='xs:w-[250px] w-full' options={{ max: 25, scale: 1.05 }}>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className='w-full green-pink-gradient p-[4px] rounded-[20px] shadow-card'
      >
      <motion.div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          whileHover={{ background: "linear-gradient(135deg, #360033 25%, #800080 50%, #e0b0ff 100%)" }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.5 }}
        />

        <motion.h3
          className='text-white text-[20px] font-bold text-center'
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
      </motion.div>
    </motion.div>
      </a>
  </Tilt>
);

const About = () => {
  return (

   <>
    <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText} text-center`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
         Overview
        </h2>
    </motion.div>
    <motion.p
  variants={fadeIn("","",0.1,1)}
  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto'
> 
"Never giving up is my power"<br/>
  I am a curious learner and very consistent in whatever I do. I am in love with competitive programming and now acquiring development skills.
  Drawing and chess are my hobbies.
</motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center align-center" >
  {services.map((service,index)=>(
    <ServiceCard key={service.title} index={index} {...service}/>
  ))}
</div>
 </>
    

  )
}

export default SectionWrapper (About,"about")