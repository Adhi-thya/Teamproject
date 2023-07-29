import React from 'react'
import './Last.css'
import {Swiper,SwiperSlide,useSwiper} from "swiper/react"
import { Card } from 'react-bootstrap'
import "swiper/css"
import { sliderSettings } from './Common'
import data from './Slider.json'
import ReactStars from 'react-stars'
const Last = () => {
  return (
    <div className='container'>
        <section >
            <div className="paddings innerWidth r-container">
              <div className='last'>
                <h1>What people say about Team</h1>
              </div>
              <div className="r-wrapper">
              <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                  data.map((Card,i)=>(
                    <SwiperSlide key={i}>
                      <div className="card">
                        <ReactStars count={5} size={25} edit={true}  color2='#FFBA79'/>
                        <p className="card-content">{Card.content}</p>
                        <span className="card-name">{Card.name}</span>
                        <span className='card-pos'>{Card.pos}</span>
                      </div>
                      
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              </div>
            </div>
            
        </section>
        <br/>
        <br/>

    </div>

  )
}

export default Last
const SliderButtons=()=>
{
  const swiper=useSwiper();
  return
  (
    <div className="r-button">
      hii
      <button><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M14.6667 6.66663L5.33334 16L14.6667 25.3333M5.33334 16H26.6667" stroke="#5468E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
    </div>
  )
}
