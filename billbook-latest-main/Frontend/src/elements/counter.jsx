import React, { useState } from 'react'
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import CountUp from 'react-countup';


const Counter = () => {
    
    const [menu, setMenu] = useState(false);
    
    const toggleMobileMenu = () => {
        setMenu(!menu);
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
        <h5>Counter</h5>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      {/* Counter */}
      <div className="col-md-4">
        <div className="card">
          <div className="card-body card-buttons">
            <h5 className="card-title">Clients</h5>
            <h6 className="counter"><CountUp end={3000} /></h6>
          </div>
        </div>
      </div>
      {/* /Counter */}
      {/* Counter */}
      <div className="col-md-4">
        <div className="card">
          <div className="card-body card-buttons">
            <h5 className="card-title">Total Sales</h5>
            <h6 className="counter"><CountUp end={10000}/></h6>
          </div>
        </div>
      </div>
      {/* /Counter */}
      {/* Counter */}
      <div className="col-md-4">
        <div className="card">
          <div className="card-body card-buttons">
            <h5 className="card-title">Total Projects</h5>
            <h6 className="counter"><CountUp end={15000} /></h6>
          </div>
        </div>
      </div>
      {/* /Counter */}
      {/* Counter */}
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Count Down</h5>
          </div>
          <div className="card-body card-buttons">
            <h6 className="card-text">Time Count from 3</h6>
            <CountUp
                    start={59}
                    end={0}
                    duration={59}
                    prefix="00 Day 00 : 02 :"
                  />
          </div>
        </div>
      </div>
      {/* /Counter */}
      {/* Counter */}
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Count Up</h5>
          </div>
          <div className="card-body card-buttons">
            <h6 className="card-text">Time Counting From 0</h6>
            <CountUp
                    end={60}
                    duration={60}
                    prefix="00 Day 00 : 00 :"
                  />
          </div>
        </div>
      </div>
      {/* /Counter */}
      {/* Counter */}
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Count Inbetween</h5>
          </div>
          <div className="card-body card-buttons">
            <h6 className="card-text">Time counting from 30 to 20</h6>
            <CountUp
                    end={30}
                    duration={10}
                    prefix="00 Day 00 : 00 :"
                  />
          </div>
        </div>
      </div>
      {/* /Counter */}
      {/* Counter */}
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Count Callback</h5>
          </div>
          <div className="card-body card-buttons">
            <h6 className="card-text">
              Count from 10 to 0 and calls timer end callback
            </h6>
            <CountUp
                    start={10}
                    end={0}
                    duration={10}
                    prefix="00 Day 00 : 00 :"
                    onEnd={() => { return "calls timer end" }}
                  />
          </div>
        </div>
      </div>
      {/* /Counter */}
      {/* Counter */}
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Custom Output</h5>
          </div>
          <div className="card-body card-buttons">
            <h6 className="card-text">Changed output pattern</h6>
            <span id="timer-outputpattern" />
            <CountUp
                    start={60}
                    end={0}
                    duration={60}
                    prefix="02 Days 23 Hour 59 Min "
                    suffix=' Sec..'
                  />
          </div>
        </div>
      </div>
      {/* /Counter */}
    </div>
  </div>
</div>
</div>
  )
}

export default Counter