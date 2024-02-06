import React, { useState } from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { Cashreceipt1, Cashreceipt2, Cashreceipt3, Cashreceipt4, GeneralInvoice1, GeneralInvoice10, GeneralInvoice11, GeneralInvoice12, GeneralInvoice13, GeneralInvoice14, GeneralInvoice15, GeneralInvoice16, GeneralInvoice17, GeneralInvoice18, GeneralInvoice19, GeneralInvoice2, GeneralInvoice20, GeneralInvoice3, GeneralInvoice4, GeneralInvoice5, GeneralInvoice6, GeneralInvoice7, GeneralInvoice8, GeneralInvoice9 } from "../_components/imagepath";
import { Link } from "react-router-dom";

const InvoiceTemplate = () => {
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
              <div className="content-page-header">
                <h5>Invoice Templates</h5>
              </div>
            </div>
            {/* /Page Header */}
            <div className="card mb-0">
              <div className="card-body pb-0">
                <div className="invoice-card-title">
                  <h6>General Invoice</h6>
                </div>
                <div className="row">
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-betweens ">
                      <div className="blog-image">
                        <Link to="/general-invoice-1">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice1}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/general-invoice-1">General Invoice 1</Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between">
                      <div className="blog-image">
                        <Link to="/general-invoice-2">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice2}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/general-invoice-2">General Invoice 2</Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between ">
                      <div className="blog-image">
                        <Link to="/general-invoice-3">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice3}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/general-invoice-3">General Invoice 3</Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between">
                      <div className="blog-image">
                        <Link to="/general-invoice-4">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice4}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/general-invoice-4">General Invoice 4</Link>
                      </div>
                    </div>
                  </div>
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between">
                      <div className="blog-image">
                        <Link to="/general-invoice-5">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice5}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/general-invoice-5">General Invoice 5</Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* /Invoice List */}
                </div>
                <div className="row">
                  <div className="invoice-card-title">
                    <h6>Category Based Invoice</h6>
                  </div>
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between ">
                      <div className="blog-image">
                        <Link to="/bus-ticket">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice6}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/bus-ticket">Bus Ticket Booking Invoice</Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between ">
                      <div className="blog-image">
                        <Link to="/car-booking-invoice">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice7}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/car-booking-invoice">
                          Car Booking Invoice
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between">
                      <div className="blog-image">
                        <Link to="/coffee-shop">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice8}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/coffee-shop">Coffee Shop Invoice</Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill d-flex flex-wrap align-content-between ">
                      <div className="blog-image">
                        <Link to="/domain-hosting">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice9}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/domain-hosting">
                          Domain &amp; Hosting Invoice
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between ">
                      <div className="blog-image">
                        <Link to="/ecommerce">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice10}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/ecommerce">Ecommerce Invoice</Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between ">
                      <div className="blog-image">
                        <Link to="/fitness-center">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice11}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/fitness-center">Fitness Center Invoice</Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between">
                      <div className="blog-image">
                        <Link to="/train-ticket-booking">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice12}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/train-ticket-booking">
                          Train Ticket Booking Invoice
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill d-flex flex-wrap align-content-between ">
                      <div className="blog-image">
                        <Link to="/flight-booking-invoice">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice13}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/flight-booking-invoice">
                          Flight Booking Invoice
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill d-flex flex-wrap align-content-between">
                      <div className="blog-image">
                        <Link to="/hotel-booking">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice14}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/hotel-booking">Hotel Booking Invoice</Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill d-flex flex-wrap align-content-between">
                      <div className="blog-image">
                        <Link to="/internet-billing">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice15}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/internet-billing">
                          Internet Billing Invoice
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill d-flex flex-wrap align-content-between ">
                      <div className="blog-image">
                        <Link to="/medical">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice16}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/medical">Medical Invoice</Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill d-flex flex-wrap align-content-between">
                      <div className="blog-image">
                        <Link to="/moneyexchange">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice17}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/moneyexchange">Money Exchange Invoice</Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill d-flex flex-wrap align-content-between">
                      <div className="blog-image">
                        <Link to="/movie-ticket-booking">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice18}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/movie-ticket-booking">
                          Movie Ticket Booking Invoice
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill d-flex flex-wrap align-content-between ">
                      <div className="blog-image">
                        <Link to="/restuarent-billing">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice19}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/restuarent-billing">Restaurant Invoice</Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  {/* Invoice List */}
                  <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                    <div className="blog grid-blog flex-fill d-flex flex-wrap align-content-between">
                      <div className="blog-image">
                        <Link to="/student-billing">
                          <img
                            className="img-fluid"
                            src={GeneralInvoice20}
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="invoice-content-title">
                        <Link to="/student-billing">
                          Student Billing Invoice
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice List */}
                  <div className="row">
                    <div className="invoice-card-title">
                      <h6>Receipt Invoice</h6>
                    </div>
                    {/* Invoice List */}
                    <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                      <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between">
                        <div className="blog-image">
                          <Link to="/cashreceipt-1">
                            <img
                              className="img-fluid"
                              src={Cashreceipt1}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="invoice-content-title">
                          <Link to="/cashreceipt-1">Cash Receipt 1</Link>
                        </div>
                      </div>
                    </div>
                    {/* /Invoice List */}
                    {/* Invoice List */}
                    <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                      <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between ">
                        <div className="blog-image">
                          <Link to="/cashreceipt-2">
                            <img
                              className="img-fluid"
                              src={Cashreceipt2}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="invoice-content-title">
                          <Link to="/cashreceipt-2">Cash Receipt 2</Link>
                        </div>
                      </div>
                    </div>
                    {/* /Invoice List */}
                    {/* Invoice List */}
                    <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                      <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between ">
                        <div className="blog-image">
                          <Link to="/cashreceipt-3">
                            <img
                              className="img-fluid"
                              src={Cashreceipt3}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="invoice-content-title">
                          <Link to="/cashreceipt-3">Cash Receipt 3</Link>
                        </div>
                      </div>
                    </div>
                    {/* /Invoice List */}
                    {/* Invoice List */}
                    <div className="col-md-6 col-xl-3 col-sm-12 d-md-flex d-sm-block">
                      <div className="blog grid-blog flex-fill  d-flex flex-wrap align-content-between ">
                        <div className="blog-image">
                          <Link to="/cashreceipt-4">
                            <img
                              className="img-fluid"
                              src={Cashreceipt4}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="invoice-content-title">
                          <Link to="/cashreceipt-4">Cash Receipt 4</Link>
                        </div>
                      </div>
                    </div>
                    {/* /Invoice List */}
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

export default InvoiceTemplate;
