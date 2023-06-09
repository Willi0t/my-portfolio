import { React, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between md:w-[80%] md:mr-[20px]"
    >
      <LiIcon referance={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transtion={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between m1-4 xs:ml-2">
          <Details
            type="frontend developer program"
            time="2022-2024"
            place="Hyper Island"
            info="Relevant courses included HTML CSS, web developement parctises, javascript, React, NextJs, NodeJS, Figma, working agile."
          />
          <Details
            type="in depth React course"
            time="2023"
            place="Udemy"
            info="in addition to our courses at hyper i decided to take a in depth course to further learn more about react."
          />
          <Details
            type="in depth Javasctipt course"
            time="2023"
            place="Udemy"
            info="in addition to our courses at hyper i decided to take a in depth course to further learn more about javascript."
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
