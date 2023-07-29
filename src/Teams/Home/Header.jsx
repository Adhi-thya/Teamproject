import React from 'react'
import './Header.css'
import Hero from './Hero'
const Header = () => {
  return (
    <div className='body'>
      <section className="h-wrapper">
        <div className='flexCenter paddings innerWidth h-container '>
          <h1 className='team'>team</h1>
          <span className='dot'>.</span>
          
            <div className='flexCenter h-menu'>
                <a className='aa' href=''>Product</a>
                <a className='aa' href=''>Blog</a>
                <a className='aa' href=''>Support</a>
                <a className='aa' href=''>Login</a>
                <button className='button'>
                    Get Access
                </button>
            </div>
        </div>
      </section>
      <Hero/>
    </div>
  )
}

export default Header
