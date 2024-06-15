import React from 'react'
import "./Portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from 'react'
const items = [
  {
    id: crypto.randomUUID(),
    title: "WEB APPLICATION: Tufting spot",
    img: "proiect1.png",
    desc: "Objective: Development of a web application ”tufting spot”, in which I learned and applied the knowledge gained in the programming languages HTML, CSS, JavaScript and PHP. ",
    link: "https://github.com/DragosPantiru/AI.git"
  },
  {
    id: crypto.randomUUID(),
    title: "COMMUNICATIONS IN CONTROL SYSTEMS ",
    img: "proiect2.png",
    desc: " Objective: Gained expertise in the organization, functionality, and utilization of data communications across various layers of industrial control network management. Key Responsibilities: 1. Communication channel access technique (MAC): master/slave or token. 2. Node identification method. ",
    link: "https://github.com/DragosPantiru/AI.git"
  },
  {
    id: crypto.randomUUID(),
    title: "WEB APPLICATION/e-commerce: The Suitcase with books",
    img: "proiect3.png",
    desc: "It is an e-commerce platform for buying and reading print and digital books. We offer personalized recommendations, reader reviews, competitive prices, and fast delivery.",
    link: "https://github.com/DragosPantiru/e-commerce"
  },




]
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", " 300"])
  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.link}>See The Code</a></button>
          </motion.div>
        </div>



      </div>

    </section>
  );

}
function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX: scaleX }} className="progressBar">

        </motion.div>

      </div> {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}

    </div>
  )
}

export default Portfolio
