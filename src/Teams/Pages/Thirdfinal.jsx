import React from 'react'
import "./Third.css"
const Thirdfinal = () => {
  return (
  <div class="container">
    <div class="row">
        <div class="col">
        <div className="paddings innerWidth flexCenter ">
                <div className="flexCenter">
                    <div className="third-title">
                        <h1>Choose how you<br/>want to work</h1>
                    </div>
                    <div className="third-des">
                        <p>In Team, you’ve got all the flexibility to work when, <br/>where and how it’s best for you. You can easily chat,<br/>send audio and video clips, or hop on a huddle to<br/>talk things out live.</p>
                        
                    </div>
                    <div className="second-con">
            <a href="/" className='learn'>Learn more </a>
            <svg  className='arrow' xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
<path d="M20.1484 14.2549H6.38594C5.69844 14.2549 5.13594 14.8174 5.13594 15.5049C5.13594 16.1924 5.69844 16.7549 6.38594 16.7549H20.1484V18.9924C20.1484 19.5549 20.8234 19.8299 21.2109 19.4299L24.6859 15.9424C24.9234 15.6924 24.9234 15.3049 24.6859 15.0549L21.2109 11.5674C20.8234 11.1674 20.1484 11.4549 20.1484 12.0049V14.2549Z" fill="#5468E7"/>
</svg>
          </div>
                    </div></div>
        </div>
        <div class="col">
        <div className="image-con">
                        <img className='th-first' src="./image1.png" alt="" />
                        <img className='th-second' src="./image2.png" alt="" />
                    </div>
        </div>
    </div>
    
    </div>
  )
}

export default Thirdfinal
