import React, { useEffect, useRef } from "react";
import './Hero.css'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'
import SearchBar from "../SearchBar/SearchBar";

const Hero = () => {
  return (
    <section className="hero-wrapper ">
      <div className="paddings innerWidth flexCenter hero-container flexCenter">
      {/* Left Section */}
        <div className="flexColStart hero-left">
          <div className="paddings hero-title">
            <div className="orange-circle" />
            
            <motion.h1
            initial={{opacity: 0, y: "2rem"}}
            animate={{opacity: 1, y: 0}}
            transition={{
              duration: 2,
              type: "spring"
            }}
            >
              
              Discover The<br />
            Most Suitable <br />
            Property <br />For You</motion.h1>
          </div>

          <div className=" flexColStart hero-des">
            <span className='secondaryText'>Find a variety of properties that suit you very easily.</span>
            <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
          </div>

          <SearchBar />

          <div className="flexCenter stats">
          <div className="flexColCenter stat">
              <span> 
                <CountUp start={1} end={5} duration={2.5}/>
                <span>%</span>
              </span>
              <span className='secondaryText'>Down Payment</span>
            </div>
            <div className="flexColCenter stat">
              <span> 
                <CountUp start={0}/>
                <span>%</span>
              </span>
              <span className='secondaryText'>Installments from the developer</span>
            </div>
            <div className="flexColCenter stat">
              <span>
              <span>$</span>
                <CountUp start={90} end={102} duration={2.5}/>
                <span>K</span>
              </span>
              <span className='secondaryText'>Starting Price</span>
            </div>
          </div>
        </div>
      

      {/* Right Section */}
        <div className="flexCenter hero-right">
            <div className="image-container">
              <img src="r1.jpg" alt="" width={650} height={700}/>
            </div>
        </div>

        <div className="flexCenter">
            <div className="vid-container">
              <video src="./r9.mp4" autoPlay loop muted />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero