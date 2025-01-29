import { motion } from "framer-motion";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import ParticleLeft from "./common/ParticleLeft";
import ParticleRight from "./common/ParticleRight";
import Navbar from "./Navbar/Navbar";
import Button from "./common/Button";
import { brandImgs } from "../utils/image";
import React from "react";

const Hero = () => {
  const heading = "Plan and navigate from idea to launch.";
  const words = heading.split(" ");
  const transition = { duration: 2, ease: [0.25, 0.1, 0.25, 1] };
  const variants = {
    hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
  };
  return (
    <div className="relative flex flex-col p-4 h-screen w-full bg-black overflow-x-hidden">
      <Navbar />

      {/* top light right */}
      <img
        src="src/assets/light-right.svg"
        className="absolute right-0 -top-4 z-[1]
        "
        alt="light-right"
      />
      {/* particles right  */}
      <ParticleRight
        fromX={35}
        fromY={-35}
        toX={-50}
        toY={50}
        duration={5}
        delay={0.1}
      />
      <ParticleRight
        fromX={40}
        fromY={-35}
        toX={-50}
        toY={50}
        duration={10}
        delay={0.2}
      />
      <ParticleRight
        fromX={10}
        fromY={-35}
        toX={-70}
        toY={50}
        duration={5}
        delay={0.2}
      />
      <ParticleRight
        fromX={18}
        fromY={-35}
        toX={-60}
        toY={50}
        duration={10}
        delay={0.3}
      />
      <ParticleRight
        fromX={20}
        fromY={-35}
        toX={-50}
        toY={50}
        duration={7}
        delay={0.4}
      />
      <ParticleRight
        fromX={25}
        fromY={-35}
        toX={-45}
        toY={50}
        duration={9}
        delay={0.4}
      />

      {/* top light left */}
      <img
        src="src/assets/light-left.svg"
        className="absolute left-0 -top-4 z-[1]
        "
        alt="light-right"
      />
      <ParticleLeft
        fromX={-10}
        fromY={-30}
        toX={100}
        toY={100}
        duration={5}
        delay={0.1}
      />
      <ParticleLeft
        fromX={-20}
        fromY={-30}
        toX={80}
        toY={80}
        duration={5}
        delay={0.2}
      />
      <ParticleLeft
        fromX={-30}
        fromY={-20}
        toX={80}
        toY={80}
        duration={7}
        delay={0.3}
      />
      <ParticleLeft
        fromX={-40}
        fromY={-25}
        toX={80}
        toY={80}
        duration={8}
        delay={0.4}
      />
      <ParticleLeft
        fromX={-50}
        fromY={-10}
        toX={80}
        toY={80}
        duration={9}
        delay={0.6}
      />
      <ParticleLeft
        fromX={-60}
        fromY={-10}
        toX={80}
        toY={80}
        duration={10}
        delay={0.7}
      />
      <ParticleLeft
        fromX={-60}
        fromY={-10}
        toX={80}
        toY={80}
        duration={11}
        delay={0.8}
      />

      {/* hero background image top left  */}
      <div className="hidden absolute md:block  opacity-[0.5] w-28 lg:w-48 top-28 left-0 lg:left-4  z-0">
        <motion.img
          style={{ willChange: "transform" }}
          animate={{
            translateY: [10, 0, -10, 0, 10],
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          src="src/assets/hero/keyboard-design.avif"
          alt="log"
        />
      </div>

      {/* hero background image top right  */}
      <div className="absolute hidden md:block top-12 lg:top-14 -right-3 lg:right-0 opacity-[0.5] w-40 lg:w-48 z-0">
        <motion.img
          style={{ willChange: "transform" }}
          animate={{
            translateX: [10, 0, -10, 0, 10],
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          src="src/assets/hero/menu.avif"
          alt="log"
        />
      </div>
      {/* hero background image bottom right  */}
      <div className="absolute hidden md:block top-[45%] lg:top-[70%] -right-64 lg:-right-20 w-96 overflow-hidden">
        <motion.img
          style={{ willChange: "transform" }}
          animate={{
            translateX: [10, 0, -10, 0, 10],
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          src="src/assets/hero/report.avif"
          width="100%"
          height="100%"
          alt="log"
        />
        <div className="absolute rotate-180 bg-custom-gradient2 h-full w-full top-0 left-0  z-10" />
      </div>
      {/* hero background image bottom left  */}
      <div className="absolute hidden md:block top-[45%] lg:top-[70%] -left-48 lg:-left-16 w-96 z-0">
        <motion.img
          style={{ willChange: "transform" }}
          animate={{
            translateX: [10, 0, -10, 0, 10],
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          src="src/assets/hero/report_1.avif"
          width="100%"
          height="100%"
          alt="log"
        />
        <div className="absolute bg-custom-gradient2 h-full w-full top-0 left-0  z-10" />
      </div>

      {/* hero main section */}
      <div
        className="mt-40 flex flex-col
      justify-center items-center  text-white z-10"
      >
        <div className="flex justify-center gap-2 items-center bg-dark10 p-2 rounded-2xl">
          <img
            src="src/assets/logo-secondary.svg"
            className="h-[24px] w-[24px]"
            alt="logo"
          />
          <p className="text-base">Manage projects end-to-end</p>
          <span className="bg-black flex p-1 rounded-full">
            <Icon icon="solar:arrow-right-outline" width="18" height="18" />
          </span>
        </div>
        <div className="flex flex-col justify-center items-center mt-4 md:mx-9 lg:mx-80">
          <motion.h1
            style={{ willChange: "transform" }}
            className="font-bold text-[36px] md:text-[68px] text-center leading-tight"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.08 }}
          >
            {words.map((word, index) => (
              <React.Fragment key={index}>
                <motion.span
                  style={{ willChange: "transform" }}
                  className="inline-block"
                  transition={transition}
                  variants={variants}
                >
                  {word}
                </motion.span>
                {index < words.length - 1 && " "}
              </React.Fragment>
            ))}
          </motion.h1>
          <p className="text-center text-darak06 mt-2 md:mx-6 lg:mx-9 text-lg">
            Create a clear roadmap, track progress, and smoothly guide your
            project from idea to successful launch.
          </p>
          <Button
            label="Get Started for Free"
            className="text-black  bg-white px-3 py-2 rounded-lg font-semibold mt-7 md:text-lg md:mt-9"
          />
          <span className="flex items-center gap-1 text-xs text-darak06 mt-4">
            <Icon icon="material-symbols-light:info-outline" /> No credit card
            required
          </span>
        </div>
        <div className="flex flex-col w-full md:mt-32">
          <p className="text-center text-lg mt-10 text-darak06">
            Trusted by 50,000+ businesses for innovative design and growth.
          </p>
          <div className="h-[5rem] w-full flex overflow-hidden relative z-50 mt-8">
            <motion.div
              style={{ willChange: "transform" }}
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              className="absolute   flex justify-center items-center w-fit gap-4"
            >
              {brandImgs.map((src, index) => (
                <div key={index} className="flex w-[10rem] object-contain ">
                  <img src={src} width="100%" height="100%" alt="logo" />
                </div>
              ))}
              {brandImgs.map((src, index) => (
                <div key={index} className="flex w-[10rem] object-contain ">
                  <img src={src} width="100%" height="100%" alt="logo" />
                </div>
              ))}
            </motion.div>
            <div className="absolute h-[5ren] inset-0 bg-custom-gradient" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
