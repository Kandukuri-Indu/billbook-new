import React, { useState } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import FeatherIcon from "feather-icons-react";
import {
  TicketIcon,
  img1,
  img2,
  img4,
  img5,
} from "../../_components/imagepath";
import { Link } from "react-router-dom";
import OverviewFilter from "./overviewFilter";

const TicketDetails = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content ticket-overview container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header ">
                <h5>Ticket Overview</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <Link
                        className="btn btn-primary popup-toggle rounded-circle d-inline-flex p-2"
                        to="#"
                        onClick={() => setShow(!show)}
                      >
                        {/* <i className="fe fe-filter" aria-hidden="true" /> */}
                        <FeatherIcon icon="filter" aria-hidden="true" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
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
            <div className="ticket-details-group">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="customer-details">
                    <div className="d-flex align-items-center">
                      <span className="ticket-widget-img rounded-circle d-inline-flex">
                        <img src={TicketIcon} alt="" />
                      </span>
                      <div className="ticket-details-cont">
                        <p>TK-105</p>
                        <h6>New Support Ticket</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="ticket-details text-lg-end text-md-end">
                    <span className="badge bg-warning-light text-warning-light">
                      Medium
                    </span>
                    <span className="badge bg-success-light ms-2">Paid</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ticket-description-group">
              <h6>Description</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="ticket-information ticket-overview">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="customer-details">
                    <div className="d-flex align-items-center">
                      <span className="customer-widget-img d-inline-flex">
                        <img className="rounded-circle" src={img5} alt="" />
                      </span>
                      <div className="customer-details-cont">
                        <h6>Requester</h6>
                        <p>John Smith</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="customer-details">
                    <div className="d-flex align-items-center">
                      <span className="customer-widget-icon rounded-circle d-inline-flex">
                        {/* <i className="fe fe-calendar" /> */}
                        <FeatherIcon icon="calendar" />
                      </span>
                      <div className="customer-details-cont">
                        <h6>Requested Date</h6>
                        <p>30 Dec, 2022</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  <div className="customer-details border-0">
                    <div className="d-flex align-items-center">
                      <span className="customer-widget-icon rounded-circle d-inline-flex">
                        {/* <FeatherIcon icon="file-text"/> */}
                        <FeatherIcon icon="file-text" />
                      </span>
                      <div className="customer-details-cont">
                        <h6>Subject</h6>
                        <p>Support Ticket</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ticket-history ticket-information pb-0">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="card-inform">
                    <div className="ticket-info d-flex align-items-center justify-content-between">
                      <h6>Attachments</h6>
                      <label className="ticket-upload upload-doc mb-0">
                        <span className="report-info">
                          {/* <i className="fe fe-paperclip me-2" /> */}
                          <FeatherIcon icon="paperclip" className="me-2" />
                        </span>
                        Add File
                        <input type="file" multiple="" id="image_personal" />
                      </label>
                    </div>
                  </div>
                  {/* Support Ticket */}
                  <div className="support-details d-flex align-items-center justify-content-between Overview">
                    <div className="d-flex align-items-center">
                      <span className="support-widget-icon rounded-circle d-inline-flex">
                        <FeatherIcon icon="file-text" />
                      </span>
                      <div className="support-details-cont">
                        <h6>New Support Ticket</h6>
                        <p>3.7MB</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link className="btn-action-icon me-2" to="#" download="">
                        {/* <FeatherIcon icon="download"/> */}
                        <FeatherIcon icon="download" />
                      </Link>
                      <div className="dropdown dropdown-action">
                        <Link
                          to="#"
                          className="btn-action-icon"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="far fa-edit me-2" />
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="far fa-trash-alt me-2" />
                                Delete
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="far fa-eye me-2" />
                                View
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Support Ticket */}
                  {/* Support Ticket */}
                  <div className="support-details d-flex align-items-center justify-content-between Overview">
                    <div className="d-flex align-items-center">
                      <span className="support-widget-icon rounded-circle d-inline-flex">
                        {/* <FeatherIcon icon="file-text"/> */}
                        <FeatherIcon icon="file-text" />
                      </span>
                      <div className="support-details-cont">
                        <h6>New Support Ticket</h6>
                        <p>3.7MB</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link className="btn-action-icon me-2" to="#" download="">
                        {/* <FeatherIcon icon="download"/> */}
                        <FeatherIcon icon="download" />
                      </Link>
                      <div className="dropdown dropdown-action">
                        <Link
                          to="#"
                          className="btn-action-icon"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="far fa-edit me-2" />
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="far fa-trash-alt me-2" />
                                Delete
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="far fa-eye me-2" />
                                View
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Support Ticket */}
                  {/* Support Ticket */}
                  <div className="support-details d-flex align-items-center justify-content-between Overview">
                    <div className="d-flex align-items-center">
                      <span className="support-widget-icon rounded-circle d-inline-flex">
                        <FeatherIcon icon="file-text" />
                      </span>
                      <div className="support-details-cont">
                        <h6>New Support Ticket</h6>
                        <p>3.7MB</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link className="btn-action-icon me-2" to="#" download="">
                        <FeatherIcon icon="download" />
                      </Link>
                      <div className="dropdown dropdown-action">
                        <Link
                          to="#"
                          className="btn-action-icon"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="far fa-edit me-2" />
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="far fa-trash-alt me-2" />
                                Delete
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="far fa-eye me-2" />
                                View
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Support Ticket */}
                  {/* Support Ticket */}
                  <div className="support-details d-flex align-items-center justify-content-between Overview">
                    <div className="d-flex align-items-center">
                      <span className="support-widget-icon rounded-circle d-inline-flex">
                        <FeatherIcon icon="file-text" />
                      </span>
                      <div className="support-details-cont">
                        <h6>New Support Ticket</h6>
                        <p>3.7MB</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link className="btn-action-icon me-2" to="#" download="">
                        <FeatherIcon icon="download" />
                      </Link>
                      <div className="dropdown dropdown-action">
                        <Link
                          to="#"
                          className="btn-action-icon"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fas fa-ellipsis-v" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="far fa-edit me-2" />
                                Edit
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="far fa-trash-alt me-2" />
                                Delete
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <i className="far fa-eye me-2" />
                                View
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Support Ticket */}
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="card-inform">
                    <div className="ticket-info d-flex align-items-center justify-content-between">
                      <h6>History</h6>
                    </div>
                  </div>
                  <div className="card-inform d-block mt-lg-5 mt-0">
                    <ul className="activity-feed">
                      <li className="feed-item">
                        <span className="feed-text">
                          <strong className="text-gray-dark me-2">
                            John Smith
                          </strong>{" "}
                          Created a new response Created a new response
                        </span>
                        <p>30 Dec 2022 01:24AM</p>
                      </li>
                      <li className="feed-item">
                        <span className="feed-text">
                          <strong className="text-gray-dark me-2">
                            Forest Kroch{" "}
                          </strong>{" "}
                          Lorem ipsum dolor sit amet,
                        </span>
                        <p>24 Dec 2022 10:36AM</p>
                      </li>
                      <li className="feed-item">
                        <span className="feed-text">
                          <strong className="text-gray-dark me-2">
                            Townsend Seary{" "}
                          </strong>{" "}
                          Sed ut perspiciatis unde
                        </span>
                        <p>18 Dec 2022 09:18PM</p>
                      </li>
                      <li className="feed-item">
                        <span className="feed-text">
                          <strong className="text-gray-dark me-2">
                            Margaretta Worvell{" "}
                          </strong>{" "}
                          Nemo enim ipsam voluptatem
                        </span>
                        <p>19 Jan 2022 09:18PM</p>
                      </li>
                      <li className="feed-item">
                        <span className="feed-text">
                          <strong className="text-gray-dark me-2">
                            Harald Kowalski{" "}
                          </strong>{" "}
                          Neque porro quisquam est, qui dolorem
                        </span>
                        <p>12 May 2022 09:18PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* comments */}
            <div className="comments">
              <div className="comments-head">
                <h5>Comments</h5>
              </div>
              {/* card */}
              <div className="card">
                <div className="card-body">
                  <div className="comments-details d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <span className="comments-widget-img rounded-circle d-inline-flex">
                        <img
                          className="avatar-img rounded-circle"
                          src={img1}
                          alt="User Image"
                        />
                      </span>
                      <div className="comments-details-cont">
                        <h6>Dennis</h6>
                        <p>a week ago</p>
                      </div>
                    </div>
                    <Link to="#" className="reply-comment d-flex align-items-center">
                      <span>
                        {/* <FeatherIcon icon="corner-down-left" className="me-2"/> */}
                        <i className="fa fa-corner-down-left">
                        <FeatherIcon icon="corner-down-left" className="me-2" />
                        </i>
                      </span>
                      Reply
                    </Link>
                  </div>
                  <div className="card-describe">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt labore dolore magna aliqua.
                      Ut enim minim veniam, nostrud exercitation ullamco laboris
                      nisi ut aliquip ex commodo consequat. Duis aute non
                      proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </p>
                  </div>
                </div>
              </div>
              {/* /card */}
              {/* card */}
              <div className="card">
                <div className="card-body">
                  <div className="comments-details d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <span className="comments-widget-img rounded-circle d-inline-flex">
                        <img
                          className="avatar-img rounded-circle"
                          src={img2}
                          alt="User Image"
                        />
                      </span>
                      <div className="comments-details-cont">
                        <h6>Alexandr</h6>
                        <p>a week ago</p>
                      </div>
                    </div>
                    <Link to="#" className="reply-comment d-flex align-items-center">
                      <span>
                        <FeatherIcon icon="corner-down-left" className="me-2" />
                      </span>
                      Reply
                    </Link>
                  </div>
                  <div className="card-describe">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt labore dolore magna aliqua.
                      Ut enim minim veniam, nostrud exercitation ullamco laboris
                      nisi ut aliquip ex commodo consequat. Duis aute non
                      proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </p>
                  </div>
                </div>
              </div>
              {/* /card */}
              {/* card */}
              <div className="card">
                <div className="card-body">
                  <div className="comments-details d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <span className="comments-widget-img rounded-circle d-inline-flex">
                        <img
                          className="avatar-img rounded-circle"
                          src={img4}
                          alt="User Image"
                        />
                      </span>
                      <div className="comments-details-cont">
                        <h6>Doris Brown</h6>
                        <p>a week ago</p>
                      </div>
                    </div>
                    <Link to="#" className="reply-comment d-flex align-items-center">
                      <span>
                        <FeatherIcon icon="corner-down-left" className="me-2" />
                      </span>
                      Reply
                    </Link>
                  </div>
                  <div className="card-describe">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt labore dolore magna aliqua.
                      Ut enim minim veniam, nostrud exercitation ullamco laboris
                      nisi ut aliquip ex commodo consequat. Duis aute non
                      proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </p>
                  </div>
                </div>
              </div>
              {/* /card */}
            </div>
            {/* /comments */}
            <div className="comments">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Comments"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary">
                      Post Comments
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <OverviewFilter
        setShow={setShow}
        show={show}
      />
        
      </div>
    </>
  );
};

export default TicketDetails;
