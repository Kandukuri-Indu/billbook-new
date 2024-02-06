import React, { useState } from 'react'
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'

const Buttons = () => {
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
        <h5>Buttons</h5>
      </div>
    </div>
    {/* /Page Header */}
    {/* Buttons */}
    <div className="card card-buttons">
      <div className="card-body">
        <h5 className="card-title">Default Button</h5>
        <button type="button" className="btn btn-primary me-1">
          Primary
        </button>
        <button type="button" className="btn btn-secondary me-1">
          Secondary
        </button>
        <button type="button" className="btn btn-success me-1">
          Success
        </button>
        <button type="button" className="btn btn-danger me-1">
          Danger
        </button>
        <button type="button" className="btn btn-warning me-1">
          Warning
        </button>
        <button type="button" className="btn btn-info me-1">
          Info
        </button>
        <button type="button" className="btn btn-light me-1">
          Light
        </button>
        <button type="button" className="btn btn-dark me-1">
          Dark
        </button>
        <button type="button" className="btn btn-link me-1">
          Link
        </button>
        <hr />
        <h5 className="card-title">Button Sizes</h5>
        <p>
          <button type="button" className="btn btn-primary btn-lg me-1">
            Primary
          </button>
          <button type="button" className="btn btn-secondary btn-lg me-1">
            Secondary
          </button>
          <button type="button" className="btn btn-success btn-lg me-1">
            Success
          </button>
          <button type="button" className="btn btn-danger btn-lg me-1">
            Danger
          </button>
          <button type="button" className="btn btn-warning btn-lg me-1">
            Warning
          </button>
          <button type="button" className="btn btn-info btn-lg me-1">
            Info
          </button>
          <button type="button" className="btn btn-light btn-lg me-1">
            Light
          </button>
          <button type="button" className="btn btn-dark btn-lg me-1">
            Dark
          </button>
        </p>
        <p>
          <button type="button" className="btn btn-primary me-1">
            Primary
          </button>
          <button type="button" className="btn btn-secondary me-1">
            Secondary
          </button>
          <button type="button" className="btn btn-success me-1">
            Success
          </button>
          <button type="button" className="btn btn-danger me-1">
            Danger
          </button>
          <button type="button" className="btn btn-warning me-1">
            Warning
          </button>
          <button type="button" className="btn btn-info me-1">
            Info
          </button>
          <button type="button" className="btn btn-light me-1">
            Light
          </button>
          <button type="button" className="btn btn-dark me-1">
            Dark
          </button>
        </p>
        <p>
          <button type="button" className="btn btn-primary btn-sm me-1">
            Primary
          </button>
          <button type="button" className="btn btn-secondary btn-sm me-1">
            Secondary
          </button>
          <button type="button" className="btn btn-success btn-sm me-1">
            Success
          </button>
          <button type="button" className="btn btn-danger btn-sm me-1">
            Danger
          </button>
          <button type="button" className="btn btn-warning btn-sm me-1">
            Warning
          </button>
          <button type="button" className="btn btn-info btn-sm me-1">
            Info
          </button>
          <button type="button" className="btn btn-light btn-sm me-1">
            Light
          </button>
          <button type="button" className="btn btn-dark btn-sm me-1">
            Dark
          </button>
        </p>
      </div>
    </div>
    {/* Rounded Button */}
    <div className="card card-buttons">
      <div className="card-header">
        <h5 className="card-title">Rounded Button</h5>
        <p className="card-text">
          use <code>.btn-rounded</code> in class <code>.btn</code> class to get
          Rounded button
        </p>
      </div>
      <div className="card-body">
        <button type="button" className="btn btn-rounded btn-primary me-1">
          Primary
        </button>
        <button type="button" className="btn btn-rounded btn-secondary me-1">
          Secondary
        </button>
        <button type="button" className="btn btn-rounded btn-success me-1">
          Success
        </button>
        <button type="button" className="btn btn-rounded btn-danger me-1">
          Danger
        </button>
        <button type="button" className="btn btn-rounded btn-warning me-1">
          Warning
        </button>
        <button type="button" className="btn btn-rounded btn-info me-1">
          Info
        </button>
        <button type="button" className="btn btn-rounded btn-light me-1">
          Light
        </button>
        <button type="button" className="btn btn-rounded btn-dark me-1">
          Dark
        </button>
        <hr />
        <p>
          use <code>.btn-rounded</code> in class <code>.btn-outline-*</code>{" "}
          class to get Rounded Outline button
        </p>
        <button type="button" className="btn btn-rounded btn-outline-primary me-1">
          Primary
        </button>
        <button type="button" className="btn btn-rounded btn-outline-secondary me-1">
          Secondary
        </button>
        <button type="button" className="btn btn-rounded btn-outline-success me-1">
          Success
        </button>
        <button type="button" className="btn btn-rounded btn-outline-danger me-1">
          Danger
        </button>
        <button type="button" className="btn btn-rounded btn-outline-warning me-1">
          Warning
        </button>
        <button type="button" className="btn btn-rounded btn-outline-info me-1">
          Info
        </button>
        <button type="button" className="btn btn-rounded btn-outline-light me-1">
          Light
        </button>
        <button type="button" className="btn btn-rounded btn-outline-dark me-1">
          Dark
        </button>
      </div>
    </div>
    {/* /Rounded Button */}
    {/* Outline Buttons */}
    <div className="card card-buttons">
      <div className="card-header">
        <h5 className="card-title">Outline Buttons</h5>
        <p className="card-text">
          Use <code>.btn-outline-*</code> class for outline buttons.
        </p>
      </div>
      <div className="card-body">
        <div className="row row-sm align-items-center">
          <div className="col-12 col-xl mb-3 mb-xl-0">Normal</div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button type="button" className="btn btn-block btn-outline-primary">
              Primary
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button
              type="button"
              className="btn btn-block btn-outline-secondary"
            >
              Secondary
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button type="button" className="btn btn-block btn-outline-success">
              Success
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button type="button" className="btn btn-block btn-outline-warning">
              Warning
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button type="button" className="btn btn-block btn-outline-danger">
              Danger
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button type="button" className="btn btn-block btn-outline-info">
              Info
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button type="button" className="btn btn-block btn-outline-light">
              Light
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button type="button" className="btn btn-block btn-outline-dark">
              Dark
            </button>
          </div>
        </div>
        <div className="row row-sm align-items-center mt-3">
          <div className="col-12 col-xl mb-3 mb-xl-0">Active</div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button
              type="button"
              className="btn btn-block btn-outline-primary active"
            >
              Primary
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button
              type="button"
              className="btn btn-block btn-outline-secondary active"
            >
              Secondary
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button
              type="button"
              className="btn btn-block btn-outline-success active"
            >
              Success
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button
              type="button"
              className="btn btn-block btn-outline-warning active"
            >
              Warning
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button
              type="button"
              className="btn btn-block btn-outline-danger active"
            >
              Danger
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button
              type="button"
              className="btn btn-block btn-outline-info active"
            >
              Info
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button
              type="button"
              className="btn btn-block btn-outline-light active"
            >
              Light
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button
              type="button"
              className="btn btn-block btn-outline-dark active"
            >
              Dark
            </button>
          </div>
        </div>
        <div className="row row-sm align-items-center mt-3">
          <div className="col-12 col-xl mb-3 mb-xl-0">Disabled</div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button
              disabled=""
              type="button"
              className="btn btn-block btn-outline-primary"
            >
              Primary
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button
              disabled=""
              type="button"
              className="btn btn-block btn-outline-secondary"
            >
              Secondary
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button
              disabled=""
              type="button"
              className="btn btn-block btn-outline-success"
            >
              Success
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button
              disabled=""
              type="button"
              className="btn btn-block btn-outline-warning"
            >
              Warning
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button
              disabled=""
              type="button"
              className="btn btn-block btn-outline-danger"
            >
              Danger
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button
              disabled=""
              type="button"
              className="btn btn-block btn-outline-info"
            >
              Info
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button
              disabled=""
              type="button"
              className="btn btn-block btn-outline-light"
            >
              Light
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
            <button
              disabled=""
              type="button"
              className="btn btn-block btn-outline-dark"
            >
              Dark
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* /Outline Buttons */}
    {/* Progress Button */}
    <div className="card card-buttons">
      <div className="card-header">
        <h5 className="card-title mb-0">Progress Button</h5>
      </div>
      <div className="card-body">
        <button type="button" className="btn btn-primary me-1">
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
          />
          Primary
        </button>
        <button type="button" className="btn btn-secondary me-1">
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
          />
          Secondary
        </button>
        <button type="button" className="btn btn-success me-1">
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
          />
          Success
        </button>
        <button type="button" className="btn btn-danger me-1">
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
          />
          Danger
        </button>
        <button type="button" className="btn btn-warning me-1">
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
          />
          Warning
        </button>
        <button type="button" className="btn btn-info me-1">
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
          />
          Info
        </button>
        <button type="button" className="btn btn-dark me-1">
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
          />
          Dark
        </button>
      </div>
    </div>
    {/* /Progress Button */}
  </div>
</div>








    </div>
  )
}

export default Buttons