import React, { useState } from 'react'
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'
import { ii02, ii03, ii04, ii05, img } from '../_components/imagepath'

const Lightbox = () => {
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
        <h5>Lightbox</h5>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      {/* Lightbox */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Single Image Lightbox</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 mb-2 mb-md-0">
                <a href={img} className="image-popup">
                  <img
                    src={img}
                    className="img-fluid"
                    alt="image"
                  />
                </a>
              </div>
              <div className="col-md-4 mb-2 mb-md-0">
                <a href={ii02} className="image-popup">
                  <img
                    src={ii02}
                    className="img-fluid"
                    alt="image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Lightbox */}
      {/* Lightbox */}
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Image with Description</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 mb-2 mb-md-0">
                <a
                  href={ii03}
                  className="image-popup-desc"
                  data-title="Title 01"
                  data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                >
                  <img
                    src={ii03}
                    className="img-fluid"
                    alt="work-thumbnail"
                  />
                </a>
              </div>
              <div className="col-md-4 mb-2 mb-md-0">
                <a
                  href={ii04}
                  className="image-popup-desc"
                  data-title="Title 02"
                  data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                >
                  <img
                    src={ii04}
                    className="img-fluid"
                    alt="work-thumbnail"
                  />
                </a>
              </div>
              <div className="col-md-4 mb-2 mb-md-0">
                <a
                  href={ii05}
                  className="image-popup-desc"
                  data-title="Title 03"
                  data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                >
                  <img
                    src={ii05}
                    className="img-fluid"
                    alt="work-thumbnail"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Lightbox */}
    </div>
  </div>
</div>

    </div>
  )
}

export default Lightbox