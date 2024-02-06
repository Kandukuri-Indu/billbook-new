import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import "../_components/antd.css";
import { Pagination, Table } from "antd";
import Data from "../assets/jsons/expenses";
import FeatherIcon from "feather-icons-react";
import {
  onShowSizeChange,
  itemRender,
} from "../_components/paginationfunction";
import AddVendor from "../vendors/addVendor";
import { async } from "regenerator-runtime";
import axios from "axios";
// import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

import { Switch, Card, Typography } from "antd";
const { Title, Paragraph } = Typography;
const CashBank = () => {
  const [menu, setMenu] = useState(false);

  const [showContent, setShowContent] = useState(false);
  // const [bankdata, setBankData] = useState([]);
  const [selec, setSelec] = useState(null);
  const [bankDetails, setBankDetails] = useState([]);
  console.log("bankDetails", bankDetails);

  const [selectedBankIndex, setSelectedBankIndex] = useState(null);
  const [selectedBankData, setSelectedBankData] = useState(null);

  const handleAccountClick = (account) => {
    setSelectedBankData(account);
  };
  const handleBankLinkClick = (index) => {
    setSelectedBankIndex(index);
  };
  console.log("bankindex", selectedBankIndex);

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      date: date,
    });
  };
  const handleToggle = () => {
    setShowContent(!showContent);
  };

  const [formData, setFormData] = useState({
    accountName: "",
    openingBalance: "",
    date: "",
    bankAccountNumber: "",
    reenterBankAccountNumber: "",
    IFSCCode: "",
    branchName: "",
    accountHoldersName: "",
    UPIID: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/BankDeatils/bank-details",
        formData
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/BankDeatils/bank-details"
      );
      console.log("Data:", response.data);
      setBankData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("details", bankData);
  const [bankData, setBankData] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0); // Assuming default index is 0

  // const fetchData = async (index) => {
  //   try {
  //     const response = await axios.get("http://localhost:8000/api/BankDeatils/bank-details");
  //     console.log("Data:", response.data);
  //     if (response.data && response.data[index]) {
  //       setBankData(response.data[index]);
  //     } else {
  //       console.error("Error: Invalid index or no data found");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(selectedIndex);
  // }, [selectedIndex]);

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
                <h5>Cash and Bank</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <button
                        className="btn btn-filters"
                        // to="#"
                        // data-bs-toggle="modal"
                        // data-bs-target="#add_gst"
                      >
                        <i class="fa-solid fa-plus-minus px-2"></i>
                        Add/Reduce Money
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-filters">
                        <i class="fa-solid fa-arrow-right-arrow-left px-2"></i>
                        Transfer Money
                      </button>
                    </li>
                    <li>
                      <Link
                        className="btn btn-primary"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_gst"
                      >
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        Add Account
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="header-title">Total Balance:</h6>
                          </div>
                          <div>
                            <h6>₹10,000</h6>
                          </div>
                        </div>
                        <div
                          className="nav flex-column nav-pills nav-pills-tab"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <div>
                            <hr />
                            <h6>Cash</h6>
                            <hr />
                          </div>
                          <a
                            className="nav-link  show mb-1  py-2 px-1"
                            id="v-pills-home-tab"
                            data-bs-toggle="pill"
                            href="#v-pills-home"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                          >
                            <div className="d-flex justify-content-between align-items-center">
                              <div>
                                <h6 className="header-title">Cash in hand</h6>
                              </div>
                              <div>
                                <h6>₹10</h6>
                              </div>
                            </div>
                          </a>
                          <div>
                            <hr />
                            <h6>Bank Accounts</h6>
                            <hr />
                          </div>

                          <a
                            className="nav-link mb-1 py-2 px-1"
                            id="v-pills-profile-tab"
                            data-bs-toggle="pill"
                            href="#v-pills-profile"
                            role="tab"
                            aria-controls="v-pills-profile"
                            aria-selected="false"
                          >
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                <img
                                  src="https://mybillbook.in/app//assets/bank-icons/default.svg"
                                  alt=""
                                  className="me-3"
                                />
                                <h6 className="header-title">
                                  Unlinked Transactions
                                </h6>
                              </div>
                              <div>
                                <h6>₹0</h6>
                              </div>
                            </div>
                          </a>
                          {bankData &&
                            bankData.length > 0 &&
                            bankData.map((account, index) => (
                              <li
                                key={index}
                                onClick={() => handleAccountClick(account)}
                              >
                                {account?.branchName} -{" "}
                                {account?.openingBalance}
                              </li>
                            ))}
                          {/* {bankData && bankData.length > 0 && bankData.map((bankData, index) => (
                            <a
                              key={index}
                              className="nav-link mb-1 py-2 px-1"
                              id={`v-pills-messages-tab-${index}`}
                              data-bs-toggle="pill"
                              href={`#v-pills-messages-${index}`}
                              role="tab"
                              aria-controls={`v-pills-messages-${index}`}
                              aria-selected="false"
                              onClick={() => handleBankLinkClick(index)}
                            >
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="https://mybillbook.in/app//assets/bank-icons/default.svg"
                                    alt=""
                                    className="me-3"
                                  />
                                  <h6 className="header-title">
                                    {bankData.branchName}
                                  </h6>
                                </div>
                                <div>
                                  <h6>₹{bankData.openingBalance}</h6>
                                </div>
                              </div>
                            </a>
                          ))} */}
                          <div>
                            <hr />
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#add_gst"
                            >
                              +Add Account
                            </Link>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end col*/}
                      <div className="col-sm-8">
                        <div>
                          <button className="border-0 px-4 py-3">
                            Transactions
                          </button>
                        </div>

                        <div className="tab-content p-0">
                          <div
                            className="tab-pane fade active show"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                          ></div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-profile"
                            role="tabpanel"
                            aria-labelledby="v-pills-profile-tab"
                          ></div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-messages"
                            role="tabpanel"
                            aria-labelledby="v-pills-messages-tab"
                          >
                            <hr />
                            {/* {selectedBankIndex !== null && (
                              <div className="row">
                                <div className="col-md-8">
                                  <div className="py-1">
                                    <p>
                                      Account Holder's Name:{" "}
                                      <span>
                                        {
                                          bankdata[selectedBankIndex]
                                            .accountHoldersName
                                        }
                                      </span>
                                    </p>
                                  </div>
                                  <div className="py-1">
                                    <p>
                                      Account Number:{" "}
                                      <span>
                                        {
                                          bankdata[selectedBankIndex]
                                            .bankAccountNumber
                                        }
                                      </span>
                                    </p>
                                  </div>
                                  <div className="py-1">
                                    <p>
                                      Account Name:{" "}
                                      <span>
                                        {
                                          bankdata[selectedBankIndex]
                                            .accountName
                                        }
                                      </span>{" "}
                                      <span>Deactivated</span>
                                    </p>
                                  </div>
                                  <div className="py-1">
                                    <p>
                                      IFSC Code:{" "}
                                      <span>
                                        {bankdata[selectedBankIndex].IFSCCode}
                                      </span>
                                    </p>
                                  </div>
                                  <div className="py-1">
                                    <p>
                                      UPI:{" "}
                                      <span>
                                        {bankdata[selectedBankIndex].UPIID}c
                                      </span>
                                    </p>
                                  </div>
                                  <div className="py-1">
                                    <p>
                                      Bank & Branch:{" "}
                                      <span>
                                        {bankdata[selectedBankIndex].branchName}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="cash-bank-activate-buttons filter-list">
                                    <button
                                      className="btn btn-filters"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_gst1"
                                      onClick={() =>
                                        setSelectedBankIndex(selectedBankIndex)
                                      }
                                    >
                                      Reactivate Active
                                    </button>
                                  </div>
                                  <div className="cash-bank-activate-buttons">
                                    <button
                                      className="btn btn-filters"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_gst2"
                                      onClick={() =>
                                        setSelectedBankIndex(selectedBankIndex)
                                      }
                                    >
                                      Share Bank Details
                                    </button>
                                  </div>
                                  <div className="cash-bank-activate-buttons">
                                    <button
                                      className="btn btn-filters"
                                      data-bs-toggle="modal"
                                      data-bs-target="#add_gst3"
                                      onClick={() =>
                                        setSelectedBankIndex(selectedBankIndex)
                                      }
                                    >
                                      Download Statement
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )} */}
                            {bankData ? (
                              <div>
                                <h2>Account Detail ssssssss</h2>
                                <p>Account Name: {bankData.accountName}</p>
                                <p>
                                  Opening Balance: {bankData.openingBalance}
                                </p>
                                <p>Date: {bankData.date}</p>
                                <p>
                                  Bank Account Number:{" "}
                                  {bankData.bankAccountNumber}
                                </p>
                                <p>IFSC Code: {bankData.IFSCCode}</p>
                                {/* Add more fields as needed */}
                              </div>
                            ) : (
                              <p>Loading...</p>
                            )}
                          </div>
                          <hr />
                        </div>

                        <div>
                          <div className="row">
                            <div className="form-group col-md-6">
                              <div
                                className="cal-icon cal-icon-info"
                                style={{ width: "200px" }}
                              >
                                <DatePicker
                                  className="datetimepicker form-control"
                                  selected={formData.date}
                                  onChange={handleDateChange}
                                  dateFormat="dd-MM-yyyy"
                                  showTimeInput={false}
                                />
                              </div>
                            </div>
                            <div className="cash-bank-download-option col-md-6">
                              <i class="fa-solid fa-download"></i>
                            </div>
                          </div>
                          {/* <div className="my-4 py-4">
                            <div className="d-flex justify-content-center">
                              <img
                                src="https://mybillbook.in/app//assets/images/no-transaction.png"
                                alt=""
                              />
                            </div>
                            <h6 className="d-flex justify-content-center">
                              No Transactions
                            </h6>
                            <p className="d-flex justify-content-center">
                              Your don't have any transaction in selected period
                            </p>
                          </div> */}
                          {selectedBankData && (
                            <div>
                              <h2>Account Details</h2>
                              <p>
                                Account Name: {selectedBankData.accountName}
                              </p>
                              <p>
                                Opening Balance:{" "}
                                {selectedBankData.openingBalance}
                              </p>
                              <p>Date: {selectedBankData.date}</p>
                              <p>
                                Bank Account Number:{" "}
                                {selectedBankData.bankAccountNumber}
                              </p>
                              <p>IFSC Code: {selectedBankData.IFSCCode}</p>
                              <p>Branch Name: {selectedBankData.branchName}</p>
                              <p>
                                Account Holder's Name:{" "}
                                {selectedBankData.accountHoldersName}
                              </p>
                              <p>UPI ID: {selectedBankData.UPIID}</p>
                              {/* Add more fields as needed */}
                            </div>
                          )}
                        </div>
                      </div>{" "}
                      {/* end col*/}
                    </div>{" "}
                    {/* end row*/}
                  </div>
                </div>{" "}
                {/* end card*/}
              </div>{" "}
              {/* end col */}
              {/* end col */}
            </div>
            {/* /Page Header */}
            {/* /Add account form page */}
            <div className="modal custom-modal fade" id="add_gst" role="dialog">
              <div className="modal-dialog modal-dialog-centered modal-md">
                <div className="modal-content">
                  <div className="modal-header border-0 pb-0">
                    <div className="form-header modal-header-title text-start mb-0">
                      <h4 className="mb-0">Add Bank Account</h4>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span className="align-center" aria-hidden="true">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>
                            Account Name<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter bank account Name"
                            name="accountName"
                            value={formData.accountName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="row">
                          <div className="form-group col-lg-6 col-md-6">
                            <label>
                              Opening Balance
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="ex: ₹10,000"
                              name="openingBalance"
                              value={formData.openingBalance}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="form-group col-lg-6 col-md-6">
                            <div className="form-group">
                              <label>
                                As of date<span className="text-danger">*</span>
                              </label>
                              <div className="cal-icon cal-icon-info">
                                <DatePicker
                                  className="datetimepicker form-control"
                                  selected={formData.date}
                                  onChange={handleDateChange}
                                  dateFormat="dd-MM-yyyy"
                                  showTimeInput={false}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="d-flex justify-content-between">
                          <div>
                            <label className="">Add Bank Details</label>
                          </div>
                          <div>
                            <Switch
                              className=""
                              checked={showContent}
                              onChange={handleToggle}
                            />
                          </div>
                        </div>
                        <Card
                          style={{ marginTop: "20px", border: "none" }}
                          className="adding-bank-details-toggle"
                        >
                          {showContent && (
                            <div>
                              <div className="col-lg-12 col-md-12">
                                <div className="row">
                                  <div className="form-group col-lg-6 col-md-6">
                                    <label>
                                      Bank Account Number
                                      <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="ex: 123456790"
                                      name="bankAccountNumber"
                                      value={formData.bankAccountNumber}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  <div className="form-group col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label>
                                        Re-Enter Bank Account Number
                                        <span className="text-danger">*</span>
                                      </label>
                                      <div className="cal-icon cal-icon-info">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="ex: 123456790"
                                          name="reenterBankAccountNumber"
                                          value={
                                            formData.reenterBankAccountNumber
                                          }
                                          onChange={handleInputChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="row">
                                  <div className="form-group col-lg-6 col-md-6">
                                    <label>
                                      IFSC Code
                                      <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="ex: 123456790"
                                      name="IFSCCode"
                                      value={formData.IFSCCode}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  <div className="form-group col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label>
                                        Bank & Branch Name
                                        <span className="text-danger">*</span>
                                      </label>
                                      <div className="cal-icon cal-icon-info">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="ex: 123456790"
                                          name="branchName"
                                          value={formData.branchName}
                                          onChange={handleInputChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="row">
                                  <div className="form-group col-lg-6 col-md-6">
                                    <label>
                                      Account Holders Name
                                      <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="ex: 123456790"
                                      name="accountHoldersName"
                                      value={formData.accountHoldersName}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  <div className="form-group col-lg-6 col-md-6">
                                    <div className="form-group">
                                      <label>UPI ID</label>
                                      <div className="cal-icon cal-icon-info">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="ex: 123456790"
                                          name="UPIID"
                                          value={formData.UPIID}
                                          onChange={handleInputChange}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </Card>
                      </div>
                    </div>
                  </div>
                  {/* <div className="modal-footer">
                    <a
                      href="#"
                      data-bs-dismiss="modal"
                      className="btn btn-primary paid-cancel-btn me-2"
                    >
                      Cancel
                    </a>
                    <a
                      href="#"
                      data-bs-dismiss="modal"
                      className="btn btn-primary paid-continue-btn"
                      onClick={handleSubmit}
                    //   data-bs-dismiss="modal"
                    >
                      Add Account
                    </a>
                  </div> */}

                  <div className="modal-footer">
                    <button
                      className="btn btn-primary paid-cancel-btn me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      className="btn btn-primary paid-continue-btn"
                      onClick={handleSubmit}
                      data-bs-dismiss="modal"
                    >
                      Add Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal custom-modal fade"
              id="add_gst1"
              role="dialog"
            >
              <div className="modal-dialog modal-dialog-centered modal-md">
                <div className="modal-content">
                  <div className="modal-header border-0 pb-0">
                    <div className="form-header modal-header-title text-start mb-0">
                      <h4 className="mb-0">Update Bank Account</h4>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span className="align-center" aria-hidden="true">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>
                            Account Name<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter bank account Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="row">
                          <div className="form-group col-lg-6 col-md-6 m-0">
                            <label>
                              Bank Account Number
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="ex: ₹10,000"
                            />
                          </div>
                          <div className="form-group col-lg-6 col-md-6 m-0">
                            <div className="form-group">
                              <label>
                                Bank & Branch Name
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="ex: ₹10,000"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="row">
                          <div className="form-group col-lg-6 col-md-6 m-0">
                            <label>
                              Bank & Branch Name
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="ex: ₹10,000"
                            />
                          </div>
                          <div className="form-group col-lg-6 col-md-6 m-0">
                            <div className="form-group">
                              <label>
                                Account Holders Name
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="ex: ₹10,000"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>
                            UPI ID<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter bank account Name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <a
                      href="#"
                      data-bs-dismiss="modal"
                      className="btn btn-primary paid-cancel-btn me-2"
                    >
                      Cancel
                    </a>
                    <a
                      href="#"
                      data-bs-dismiss="modal"
                      className="btn btn-primary paid-continue-btn"
                    >
                      Edit Bank Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div
              className="modal custom-modal fade"
              id="add_gst2"
              role="dialog"
            >
              <div className="modal-dialog modal-dialog-centered modal-md">
                <div className="modal-content">
                  <div className="modal-header border-0 pb-0">
                    <div className="form-header modal-header-title text-start mb-0">
                      <h4 className="mb-0">Share Account Details</h4>
                    </div>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span className="align-center" aria-hidden="true">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>
                            Account Holder Name
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter bank account Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>
                            Account number<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter bank account Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>
                            IFSC code<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter bank account Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>
                            Bank & Branch<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter bank account Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>
                            UPI ID<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter bank account Name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <a
                      href="#"
                      data-bs-dismiss="modal"
                      className="btn btn-primary paid-cancel-btn me-2"
                    >
                      Cancel
                    </a>
                    <a
                      href="#"
                      data-bs-dismiss="modal"
                      className="btn btn-primary paid-continue-btn"
                    >
                      Edit Bank Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* /Add account form page */}
          </div>
        </div>
      </div>
    </>
  );
};
export default CashBank;
