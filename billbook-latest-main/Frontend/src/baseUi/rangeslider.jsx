import React, { useState } from 'react'
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import IonRangeSlider from 'react-ion-slider'

// import 'react-rangeslider/lib/index.css'

// import IonRangeSlider from 'react-ion-slider'
{/* <IonRangeSlider min={10} max={100} from={10} to={50} /> */ }


const Rangeslides = () => {
  const [menu, setMenu] = useState(false)

  const toggleMobileMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className={`main-wrapper ${menu ? 'slide-nav' : ''}`}>

      <Header onMenuClick={(value) => toggleMobileMenu()} />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="content-page-header">
              <h5>Range Slider</h5>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Default</h5>
                </div>
                <div className="card-body">
                  <IonRangeSlider min={0} max={100} from={0} to={50} />

                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Min-Max</h5>
                </div>
                <div className="card-body">
                  <IonRangeSlider min={0} max={1000} from={550} />

                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Prefix</h5>
                </div>
                <div className="card-body">
                <IonRangeSlider type={"chan"} min={0} max={1000} from={200} to={800} step={2} values={[]} keyboard={1} prefix={"$"} />
                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Range</h5>
                </div>
                <div className="card-body">
                <IonRangeSlider type={"chan"} min={-1000} max={1000} from={-500} to={500} step={2} values={[]} keyboard={1} grid={true}/>

                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Step</h5>
                </div>
                <div className="card-body">
                <IonRangeSlider type={"chan"} min={-1000} max={1000} from={-500} to={500} step={1} values={[]} keyboard={1} grid={true} />

                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Custom Values</h5>
                </div>
                <div className="card-body">
                <IonRangeSlider type={"chan"} min={-1000} max={1000} from={-500} to={500} step={2} grid={true} values={["jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"]} keyboard={1} />


                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Modern skin</h5>
                </div>
                <div className="card-body">
                
                <IonRangeSlider skin={"modern"} type={"single"} min={10} max={100} from={30} />

                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Sharp Skin</h5>
                </div>
                <div className="card-body">
                <IonRangeSlider skin={"sharp"} type={"single"} min={10} max={100} from={30} />

                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Round skin</h5>
                </div>
                <div className="card-body">
                <IonRangeSlider skin={"round"} type={"single"} min={10} max={100} from={30} />

                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Square Skin</h5>
                </div>
                <div className="card-body">
                <IonRangeSlider skin={"square"} type={"single"} min={10} max={100} from={30} />

                </div>
              </div>
            </div>
            {/* /Rangeslider */}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Rangeslides