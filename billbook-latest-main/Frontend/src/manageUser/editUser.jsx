import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import AddVendor from "../vendors/addVendor";
import { img10 } from "../_components/imagepath";

const EditUser = () => {
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
            <div className="content-page-header">
              <h5>Add User</h5>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card-body">
                  <div className="form-group-item">
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
                        <a className="btn btn-primary me-2">Upload</a>
                        <a className="btn btn-remove">Remove</a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="John"
                            placeholder="Enter First Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Smith"
                            placeholder="Enter Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>User Name</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="John Smith"
                            placeholder="Enter User Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            defaultValue="john@example.com"
                            placeholder="Enter Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="+1 989-438-3131"
                            placeholder="Enter Phone Number"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Role</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Lorem ipsum"
                            placeholder="Enter Phone Number"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="pass-group" id="passwordInput1">
                          <div className="form-group">
                            <label>Password</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={12345678}
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="pass-group" id="passwordInput2">
                          <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={12345678}
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Status</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Active"
                            placeholder="Status"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <button
                      type="reset"
                      className="btn btn-primary cancel me-2"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Update Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default EditUser;
