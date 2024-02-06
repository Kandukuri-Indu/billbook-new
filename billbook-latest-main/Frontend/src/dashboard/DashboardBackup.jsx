import React, { useEffect, useState } from "react";
import "./DashboardBackup.css";
import Visitorschart from "./VisitorsChart";
const DashboardBackup = ({ total, invoice, customer }) => {
  return (
    <>
      <div className="todaysales-parent">
        <div className="row">
          <div className="col-md-12">
            <div className="todaysales-sub2">
              <div className="col-md-12">
                <div className="todaysales-sub2-parent">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="todaysales-sub">
                        <div className="todaysales-sub-text1">
                          <h4>Sales Summary</h4>
                        </div>
                        <button className="btn">
                          <div className="todaysales-sub-text2">
                            <div className="todaysales-export-icon">
                              <img src="/images/export.png" alt="" />
                            </div>
                            <p>Export</p>
                          </div>
                                 
                        </button>
                      </div>

                      {/* old dashboard top section code */}
                      <div className="row d-none">
                        <div className="col-md-3">
                          <div className="todaysales-sub2-content">
                            <div className="todaysales-sub2-content-icon">
                              <img src="/images/billbookicon.png" alt="" />
                            </div>
                            <div className="totalorders-sub2-content-text">
                              <h5>{total}</h5>
                              <p className="totalsales">Total Revenue</p>
                              {/* <p className='todaysales-sub2-content-day'>+8% from yesterday</p> */}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="totalorders-sub2-content">
                            <div className="todaysales-sub2-content-icon">
                              <img src="/images/billbookicon4.png" alt="" />
                            </div>
                            <div className="totalorders-sub2-content-text">
                              <h5>8</h5>
                              <p className="totalsales">Total Customers</p>
                              {/* <p className='todaysales-sub2-content-day'>+5% from yesterday</p> */}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="ProductSold-sub2-content">
                            <div className="todaysales-sub2-content-icon">
                              <img src="/images/billbookicon3.png" alt="" />
                            </div>
                            <div className="totalorders-sub2-content-text">
                              <h5>{invoice.length}</h5>
                              <p className="totalsales">Total Invoices</p>
                              {/* <p className='todaysales-sub2-content-day'>+1,2% from yesterday</p> */}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="NewCustomers-sub2-content">
                            <div className="todaysales-sub2-content-icon">
                              <img src="/images/billbookicon2.png" alt="" />
                            </div>
                            <div className="totalorders-sub2-content-text">
                              <h5>15</h5>
                              <p className="totalsales">Total Products</p>
                              {/* <p className='todaysales-sub2-content-day'>0,5% from yesterday</p> */}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* old dashboard top section code */}

                      {/* new top section code  */}
                      <div className="dashboard-top">
                        <div className="row">
                          <div class="col-md-4">
                            <div class="dashboard-top-sec">
                              <div className="dashboard-top-sec-one">
                              <div class="dashboard-top-sec-img">
                                <img
                                  src="/imagess/dashboard/up-arrow.png"
                                  alt=""
                                />
                              </div>
                              <div class="dashboard-top-sec-title">
                                <h4> Total Amount</h4>
                              </div>
                              </div>
                              <div class="dashboard-top-sec-count">
                                <h5>2500</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* new top section code  */}
                    </div>
                    {/* <div className="col-md-4">
                                            <Visitorschart />
                                        </div> */}
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

export default DashboardBackup;
