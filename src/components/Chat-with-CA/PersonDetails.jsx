import React from 'react'
import profile from '../../assets/profile.webp'
import './PersonDetails.scss'

function PersonDetails() {
  return (
    
    <div className="details">
        <div className="card">
            <div className="leftContent">
            <div className="imageContent">
                <img src={profile} alt="" />
                <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                </div>
                <p>1315 orders</p>
            </div>
            <div className="info">
                <a href="#">Deepikash</a>
                <span>Vedic, KP</span>
                <span>English, Hindi, Telugu</span>
                <span>Exp: 6 Years</span>
                <span className='free'>FREE <strike>20/min</strike></span>
            </div>
            </div>
            <div className="chatBtn">
                <i className="bi bi-check-circle-fill"></i>
                <button>Chat</button>
            </div>
        </div>
        <div className="card">
        <div className="leftContent">
            <div className="imageContent">
                <img src={profile} alt="" />
                <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                </div>
                <p>1315 orders</p>
            </div>
            <div className="info">
                <a href="#">Deepikash</a>
                <span>Vedic, KP</span>
                <span>English, Hindi, Telugu</span>
                <span>Exp: 6 Years</span>
                <span className='free'>FREE <strike>20/min</strike></span>
            </div>
            </div>
            <div className="chatBtn">
                <i className="bi bi-check-circle-fill"></i>
                <button>Chat</button>
            </div>
        </div>
        <div className="card">
        <div className="leftContent">
            <div className="imageContent">
                <img src={profile} alt="" />
                <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                </div>
                <p>1315 orders</p>
            </div>
            <div className="info">
                <a href="#">Deepikash</a>
                <span>Vedic, KP</span>
                <span>English, Hindi, Telugu</span>
                <span>Exp: 6 Years</span>
                <span className='free'>FREE <strike> 20/min</strike> </span>
            </div>
            </div>
            <div className="chatBtn">
                <i className="bi bi-check-circle-fill"></i>
                <button>Chat</button>
            </div>
        </div>
    </div>

   

  )
}

export default PersonDetails
