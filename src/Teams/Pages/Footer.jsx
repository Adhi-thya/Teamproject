import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const Footer = () => {
  return (
    <div className='color'>
      <div class="container">
  <div class="row">
    <div class="col">
    <span className='team'>team</span><span className='dot'>.</span>
        <div>
        <span className="t-con">Collaboration platform for mordern team </span>
        </div>
    </div>
    <div class="col comp">
      <h3 className='company'>Company</h3>
      <div className="com-des">
        <h1 className="des1">Product</h1>
        <h1 className="des1">Blog</h1>
        <h1 className="des1">Support</h1>
      </div>
    </div>
    <div class="col comp">
      <h3 className='company'>Features</h3>
      <div className="com-des">
        <h1 className="des1">Screen Sharing</h1>
        <h1 className="des1">Blog</h1>
        <h1 className="des1">Support</h1>
      </div>
    </div>
    <div class="col comp">
      <h3 className='company'>Contact Us</h3>
      <div className="com-des">
        <h1 className="des1">info@teamapp.com</h1>
        <h1 className="des1">1-800-200-300</h1>
        <h1 className="des1">1010 Sunset Blv.<br/>Palo Alto, California</h1>
      </div>
    </div>
    <div class="col comp">
      <h3 className='company'>Stay up to date </h3>
      <div className="com-des">
        <h1 className="des1">Subscribe to our newseller</h1>
        <input type="text" className='email' placeholder='Email' />
      </div>
    </div>
  </div>
</div>
<div className="end">
  <h3>© Copyright Team Inc.</h3>
</div>
    </div>
  )
}

export default Footer
