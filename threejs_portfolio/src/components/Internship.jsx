import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { intern } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Text } from "@react-three/drei";

const ServiceCard = ({ index, title2,icon  }) => (
  <Tilt className='xs:w-[356px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[10px] py-10 px-10 min-h-[100px] flex justify-evenly items-center flex-col'
      >
      
        <h2 className='text-white text-[28px] font-bold text-center'>
          {title2}
        </h2>
      </div>
    </motion.div>
  </Tilt>
);

const Internship = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Virtual Internships</p>
        <h2 className={styles.sectionHeadText}>Intern.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <i>
        •
Certification I have done till date to improve my skill set .
        </i>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {intern.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Internship, "Internships");
