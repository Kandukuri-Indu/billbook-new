import React from 'react'
import { useState } from 'react';
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import ReactStars from "react-stars";


const Rating = () => {


    const [menu, setMenu] = useState(false);
    
    const toggleMobileMenu = () => {
        setMenu(!menu);
    };

      const ratingChanged = (newRating) => {
        console.log(newRating);
      };
    

  return (

    <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
            <Header onMenuClick={(value) => toggleMobileMenu()} />

            <Sidebar />

            <div className="page-wrapper">
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="content-page-header">
        <h5>Rating</h5>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      {/* Rating */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Default Rating</h5>
          </div>
          <div className="card-body card-buttons">
            <p>This is the most basic example of ratings.</p>
            <div className="rating rating-default" >
            <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </div>
          </div>
        </div>
      </div>
      {/* /Rating */}
      {/* Rating */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Score</h5>
          </div>
          <div className="card-body card-buttons">
            <p>Stars with a saved rating.</p>
            <div className="rating rating-score" >
    
            <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    value={3}
                  />
                
            </div>

          </div>
        </div>
      </div>
      {/* /Rating */}
      {/* Rating */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Max Number</h5>
          </div>
          <div className="card-body card-buttons">
            <p>Change the max numbers of stars</p>
            <div className="rating rating-number" >
            
            <ReactStars
                    count={10}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </div>
          </div>
        </div>
      </div>
      {/* /Rating */}
      {/* Rating */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Read Only</h5>
          </div>
          <div className="card-body card-buttons">
            <p>Prevent users from voting</p>
            <div className="rating rating-read-only2" >
            <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    value={3}
                    disabled={true}
                  />
                </div>
          </div>
        </div>
      </div>
      {/* /Rating */}
      {/* Rating */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Half Rating</h5>
          </div>
          <div className="card-body card-buttons">
            <p>You can represent a float score as a half star icon.</p>
            <div className="rating rating-half-enable" >
            <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    value={3.5}
                    isHalf={true}
                  />
                </div>
          </div>
        </div>
      </div>
      {/* /Rating */}
      {/* Rating */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Custom Icon</h5>
          </div>
          <div className="card-body card-buttons">
            <p>Use any icon you want.</p>
            <div className="rating rating-custom-icon" >
            <ReactStars
                    count={5}
                    icon={<i className="fa fa-heart-o"></i>}                    
                    size={24}
                    activeColor="#FF0000"                    
                  />
                </div>
          </div>
        </div>
      </div>
      {/* /Rating */}
    </div>
  </div>
</div>


    </div>

  )
}

export default Rating