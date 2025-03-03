import { motion } from 'framer-motion'

const AnimationWrapper = ({
    children, variants, initial = "hidden", animate = "visible", once = true
}) => {

    return (
        <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once }}
            transition={{duration: .7}}
            variants={variants}
            >
            {children}
        </motion.div>
    )
}

export default AnimationWrapper;