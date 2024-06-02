import React from 'react'
import './Hero.scss'
import { motion } from "framer-motion"
const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }

}
const slideVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-200%",
        transition: {
            repeat: Infinity,
            duration: 20,
            repeatType: "mirror",
        }
    },


}
function Hero() {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate">
                    <motion.h2 variants={textVariants}>PANŢIRU DRAGOŞ</motion.h2>
                    <motion.h1 variants={textVariants}>Software developer and software engineer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>Latest Projects</motion.button>
                        <motion.button variants={textVariants}>Contact me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} src="scroll.png" alt="" animate="scrollButton" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={slideVariants} initial="initial" animate="animate">
                Front-end developer
            </motion.div>
            <motion.div className="imageContainer">
                <img src="hero1.png" alt="dasasdasd" />
            </motion.div>

        </div>
    )
}

export default Hero
