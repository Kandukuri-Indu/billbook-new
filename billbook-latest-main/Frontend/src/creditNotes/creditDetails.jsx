import React, { useState } from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import FeatherIcon from "feather-icons-react";
import { DetailsLogo, signature } from "../_components/imagepath";
import { Link } from "react-router-dom";

const CreditDetails = () => {
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
              <div className="content-invoice-header">
                <h5>Credit Notes Details</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <Link
                        className="btn btn-import me-2"
                        to="#"
                      >
                        <span>
                          {/* <i className="fe fe-printer me-2" /> */}
                          <FeatherIcon icon="printer" className="me-2"/>
                          Print
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="btn btn-primary" download="">
                        <i className="fa fa-download me-2" aria-hidden="true" />
                        Download
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="card-table">
                      <div className="card-body">
                        {/* Invoice Logo */}
                        <div className="invoice-item invoice-item-one">
                          <div className="row align-items-center">
                            <div className="col-md-6">
                              <div className="invoice-logo">
                                <img src={DetailsLogo} alt="logo" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="invoice-info">
                                <h1>Credit Notes</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Invoice Logo */}
                        {/* Invoice Date */}
                        <div className="invoice-item invoice-item-date">
                          <div className="row">
                            <div className="col-md-6">
                              <p className="text-start invoice-details">
                                Date<span>: </span>
                                <strong>05/12/2022</strong>
                              </p>
                            </div>
                            <div className="col-md-6">
                              <p className="invoice-details">
                                Invoice No<span>: </span>
                                <strong>INV 00001</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* /Invoice Date */}
                        {/* Invoice To */}
                        <div className="invoice-item invoice-item-two">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="invoice-info">
                                <strong className="customer-text-one">
                                  Credit To<span>:</span>
                                </strong>
                                <p className="invoice-details-two">
                                  John Williams
                                  <br />
                                  15 Hodges Mews, High Wycombe
                                  <br />
                                  HP12 3JL
                                  <br />
                                  United Kingdom
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="invoice-info invoice-info2">
                                <strong className="customer-text-one">
                                  Pay To<span>:</span>
                                </strong>
                                <p className="invoice-details-two text-end">
                                  Walter Roberson
                                  <br />
                                  299 Star Trek Drive, Panama City,
                                  <br />
                                  Florida, 32405,
                                  <br />
                                  USA
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Invoice To */}
                        {/* Invoice Item */}
                        <div className="invoice-item invoice-table-wrap">
                          <div className="invoice-table-head">
                            <h6>Items:</h6>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="table-responsive">
                                <table className="table table-center table-hover mb-0">
                                  <thead className="thead-light">
                                    <tr>
                                      <th>Product / Service</th>
                                      <th>Quantity</th>
                                      <th>Unit</th>
                                      <th>Rate</th>
                                      <th>Discount</th>
                                      <th>Tax</th>
                                      <th>Amount</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td>1</td>
                                      <td>Pcs</td>
                                      <td>$120.00</td>
                                      <td>0</td>
                                      <td>0</td>
                                      <td>$120.00</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td>1</td>
                                      <td>Pcs</td>
                                      <td>$210.00</td>
                                      <td>0</td>
                                      <td>0</td>
                                      <td>$210.00</td>
                                    </tr>
                                    <tr>
                                      <td>Lorem ipsum dolor sit amet</td>
                                      <td>1</td>
                                      <td>Pcs</td>
                                      <td>$310.00</td>
                                      <td>0</td>
                                      <td>0</td>
                                      <td>$310.00</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Invoice Item */}
                        {/* Terms & Conditions */}
                        <div className="terms-conditions credit-details">
                          <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6 col-md-6">
                              <div className="invoice-terms align-center">
                                <span className="invoice-terms-icon bg-white-smoke me-3">
                                  <i className="fe fe-file-text" >
                                  <FeatherIcon icon="file-text"/>
                                  </i>
                                </span>
                                <div className="invocie-note">
                                  <h6>Terms &amp; Conditions</h6>
                                  <p className="mb-0">
                                    Authoritatively envisioneer business action
                                    items through parallel sources.
                                  </p>
                                </div>
                              </div>
                              <div className="invoice-terms align-center">
                                <span className="invoice-terms-icon bg-white-smoke me-3">
                                  <i className="fe fe-file-minus" >
                                  <FeatherIcon icon="file-minus"/>
                                  </i>
                                </span>
                                <div className="invocie-note">
                                  <h6>Note</h6>
                                  <p className="mb-0">
                                    This is computer generated receipt and does
                                    not require physical signature.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                              <div className="invoice-total-card">
                                <div className="invoice-total-box">
                                  <div className="invoice-total-inner">
                                    <p>
                                      Taxable <span>$360.00</span>
                                    </p>
                                    <p>
                                      Discount<span>$13.20</span>
                                    </p>
                                    <p>
                                      Vat <span>$0.00</span>
                                    </p>
                                  </div>
                                  <div className="invoice-total-footer">
                                    <h4>
                                      Total Amount <span>$347.80</span>
                                    </h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="invoice-sign text-end">
                          <span className="d-block">Harristemp</span>
                          <img
                            className="img-fluid d-inline-block"
                            src={signature}
                            alt="sign"
                          />
                        </div>
                        {/* /Terms & Conditions */}
                      </div>
                    </div>
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

export default CreditDetails;
