import React, { useState, useEffect } from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import {
  ArchiveBook,
  Clipboard,
  MessageEdit,
  Recepit,
  Rotate,
  TransactionMinus,
  img5,
} from "../_components/imagepath";
import FeatherIcon from "feather-icons-react";
import "../_components/antd.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Transactions from "./Transactions";
import { Input, Space } from "antd";

const CustomerDetails = () => {
  const { id } = useParams();
  console.log("customers id", id);

  const [activeTab, setActiveTab] = useState("profile");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const [menu, setMenu] = useState(false);


  const [searchText, setSearchText] = useState("");
  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleReset = () => {
    setSearchText("");
  };
  

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const numberOfInvoices = customerDetails?.Invoices;
  console.log("numberOfInvoices:", numberOfInvoices);

  const [customerDetails, setCustomerDetails] = useState(null);


  useEffect(() => {
    const fetchCustomerDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/addCustomer/customers/${id}`
        );
        // const data = await response.json();
        setCustomerDetails(response.data);
        console.log("Fetched Customer Details:", response.data);
      } catch (error) {
        console.error("Error fetching customer details:", error);
      }
    };

    fetchCustomerDetails();
  }, [id]);

  console.log("customerDetails:", customerDetails);

  // Assuming customerDetails is an object with the Invoices array
  const totalAmount = customerDetails?.Invoices?.reduce((total, invoice) => {
    return total + invoice.grandTotal;
  }, 0);
  const balance = customerDetails?.Invoices?.reduce((totalBalance, invoice) => {
    const totalPaid = invoice.payments.reduce(
      (acc, payment) => acc + payment.amount,
      0
    );
    const invoiceBalance = invoice.grandTotal - totalPaid;
    return totalBalance + invoiceBalance;
  }, 0);

  console.log("Total Amount:", totalAmount);
  

  const handleDelete = async (record) => {
    try {
      // Make your delete request here
      await axios.delete(
        `http://localhost:8000/api/addCustomer/customers/${record._id}`
      );
      // Update state or fetch data again if needed
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content customer-details container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>Customer Details</h5>
                <Input className="searh-input"
        placeholder="Search by name or phone number"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ width: 500, marginBottom:0,padding:6,border: "none",boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)"}}
      />
      <Space>
        <button onClick={handleReset} size="small" style={{ width: 100,padding:7,background:"white",border: "none",boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)",borderRadius:7,color:"grey",position:"relative",left:"-110px"}}>
          Reset
        </button>
      </Space>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="card bg-white">
                  <div className="card-header"></div>
                  <div className="card-body">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#profiletab"
                          data-bs-toggle="tab"
                        >
                          Profile Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#basictab2"
                          data-bs-toggle="tab"
                        >
                          Transaction Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#basictab3"
                          data-bs-toggle="tab"
                        >
                          Ledger(Statement)
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane show active" id="profiletab">
                        {/* /Page Header */}
                        <div className="card customer-details-group">
                          <div className="card-body">
                            <div className="row align-items-center">
                              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                                <div className="customer-details">
                                  <div className="d-flex align-items-center">
                                    <span className="customer-widget-img d-inline-flex">
                                      <img
                                        className="rounded-circle"
                                        src={
                                          customerDetails &&
                                          customerDetails.image?.url
                                        }
                                        alt=""
                                      />
                                    </span>
                                    <div className="customer-details-cont">
                                      {/* <h6>John Smith</h6> */}
                                      {customerDetails && (
                                        <h6>{customerDetails.name}</h6>
                                      )}
                                      <p>Cl-12345</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                                <div className="customer-details">
                                  <div className="d-flex align-items-center">
                                    <span className="customer-widget-icon d-inline-flex">
                                      <i className="fe fe-mail">
                                        <FeatherIcon icon="mail" />
                                      </i>
                                    </span>
                                    <div className="customer-details-cont">
                                      <h6>Email Address</h6>
                                      <p>
                                        {customerDetails &&
                                          customerDetails.email}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                                <div className="customer-details">
                                  <div className="d-flex align-items-center">
                                    <span className="customer-widget-icon d-inline-flex">
                                      <i className="fe fe-phone">
                                        <FeatherIcon icon="phone" />
                                      </i>
                                    </span>
                                    <div className="customer-details-cont">
                                      <h6>Phone Number</h6>
                                      <p>
                                        {customerDetails &&
                                          customerDetails.phone}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                                <div className="customer-details">
                                  <div className="d-flex align-items-center">
                                    <span className="customer-widget-icon d-inline-flex">
                                      <i className="fe fe-airplay">
                                        <FeatherIcon icon="airplay" />
                                      </i>
                                    </span>
                                    <div className="customer-details-cont">
                                      <h6>Company Name</h6>
                                      <p>Kanakku Corporation</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                                <div className="customer-details">
                                  <div className="d-flex align-items-center">
                                    <span className="customer-widget-icon d-inline-flex">
                                      <i className="fe fe-globe">
                                        <FeatherIcon icon="globe" />
                                      </i>
                                    </span>
                                    <div className="customer-details-cont">
                                      <h6>Website</h6>
                                      <p className="customer-mail">
                                        {customerDetails &&
                                          customerDetails.website}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                                <div className="customer-details">
                                  <div className="d-flex align-items-center">
                                    <span className="customer-widget-icon d-inline-flex">
                                      <i className="fe fe-briefcase">
                                        <FeatherIcon icon="briefcase" />
                                      </i>
                                    </span>
                                    <div className="customer-details-cont">
                                      <h6>Company Address</h6>
                                      <p>
                                        4712 Cherry Ridge Drive Rochester, NY
                                        14620.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Search Filter */}
                        <div id="filter_inputs" className="card filter-card">
                          <div className="card-body pb-0">
                            <div className="row">
                              <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                  <label>Name</label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                  <label>Email</label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                              <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                  <label>Phone</label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Search Filter */}
                        {/* Inovices card */}
                        <div className="row">
                          <div className="col-xl-2 col-lg-4 col-sm-6 col-12 d-flex">
                            <div className="card inovices-card w-100">
                              <div className="card-body">
                                <div className="dash-widget-header">
                                  <span className="inovices-widget-icon bg-info-light">
                                    <img src={Recepit} alt="" />
                                  </span>
                                  <div className="dash-count">
                                    <div className="dash-title">
                                      Total Invoice
                                    </div>
                                    <div className="dash-counts">
                                      <p>{totalAmount}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                  <p className="inovices-all">
                                    No of Invoice{" "}
                                    <span className="rounded-circle bg-light-gray">
                                      {customerDetails &&
                                        customerDetails &&
                                        customerDetails.Invoices.length}
                                    </span>
                                  </p>
                                  <p className="inovice-trending text-success-light">
                                    {numberOfInvoices}{" "}
                                    <span className="ms-2">
                                      {/* <i className="fe fe-trending-up" /> */}
                                      {/* Assuming this is the icon for trending up */}
                                      <i className="feather icon-trending-up" />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-4 col-sm-6 col-12 d-flex">
                            <div className="card inovices-card w-100">
                              <div className="card-body">
                                <div className="dash-widget-header">
                                  <span className="inovices-widget-icon bg-primary-light">
                                    <img src={TransactionMinus} alt="" />
                                  </span>
                                  <div className="dash-count">
                                    <div className="dash-title">
                                      Total Outstanding
                                    </div>
                                    <div className="dash-counts">
                                      <p>{balance}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                  <p className="inovices-all">
                                    No of Invoice{" "}
                                    <span className="rounded-circle bg-light-gray">
                                      03
                                    </span>
                                  </p>
                                  <p className="inovice-trending text-success-light">
                                    04{" "}
                                    <span className="ms-2">
                                      {/* <i className="fe fe-trending-up" /> */}
                                      <FeatherIcon icon="trending-up" />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-4 col-sm-6 col-12 d-flex">
                            <div className="card inovices-card w-100">
                              <div className="card-body">
                                <div className="dash-widget-header">
                                  <span className="inovices-widget-icon bg-warning-light">
                                    <img src={ArchiveBook} alt="" />
                                  </span>
                                  <div className="dash-count">
                                    <div className="dash-title">
                                      Total Overdue
                                    </div>
                                    <div className="dash-counts">
                                      <p>$7825</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                  <p className="inovices-all">
                                    No of Invoice{" "}
                                    <span className="rounded-circle bg-light-gray">
                                      01
                                    </span>
                                  </p>
                                  <p className="inovice-trending text-danger-light">
                                    03{" "}
                                    <span className="ms-2">
                                      {/* <i className="fe fe-trending-down" /> */}
                                      <FeatherIcon icon="trending-down" />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-4 col-sm-6 col-12 d-flex">
                            <div className="card inovices-card w-100">
                              <div className="card-body">
                                <div className="dash-widget-header">
                                  <span className="inovices-widget-icon bg-primary-light">
                                    <img src={Clipboard} alt="" />
                                  </span>
                                  <div className="dash-count">
                                    <div className="dash-title">Cancelled</div>
                                    <div className="dash-counts">
                                      <p>100</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                  <p className="inovices-all">
                                    No of Invoice{" "}
                                    <span className="rounded-circle bg-light-gray">
                                      04
                                    </span>
                                  </p>
                                  <p className="inovice-trending text-danger-light">
                                    05{" "}
                                    <span className="ms-2">
                                      {/* <i className="fe fe-trending-down" /> */}
                                      <FeatherIcon icon="trending-down" />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-4 col-sm-6 col-12 d-flex">
                            <div className="card inovices-card w-100">
                              <div className="card-body">
                                <div className="dash-widget-header">
                                  <span className="inovices-widget-icon bg-green-light">
                                    <img src={MessageEdit} alt="" />
                                  </span>
                                  <div className="dash-count">
                                    <div className="dash-title">Draft</div>
                                    <div className="dash-counts">
                                      <p>$125,586</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                  <p className="inovices-all">
                                    No of Invoice{" "}
                                    <span className="rounded-circle bg-light-gray">
                                      06
                                    </span>
                                  </p>
                                  <p className="inovice-trending text-danger-light">
                                    02{" "}
                                    <span className="ms-2">
                                      {/* <i className="fe fe-trending-down" /> */}
                                      <FeatherIcon icon="trending-down" />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-4 col-sm-6 col-12 d-flex">
                            <div className="card inovices-card w-100">
                              <div className="card-body">
                                <div className="dash-widget-header">
                                  <span className="inovices-widget-icon bg-danger-light">
                                    <img src={Rotate} alt="" />
                                  </span>
                                  <div className="dash-count">
                                    <div className="dash-title">Recurring</div>
                                    <div className="dash-counts">
                                      <p>$86,892</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                  <p className="inovices-all">
                                    No of Invoice{" "}
                                    <span className="rounded-circle bg-light-gray">
                                      03
                                    </span>
                                  </p>
                                  <p className="inovice-trending text-success-light">
                                    02{" "}
                                    <span className="ms-2">
                                      {/* <i className="fe fe-trending-up" /> */}
                                      <FeatherIcon icon="trending-up" />
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* /Inovices card */}
                        {/* Table */}
                        
                        {/* Delete Items Modal */}
                        <div
                          className="modal custom-modal fade"
                          id="delete_modal"
                          role="dialog"
                        >
                          <div className="modal-dialog modal-dialog-centered modal-md">
                            <div className="modal-content">
                              <div className="modal-body">
                                <div className="form-header">
                                  <h3>Delete Customer Details</h3>
                                  <p>Are you sure want to delete?</p>
                                </div>
                                <div className="modal-btn delete-action">
                                  <div className="row">
                                    <div className="col-6">
                                      <Link
                                        to="#"
                                        data-bs-dismiss="modal"
                                        className="btn btn-primary paid-continue-btn"
                                      >
                                        Delete
                                      </Link>
                                    </div>
                                    <div className="col-6">
                                      <Link
                                        to="#"
                                        data-bs-dismiss="modal"
                                        className="btn btn-primary paid-cancel-btn"
                                      >
                                        Cancel
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="basictab2">
                        <Transactions id={id}/>
                      </div>
                      <div className="tab-pane" id="basictab3">
                        Tab content 3
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

export default CustomerDetails;
