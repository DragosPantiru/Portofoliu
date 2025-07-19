
import "./Education.scss"
import EducationBox from './EducationBox'
import { motion, useInView } from "framer-motion"
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const prop = [{ id: crypto.randomUUID(), name: "Bachelor’s degree in system engineering", subTitle: "TECHNICAL UNIVERSITY GHEORGHE ASACHI IASI, FACULTY OF AUTOMATIC CONTROL AND COMPUTER ENGINEERING", years: "2019-2023", text: "In these 4 years of college, I learned: C, C ++, SQL, graphic design in AutoCAD, manipulation of ABB robots through the RAPID language, programming in FreeRTOS, HTML, CSS, JavaScript, Java, PHP, networking concepts.", adress: "https://ac.tuiasi.ro/en/home/" },
//{ id: crypto.randomUUID(), name: "Master–Machine Learning, Robotics and Control", subTitle: "TECHNICAL UNIVERSITY GHEORGHE ASACHI IASI, FACULTY OF AUTOMATIC CONTROL AND COMPUTER ENGINEERING", years: "2023-ongoing", text: "In this master we learn fundamental concepts of machine learning, design and implementation of intelligent systems, modelling robotic systems, artificial intelligence-based techniques for robotic systems, applications in robotics.", adress: "https://ac.tuiasi.ro/studii/masterat/invatare-automata-robotica-si-control/" },
{ id: crypto.randomUUID(), name: "Certiﬁcate in Mathematics and Intensive I.T. ", subTitle: "INFORMATICS LICEUM GRIGORE C. MOISIL ", years: "2014 - 2018", text: "I studied level 1 mathematics and computer science (C ++), I also obtained a certiﬁcate in which I learned and used the SQL and HTML to create a website.", adress: "https://liis.ro/" },
{ id: crypto.randomUUID(), name: "Other credentials", subTitle: "IBM Skill Build  Web Development Fundamentals ", years: "February 28, 2024", text: "https://www.credly.com/badges/2ef39f0f-7558-4bbe-b827-2c89f4c71d6e/public_url", adress: "https://www.credly.com/badges/2ef39f0f-7558-4bbe-b827-2c89f4c71d6e/public_url" }]

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },

    },
};

function Education1() {
    const ref = useRef()
    const isInView = useInView(ref, { margin: "-100px" })
    return (
        <motion.div className="education"
            variants={variants}
            initial="initial"
            // animate="animate"
            // whileInView="animate"
            ref={ref}
            animate={isInView && "animate"}
        >
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="people.png" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "rgb(255, 165, 0)" }}>
                            Education
                        </motion.b>
                    </h1>

                </div>

            </motion.div>

            <motion.ul className="listContainer" variants={variants}>
                {prop.map((i) => {
                    return <EducationBox  {...i} key={i.id} />
                })}
            </motion.ul>


        </motion.div>
    )
}

export default Education1
