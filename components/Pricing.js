import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-650 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-30 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Compétences
            </motion.h3>
           
          </ScrollAnimationWrapper>
        </div>
          <ScrollAnimationWrapper>
            <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
              <img
                src="/assets/Icon/react.gif"
                className="h-14 w-auto mt-4 lg:mt-2"
                title="ReactJS"
                alt=""
              />
              <img
                src="/assets/Icon/nextJs.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                title="NextJS"
                alt=""
              />
              <img
                src="/assets/Icon/node.png"
                title="NodeJS"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/git.png"
                className="h-10 w-auto mt-2 lg:mt-0"
                title="GIT"
                alt=""
              />
              <img
                src="/assets/Icon/MongoDB.png"
                title="MongoDB"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Pricing;
