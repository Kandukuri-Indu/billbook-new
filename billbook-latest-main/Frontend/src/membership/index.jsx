import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { Plan1, Plan2, Plan3 } from "../_components/imagepath";

const MembershipPlan = () => {

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
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header ">
                <h5>Membership Plans</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <Link className="btn btn-primary" to="/add-membership">
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        Add Membership
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Price Table */}
            <div className="price-table-main">
              <div className="plan-selected">
                <h4>Monthly</h4>
                <div className="status-toggle me-2 ms-2">
                  <input
                    id="rating_1"
                    className="px-4 check"
                    type="checkbox"
                    defaultChecked="true"
                  />
                  <label
                    htmlFor="rating_1"
                    className="px-4 checktoggle checkbox-bg"
                  >
                    checkbox
                  </label>
                </div>
                <h4>Annually</h4>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="plan-header">
                        <span className="plan-widget-icon">
                          <img
                            src={Plan1}
                            alt=""
                          />
                        </span>
                        <div className="plan-title">
                          <h6>For individuals</h6>
                          <h4 className="plan-name">Basic</h4>
                        </div>
                      </div>
                      <div className="description-content">
                        <p>
                          Lorem ipsum dolor sit amet doloroli sitiol conse
                          ctetur adipiscing elit.{" "}
                        </p>
                      </div>
                      <div className="price-dollar">
                        <h1 className="d-flex align-items-center">
                          $99<span className="ms-1">/monthly</span>
                        </h1>
                      </div>
                      <div className="plan-description">
                        <h6>What’s included</h6>
                        <ul>
                          <li>
                            <span className="rounded-circle me-2">
                              <i className="fe fe-check" />
                            </span>
                            All analytics features
                          </li>
                          <li>
                            <span className="rounded-circle me-2">
                              <i className="fe fe-check" />
                            </span>
                            Up to 250,000 tracked visits
                          </li>
                          <li>
                            <span className="rounded-circle me-2">
                              <i className="fe fe-check" />
                            </span>
                            Normal support
                          </li>
                          <li>
                            <span className="rounded-circle me-2">
                              <i className="fe fe-check" />
                            </span>
                            Up to 3 team members
                          </li>
                        </ul>
                      </div>
                      <div className="plan-button">
                        <Link
                          className="btn btn-primary d-flex align-items-center justify-content-center"
                          to="#"
                        >
                          Get Started
                          <span className="ms-2">
                            <i className="fe fe-arrow-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="card price-selected">
                    <div className="card-body plan-header-selected">
                      <div className="d-flex">
                        <div className="plan-header">
                          <span className="plan-widget-icon">
                            <img
                              src={Plan2}
                              alt=""
                            />
                          </span>
                          <div className="plan-title">
                            <h6 className="text-white">For Startups</h6>
                            <h4 className="plan-name text-white">Pro</h4>
                          </div>
                        </div>
                        <span className="price-popular">Popular</span>
                      </div>
                      <div className="description-content">
                        <p>
                          Lorem ipsum dolor sit amet doloroli sitiol conse
                          ctetur adipiscing elit.{" "}
                        </p>
                      </div>
                      <div className="price-dollar">
                        <h1 className="d-flex align-items-center text-white">
                          $199<span className="text-white ms-1">/monthly</span>
                        </h1>
                      </div>
                      <div className="plan-description">
                        <h6 className="text-white">What’s included</h6>
                        <ul>
                          <li>
                            <span className="rounded-circle bg-white me-2">
                              <i className="text-primary fe fe-check" />
                            </span>
                            All analytics features
                          </li>
                          <li>
                            <span className="rounded-circle bg-white me-2">
                              <i className="text-primary fe fe-check" />
                            </span>
                            Up to 1,000,000 tracked visits
                          </li>
                          <li>
                            <span className="rounded-circle bg-white me-2">
                              <i className="text-primary fe fe-check" />
                            </span>
                            Premium support
                          </li>
                          <li>
                            <span className="rounded-circle bg-white me-2">
                              <i className="text-primary fe fe-check" />
                            </span>
                            Up to 10 team members
                          </li>
                        </ul>
                      </div>
                      <div className="plan-button">
                        <Link
                          className="btn btn-white d-flex align-items-center justify-content-center"
                          to="#"
                        >
                          Get Started
                          <span className="ms-2">
                            <i className="fe fe-arrow-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="plan-header">
                        <span className="plan-widget-icon">
                          <img
                            src={Plan3}
                            alt=""
                          />
                        </span>
                        <div className="plan-title">
                          <h6>For individuals</h6>
                          <h4 className="plan-name">Basic</h4>
                        </div>
                      </div>
                      <div className="description-content">
                        <p>
                          Lorem ipsum dolor sit amet doloroli sitiol conse
                          ctetur adipiscing elit.{" "}
                        </p>
                      </div>
                      <div className="price-dollar">
                        <h1 className="d-flex align-items-center">
                          $399<span className="ms-1">/monthly</span>
                        </h1>
                      </div>
                      <div className="plan-description">
                        <h6>What’s included</h6>
                        <ul>
                          <li>
                            <span className="rounded-circle me-2">
                              <i className="fe fe-check" />
                            </span>
                            All analytics features
                          </li>
                          <li>
                            <span className="rounded-circle me-2">
                              <i className="fe fe-check" />
                            </span>
                            Up to 5,000,000 tracked visits
                          </li>
                          <li>
                            <span className="rounded-circle me-2">
                              <i className="fe fe-check" />
                            </span>
                            Dedicated support
                          </li>
                          <li>
                            <span className="rounded-circle me-2">
                              <i className="fe fe-check" />
                            </span>
                            Up to 50 team members
                          </li>
                        </ul>
                      </div>
                      <div className="plan-button">
                        <Link
                          className="btn btn-primary d-flex align-items-center justify-content-center"
                          to="#"
                        >
                          Get Started
                          <span className="ms-2">
                            <i className="fe fe-arrow-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Price Table */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipPlan;
