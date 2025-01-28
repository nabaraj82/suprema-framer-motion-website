import { motion } from "framer-motion";
type ParticleProps = {
  fromX: number;
  toX: number;
  fromY: number;
  toY: number;
    duration: number;
  delay: number,
};
const ParticleLeft = ({
  fromX,
  toX,
  fromY,
  toY,
  duration,
  delay,
}: ParticleProps) => (
  <motion.div
    style={{ willChange: "transform" }}
    initial={{ x: fromX, y: fromY, opacity: 1 }}
    animate={{
      x: toX,
      y: toY,
      opacity: 0,
      width: 0,
      height: 0,
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatType: "loop",
    }}
    className="absolute md:block  left-5 top-5 w-[4px] h-[4px] rounded-full bg-white"
  />
);

export default ParticleLeft;
