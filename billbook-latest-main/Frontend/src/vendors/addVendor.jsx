import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FilterChart, search } from "../_components/imagepath";

const AddVendor = ({show,setShow}) => {

  return (
    <>
      <div className={`toggle-sidebar ${show ? 'open-filter' : '' }`}>
          <div className="sidebar-layout-filter">
            <div className="sidebar-header">
              <h5>Filter</h5>
              <Link to="#" className="sidebar-closes" onClick={() => setShow(!show)}>
                <i className="fa-regular fa-circle-xmark" />
              </Link>
            </div>
            <div className="sidebar-body">
              <form action="#" autoComplete="off">
                {/* Customer */}
                <div className="accordion" id="accordionMain1">
                  <div className="card-header-new" id="headingOne">
                    <h6 className="filter-title">
                      <Link
                        to="#"
                        className="w-100"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Customer
                        <span className="float-end">
                          <i className="fa-solid fa-chevron-down" />
                        </span>
                      </Link>
                    </h6>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="card-body-chat">
                      <div className="row">
                        <div className="col-md-12">
                          <div id="checkBoxes1">
                            <div className="form-custom">
                              <input
                                type="text"
                                className="form-control"
                                id="member_search1"
                                placeholder="Search here"
                              />
                              <span>
                                <img
                                  src={search}
                                  alt="img"
                                />
                              </span>
                            </div>
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Brian Johnson
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Russell Copeland
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Greg Lynch
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> John Blair
                              </label>
                              {/* View All */}
                              <div className="view-content">
                                <div className="viewall-One">
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Barbara Moore
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Hendry Evan
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Richard Miles
                                  </label>
                                </div>
                                <div className="view-all">
                                  <Link to="#" className="viewall-button-One">
                                    <span className="me-2">View All</span>
                                    <span>
                                      <i className="fa fa-circle-chevron-down" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              {/* /View All */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Customer */}
                {/* Select Date */}
                <div className="accordion" id="accordionMain2">
                  <div className="card-header-new" id="headingTwo">
                    <h6 className="filter-title">
                      <Link
                        to="#"
                        className="w-100 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        Select Date
                        <span className="float-end">
                          <i className="fa-solid fa-chevron-down" />
                        </span>
                      </Link>
                    </h6>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="card-body-chat">
                      <div className="form-group">
                        <label className="form-control-label">From</label>
                        <div className="cal-icon">
                          <input
                            type="email"
                            className="form-control datetimepicker"
                            placeholder="DD-MM-YYYY"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-control-label">To</label>
                        <div className="cal-icon">
                          <input
                            type="email"
                            className="form-control datetimepicker"
                            placeholder="DD-MM-YYYY"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Select Date */}
                {/* By Status */}
                <div className="accordion" id="accordionMain3">
                  <div className="card-header-new" id="headingThree">
                    <h6 className="filter-title">
                      <Link
                        to="#"
                        className="w-100 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        By Status
                        <span className="float-end">
                          <i className="fa-solid fa-chevron-down" />
                        </span>
                      </Link>
                    </h6>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample3"
                  >
                    <div className="card-body-chat">
                      <div id="checkBoxes2">
                        <div className="form-custom">
                          <input
                            type="text"
                            className="form-control"
                            id="member_search2"
                            placeholder="Search here"
                          />
                          <span>
                            <img src={search} alt="img" />
                          </span>
                        </div>
                        <div className="selectBox-cont">
                          <label className="custom_check w-100">
                            <input type="checkbox" name="bystatus" />
                            <span className="checkmark" /> All Invoices
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="bystatus" />
                            <span className="checkmark" /> Paid
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="bystatus" />
                            <span className="checkmark" /> Overdue
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="bystatus" />
                            <span className="checkmark" /> Draft
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="bystatus" />
                            <span className="checkmark" /> Recurring
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="bystatus" />
                            <span className="checkmark" /> Cancelled
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /By Status */}
                {/* Category */}
                <div className="accordion accordion-last" id="accordionMain4">
                  <div className="card-header-new" id="headingFour">
                    <h6 className="filter-title">
                      <Link
                        to="#"
                        className="w-100 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseFour"
                      >
                        Category
                        <span className="float-end">
                          <i className="fa-solid fa-chevron-down" />
                        </span>
                      </Link>
                    </h6>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample4"
                  >
                    <div className="card-body-chat">
                      <div id="checkBoxes3">
                        <div className="selectBox-cont">
                          <label className="custom_check w-100">
                            <input type="checkbox" name="category" />
                            <span className="checkmark" /> Advertising
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="category" />
                            <span className="checkmark" /> Food
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="category" />
                            <span className="checkmark" /> Repairs
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="category" />
                            <span className="checkmark" /> Software
                          </label>
                          {/* View All */}
                          <div className="view-content">
                            <div className="viewall-Two">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Stationary
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Medical
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Designing
                              </label>
                            </div>
                            <div className="view-all">
                              <Link to="#" className="viewall-button-Two">
                                <span className="me-2">View All</span>
                                <span>
                                  <i className="fa fa-circle-chevron-down" />
                                </span>
                              </Link>
                            </div>
                          </div>
                          {/* /View All */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Category */}
                <button
                  type="submit"
                  className="d-inline-flex align-items-center justify-content-center btn w-100 btn-primary"
                >
                  <span>
                    <img
                      src={FilterChart}
                      className="me-2"
                      alt="Generate report"
                    />
                  </span>
                  Generate report
                </button>
              </form>
            </div>
          </div>
      </div>
    </>
  );
};

export default AddVendor;
