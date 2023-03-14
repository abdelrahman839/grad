import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { steps } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const HTUCard = ({ step }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={step.step}
      iconStyle={{ background: step.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={step.icon}
            alt={step.step}
            className='w-full h-full object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{step.title}</h3>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {step.points.map((point, index) => (
          <li
            key={`step-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const HTU = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Step by step
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          How To Use.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {steps.map((step, index) => (
            <HTUCard
              key={`step-${index}`}
              step={step}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(HTU, "work");
