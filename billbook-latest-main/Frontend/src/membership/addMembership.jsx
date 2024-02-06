import React, { useState } from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import FeatherIcon from "feather-icons-react";


const AddMembership = () => {

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
              <h5>Add Membership</h5>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card-body">
                  <div className="form-group-add">
                    <h5 className="form-title">Plan</h5>
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Plan Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Plan Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Monthly Price</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Plan Price"
                          />
                          <span className="me-2">
                          <i className="fe fe-alert-circle">
                            <FeatherIcon icon="alert-circle"/>
                          </i>
                          </span>
                          <span>Set 0 for free</span>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Yearly Price</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Yearly Price"
                          />
                          <span className="me-2">
                          <i className="fe fe-alert-circle">
                            <FeatherIcon icon="alert-circle"/>
                          </i>
                          </span>
                          <span>Set 0 for free</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group-add">
                    <h5 className="form-title">Plan Settings</h5>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Services</label>
                          <div className="align-center">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="1-100"
                            />
                            <div className="status-toggle">
                              <input
                                id="rating_1"
                                className="check"
                                type="checkbox"
                                defaultChecked="true"
                              />
                              <label
                                htmlFor="rating_1"
                                className="checktoggle checkbox-bg"
                              >
                                checkbox
                              </label>
                            </div>
                          </div>
                          <span>
                            <label className="custom_check">
                              <input type="checkbox" name="invoice" />
                              <span className="checkmark" />
                            </label>
                          </span>
                          <span>Unlimited</span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Appointments</label>
                          <div className="align-center">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="1-100"
                            />
                            <div className="status-toggle">
                              <input
                                id="rating_2"
                                className="check"
                                type="checkbox"
                                defaultChecked="true"
                              />
                              <label
                                htmlFor="rating_2"
                                className="checktoggle checkbox-bg"
                              >
                                checkbox
                              </label>
                            </div>
                          </div>
                          <span>
                            <label className="custom_check">
                              <input type="checkbox" name="invoice" />
                              <span className="checkmark" />
                              <span>Unlimited</span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Staffs</label>
                          <div className="align-center">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="1-100"
                            />
                            <div className="status-toggle">
                              <input
                                id="rating_3"
                                className="check"
                                type="checkbox"
                                defaultChecked="true"
                              />
                              <label
                                htmlFor="rating_3"
                                className="checktoggle checkbox-bg"
                              >
                                checkbox
                              </label>
                            </div>
                          </div>
                          <span>
                            <label className="custom_check">
                              <input type="checkbox" name="invoice" />
                              <span className="checkmark" />
                              <span>Unlimited</span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Gallery</label>
                          <div className="align-center">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="1-100"
                            />
                            <div className="status-toggle">
                              <input
                                id="rating_4"
                                className="check"
                                type="checkbox"
                                defaultChecked="true"
                              />
                              <label
                                htmlFor="rating_4"
                                className="checktoggle checkbox-bg"
                              >
                                checkbox
                              </label>
                            </div>
                          </div>
                          <span>
                            <label className="custom_check">
                              <input type="checkbox" name="invoice" />
                              <span className="checkmark" />
                              <span>Unlimited</span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Additional Service</label>
                          <div className="align-center">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="1-100"
                            />
                            <div className="status-toggle">
                              <input
                                id="rating_5"
                                className="check"
                                type="checkbox"
                                defaultChecked="true"
                              />
                              <label
                                htmlFor="rating_5"
                                className="checktoggle checkbox-bg"
                              >
                                checkbox
                              </label>
                            </div>
                          </div>
                          <span>
                            <label className="custom_check">
                              <input type="checkbox" name="invoice" />
                              <span className="checkmark" />
                              <span>Unlimited</span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="form-group booking-option">
                          <label>Booking Option</label>
                          <div className="status-toggle">
                            <input
                              id="rating_6"
                              className="check"
                              type="checkbox"
                              defaultChecked="true"
                            />
                            <label
                              htmlFor="rating_6"
                              className="checktoggle checkbox-bg"
                            >
                              checkbox
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-end mt-4">
                    <button
                      type="reset"
                      className="btn btn-primary cancel me-2"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save Changes
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

export default AddMembership;
