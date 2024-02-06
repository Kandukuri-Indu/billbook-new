import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import OutlineButtons from "../_components/buttons/OutlineButtons"
import RoundedButton from "../_components/buttons/RoundedButton"
import ProgressButton from "../_components/buttons/ProgressButton"
import Dropdown from "../_components/dropdown/Dropdown"
import Cards from "../_components/cards/Cards"
import Pagination from "../_components/pagination/Pagination"
import Progressbar from "../_components/progressbar/Progressbar"
import Typography from "../_components/typography/Typography"
import Tabs from "../_components/tabs/Tabs"
import {img,img1,img2,img3,img4} from "../_components/imagepath"
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'

const Components = () => {
  const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }
        return (

      <div className={`main-wrapper ${menu ? 'slide-nav': ''}`}> 
          
          <Header onMenuClick={(value) => toggleMobileMenu()} />
          <Sidebar />        
                <div className="page-wrapper">
                    <div className="content container-fluid">                    
                        <div className="page-header">
                            <div className="row">
                                <div className="col">
                                    <h3 className="page-title">Components</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/index">Dashboard</Link></li>
                                        <li className="breadcrumb-item active">Components</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      <div className="comp-sec-wrapper">
                  {/* Avatar */}
                  <section className="comp-section">
                    <div className="section-header">
                      <h3 className="section-title">Avatar</h3>
                      <div className="line" />
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card bg-white">
                          <div className="card-header">
                            <h5 className="card-title">Sizing</h5>
                          </div>
                          <div className="card-body">
                            <div className="avatar avatar-xxl">
                              <img className="avatar-img rounded-circle" alt="User Image" src={img2}/>                               
                            </div>
                            <div className="avatar avatar-xl">
                              <img className="avatar-img rounded-circle" alt="User Image" src={img2}/>                               
                            </div>
                            <div className="avatar avatar-lg">
                              <img className="avatar-img rounded-circle" alt="User Image" src={img2}/>                             
                            </div>
                            <div className="avatar">
                              <img className="avatar-img rounded-circle" alt="User Image"  src={img2}/>                               
                            </div>
                            <div className="avatar avatar-sm">
                              <img className="avatar-img rounded-circle" alt="User Image" src={img2}/>                               
                            </div>
                            <div className="avatar avatar-xs">
                              <img className="avatar-img rounded-circle" alt="User Image" src={img2}/>                               
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card bg-white">
                          <div className="card-header">
                            <h5 className="card-title">Avatar With Status</h5>
                          </div>
                          <div className="card-body">
                            <div className="avatar avatar-online">
                              <img className="avatar-img rounded-circle" alt="User Image" src={img2}/>                                
                            </div>
                            <div className="avatar avatar-offline">
                              <img className="avatar-img rounded-circle" alt="User Image" src={img2}/>                               
                            </div>
                            <div className="avatar avatar-away">
                              <img className="avatar-img rounded-circle" alt="User Image" src={img2}/>                               
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card bg-white">
                          <div className="card-header">
                            <h5 className="card-title">Shape</h5>
                          </div>
                          <div className="card-body">
                            <div className="avatar">
                              <img className="avatar-img rounded" alt="User Image" src={img2}/>                              
                            </div>
                            <div className="avatar">
                              <img className="avatar-img rounded-circle" alt="User Image" src={img2}/>                              
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card bg-white">
                          <div className="card-header">
                            <h5 className="card-title">Group</h5>
                          </div>
                          <div className="card-body">
                            <div className="avatar-group">
                              <div className="avatar">
                                <img className="avatar-img rounded-circle border border-white" alt="User Image" src={img2}/>                                
                              </div>
                              <div className="avatar">
                                <img className="avatar-img rounded-circle border border-white" alt="User Image" src={img3}/>                                
                              </div>
                              <div className="avatar">
                                <img className="avatar-img rounded-circle border border-white" alt="User Image" src={img4}/>                                
                              </div>
                              <div className="avatar">
                                <span className="avatar-title rounded-circle border border-white">CF</span>                             
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* /Avatar */}
                  {/* Alerts */}
                  <section className="comp-section">
                    <div className="section-header">
                      <h3 className="section-title">Alerts</h3>
                      <div className="line" />
                    </div>
                    <div className="card bg-white">
                      <div className="card-body">
                        <div className="alert alert-primary alert-dismissible fade show" role="alert">                         
                          <strong>Holy guacamole!</strong> You should check in on some of those
                          fields below.
                          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>                           
                        </div>
                        <div className="alert alert-secondary alert-dismissible fade show" role="alert">                         
                          <strong>Holy guacamole!</strong> You should check in on some of those
                          fields below.
                          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>                         
                        </div>
                        <div  className="alert alert-success alert-dismissible fade show" role="alert">                        
                          <strong>Holy guacamole!</strong> You should check in on some of those
                          fields below.
                          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>                        
                        </div>
                        <div  className="alert alert-danger alert-dismissible fade show" role="alert">                         
                          <strong>Holy guacamole!</strong> You should check in on some of those
                          fields below.
                          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>                         
                        </div>
                        <div  className="alert alert-warning alert-dismissible fade show" role="alert">                        
                          <strong>Holy guacamole!</strong> You should check in on some of those
                          fields below.
                          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>                          
                        </div>
                        <div  className="alert alert-info alert-dismissible fade show" role="alert">                        
                          <strong>Holy guacamole!</strong> You should check in on some of those
                          fields below.
                          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>                          
                        </div>
                        <div  className="alert alert-light alert-dismissible fade show" role="alert">                         
                          <strong>Holy guacamole!</strong> You should check in on some of those
                          fields below.
                          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>                        
                        </div>
                        <div  className="alert alert-dark alert-dismissible fade show" role="alert">                         
                          <strong>Holy guacamole!</strong> You should check in on some of those
                          fields below.
                          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>                        
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* /Alerts */}
                  {/* Breadcrumbs */}
                  <section className="comp-section">
                    <div className="section-header">
                      <h3 className="section-title">Breadcrumbs</h3>
                      <div className="line" />
                    </div>
                    <div className="card bg-white">
                      <div className="card-body">
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">
                              Home
                            </li>
                          </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                              <Link to="#">Home</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                              Products
                            </li>
                          </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                              <Link to="#">Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                              <Link to="#">Products</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                              Accessories
                            </li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </section>
                  {/* /Breadcrumbs */}
                  {/* Buttons */}
                  <section className="comp-section comp-buttons">
                    <div className="section-header">
                      <h3 className="section-title">Buttons</h3>
                      <div className="line" />
                    </div>
                    <div className="card bg-white">
                      <div className="card-body">
                        <h5 className="card-title">Default Button</h5>
                        <button type="button" className="btn btn-primary me-1">Primary</button>
                        <button type="button" className="btn btn-secondary me-1">Secondary</button>
                        <button type="button" className="btn btn-success me-1">Success</button>
                        <button type="button" className="btn btn-danger me-1">Danger</button>
                        <button type="button" className="btn btn-warning me-1">Warning</button>
                        <button type="button" className="btn btn-info me-1">Info</button>
                        <button type="button" className="btn btn-light me-1">Light</button>
                        <button type="button" className="btn btn-dark me-1">Dark</button>
                        <button type="button" className="btn btn-link me-1">Link</button>
                        <hr />
                        <h5 className="card-title">Button Sizes</h5>
                        <p>
                          <button type="button" className="btn btn-primary btn-lg me-1">Primary</button>
                          <button type="button" className="btn btn-secondary btn-lg me-1">Secondary</button>
                          <button type="button" className="btn btn-success btn-lg me-1">Success</button>
                          <button type="button" className="btn btn-danger btn-lg me-1">Danger</button>
                          <button type="button" className="btn btn-warning btn-lg me-1">Warning</button>
                          <button type="button" className="btn btn-info btn-lg me-1">Info</button>
                          <button type="button" className="btn btn-light btn-lg me-1">Light</button>
                          <button type="button" className="btn btn-dark btn-lg me-1">Dark</button>
                        </p>
                        <p>
                          <button type="button" className="btn btn-primary me-1">Primary</button>
                          <button type="button" className="btn btn-secondary me-1">Secondary</button>
                          <button type="button" className="btn btn-success me-1">Success</button>
                          <button type="button" className="btn btn-danger me-1">Danger</button>
                          <button type="button" className="btn btn-warning me-1">Warning</button>
                          <button type="button" className="btn btn-info me-1">Info</button>
                          <button type="button" className="btn btn-light me-1">Light</button>
                          <button type="button" className="btn btn-dark me-1">Dark</button>
                        </p>
                        <p>
                          <button type="button" className="btn btn-primary btn-sm me-1">Primary</button>
                          <button type="button" className="btn btn-secondary btn-sm me-1">Secondary</button>
                          <button type="button" className="btn btn-success btn-sm me-1">Success</button>
                          <button type="button" className="btn btn-danger btn-sm me-1">Danger</button>
                          <button type="button" className="btn btn-warning btn-sm me-1">Warning</button>
                          <button type="button" className="btn btn-info btn-sm me-1">Info</button>
                          <button type="button" className="btn btn-light btn-sm me-1">Light</button>
                          <button type="button" className="btn btn-dark btn-sm me-1">Dark</button>
                        </p>
                        <hr />
                        <h5 className="card-title">Button Groups</h5>
                        <div className="btn-toolbar">
                          <div className="btn-group btn-group-lg">
                            <button type="button" className="btn btn-primary">
                              Left
                            </button>
                            <button type="button" className="btn btn-primary">
                              Middle
                            </button>
                            <button type="button" className="btn btn-primary">
                              Right
                            </button>
                          </div>
                        </div>
                        <br />
                        <div className="btn-toolbar">
                          <div className="btn-group">
                            <button type="button" className="btn btn-primary">
                              Left
                            </button>
                            <button type="button" className="btn btn-primary">
                              Middle
                            </button>
                            <button type="button" className="btn btn-primary">
                              Right
                            </button>
                          </div>
                        </div>
                        <br />
                        <div className="btn-toolbar">
                          <div className="btn-group btn-group-sm">
                            <button type="button" className="btn btn-primary">
                              Left
                            </button>
                            <button type="button" className="btn btn-primary">
                              Middle
                            </button>
                            <button type="button" className="btn btn-primary">
                              Right
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Rounded Button */}
                    <RoundedButton/>
                    {/* /Rounded Button */}

                    {/* Outline Buttons */}                    
                    <OutlineButtons/>
                    {/* /Outline Buttons */}

                    {/* Progress Button */}
                    <ProgressButton/>
                    {/* /Progress Button */}
                  </section>
                  {/* /Buttons */}
                  {/* Cards */}
                  <Cards/>
                  {/* /Cards */}
                  {/* Dropdowns */}
                  <Dropdown/>
                    {/* /Dropdowns */}

                    {/* Pagination */}                    
                    <Pagination/>
                    {/* /Pagination */}

                      {/* Progress */}
                    < Progressbar/>
                    {/* /Progress */}

                    {/* Tabs */}
                  <Tabs/>
                    {/* /Tabs */}
                    {/* Typography */}
                    <Typography/>
                  {/* /Typography */}
             </div>	                    
          </div>			
      </div>
      { /* /Page Wrapper */}
  </div>
    
            
        );
    
}
export default Components;