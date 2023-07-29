import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
            <div className="hero-left">
                <div className="hero-title">
                    <p className='title'>Instant collaboration<br/> for remote teams</p>
                </div>
                <br/>
                <div className="hero-des">
                    <span>All-in-one place for your remote team to <br/>
                    chat,collaborate and track project programs.</span>
                </div>
                <br/>
                <div>
                    <input type='text' className='in' placeholder='Email'/>
                    <button className='btnn'>Get early access</button>
                </div>
            </div>
        </div>
        <br/>
        <br/>
    </section>
  )
}

export default Hero
