import React from 'react'
import './About.css'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import data from "../../utils/team.json"
import { teamSlide } from '../../utils/teams'

const About = () => {
  return (
    <section className="ab-wrapper">
        <div className="paddings innerWidth ab-container">
            <div className="ab-head flexColStart">
                <span className='orangeText'>About us</span>
                <span className='primaryText'>Our Team</span>
            </div>

            <Swiper {...teamSlide}>
                
                {
                    data.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="flexColStart ab-card">
                             <img src={card.image} alt="home" />

                             <span className='secondaryText ab-price'>
                                    <span>
                                        {card.post}
                                    </span>
                             </span>

                            <span className='primaryText'>
                                {card.name}
                            </span>
                            

                            </div>
                       </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default About