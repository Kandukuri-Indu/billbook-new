import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import FeatherIcon from "feather-icons-react";
import { img10 } from "../_components/imagepath";

const EditTestimonials = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="content-page-header">
                <h5 className="text-lg-center m-auto">Edit Testimonials</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-8 m-auto">
                <form action="#">
                  <div className="card-body">
                    <div className="form-group-item border-0 p-0">
                      <h5 className="form-title">Profile Picture</h5>
                      <div className="profile-picture">
                        <div className="upload-profile">
                          <div className="profile-img">
                            <img
                              id="blah"
                              className="avatar"
                              src={img10}
                              alt=""
                            />
                          </div>
                          <div className="add-profile">
                            <h5>Upload a New Photo</h5>
                            <span>Profile-pic.jpg</span>
                          </div>
                        </div>
                        <div className="img-upload">
                          <label className="btn btn-primary">
                            Upload <input type="file" />
                          </label>
                          <a className="btn btn-remove">Remove</a>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="John Smith"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Job Title</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Lorem ipsum dolor sit amet, consectetur"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form-group">
                            <label>Rating</label>
                            <div>
                              <span className="mail-important">
                                <i className="fas fa-star starred text-warning me-1" />
                              </span>
                              <span className="mail-important">
                                <i className="fas fa-star starred text-warning me-1" />
                              </span>
                              <span className="mail-important">
                                <i className="fas fa-star starred text-warning me-1" />
                              </span>
                              <span className="mail-important">
                                <i className="fas fa-star starred text-warning me-1" />
                              </span>
                              <span className="mail-important">
                                <i className="fas fa-star starred text-warning me-1" />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Comments</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Lorem ipsum dolor sit amet, consectetur"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="add-customer-btns text-center">
                      <button type="reset" className="btn customer-btn-cancel">
                        Cancel
                      </button>
                      <button type="submit" className="btn customer-btn-save">
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTestimonials;
