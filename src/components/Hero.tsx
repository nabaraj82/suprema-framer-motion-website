import { motion } from 'framer-motion';
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import ParticleLeft from "./common/ParticleLeft";
import ParticleRight from "./common/ParticleRight";
import Navbar from "./Navbar/Navbar";
import Button from "./common/Button";
import { brandImgs } from "../utils/image";

const Hero = () => {
  return (
    <div className="relative flex flex-col p-4 h-screen w-full bg-black">
      {/* top light right */}
      <img
        src="src/assets/light-right.svg"
        className="absolute right-0 -top-4
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
        className="absolute left-0 -top-4
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
      <Navbar />

      {/* hero main section for movile view */}
      <div className="mt-40 flex flex-col md:hidden justify-center items-center  text-white">
        <div className="flex justify-center gap-2 items-center bg-dark10 p-2 rounded-3xl">
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
        <div className="flex flex-col justify-center items-center mt-4">
          <h1 className="font-bold text-[36px] text-center leading-tight">
            Plan and navigate from idea to launch.
          </h1>
          <p className="text-center text-darak06 mt-2 text-lg">
            Create a clear roadmap, track progress, and smoothly guide your
            project from idea to successful launch.
          </p>
          <Button
            label="Get Started for Free"
            className="text-black bg-white px-3 py-2 rounded-lg font-semibold mt-7"
          />
          <span className="flex items-center gap-1 text-xs text-darak06 mt-4">
            <Icon icon="material-symbols-light:info-outline" /> No credit card
            required
          </span>
          <p className="text-center text-lg mt-10 text-darak06">
            Trusted by 50,000+ businesses for innovative design and growth.
          </p>
          <div className='h-[5rem] w-full flex overflow-hidden relative z-50 mt-8'>
            <motion.div
              initial={{x: 0}}
              animate={{ x: "-50%" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
              className='absolute top-0 left-0  flex justify-center items-center w-fit gap-4'>
              {
                brandImgs.map((src, index) => (
                  <div key={index} className='flex w-[10rem] object-contain '>
                      <img src={src} width="100%" height="100%" alt='logo' />
                  </div>
                ))
              }
              {
                brandImgs.map((src, index) => (
                  <div key={index} className='flex w-[10rem] object-contain '>
                      <img src={src} width="100%" height="100%" alt='logo' />
                  </div>
                ))
              }
             
            </motion.div>
            <div className='absolute h-[5ren] inset-0 bg-custom-gradient' />
      </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
