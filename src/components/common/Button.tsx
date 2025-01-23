import { HTMLMotionProps, motion } from "framer-motion"

type ButtonProps = {
  label: string,
  className: string,
} & HTMLMotionProps<'button'>
const Button = ({ label, className, ...rest }: ButtonProps) => {
  console.log({...rest})
  return (
    <motion.button
      className={className}
      {...rest}
    >
      {label}
    </motion.button>
  )
}

export default Button