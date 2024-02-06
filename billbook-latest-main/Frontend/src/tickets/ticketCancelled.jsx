import React, { useEffect, useState } from "react";
import TicketHead from "./ticketHead";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import AddVendor from "../vendors/addVendor";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Select2 from "react-select2-wrapper";
import FeatherIcon from "feather-icons-react";

const TicketCancelled = () => {

  const [menu, setMenu] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [show, setShow] = useState(false);


  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elements = Array.from(
      document.getElementsByClassName("react-datepicker-wrapper")
    );
    elements.map((element) => element.classList.add("w-100"));
  }, []);

  const [category, setCategory] = useState([
    { id: 1, text: "Select Priority" },
    { id: 2, text: "Priority 1" },
    { id: 3, text: "Priority 2" },
    { id: 4, text: "Priority 3" },
  ]);

  const [Status, setStatus] = useState([
    { id: 1, text: "Select Status" },
    { id: 2, text: "Status 1" },
    { id: 3, text: "Status 2" },
    { id: 4, text: "Status 3" },
  ]);

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content tickets container-fluid">
          
            <TicketHead 
              setShow={setShow}
              show={show}
            />

            <div className="card invoices-tabs-card">
              <div className="invoices-main-tabs">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="invoices-tabs">
                      <ul>
                        <li>
                          <Link to="/tickets-kanban">
                            All
                          </Link>
                        </li>
                        <li>
                          <Link to="/tickets-list-pending">Pending</Link>
                        </li>
                        <li>
                          <Link to="/tickets-list-overdue">Overdue</Link>
                        </li>
                        <li>
                          <Link to="/tickets-list-draft">Draft</Link>
                        </li>
                        <li>
                          <Link to="/tickets-list-recurring">Recurring</Link>
                        </li>
                        <li>
                          <Link to="/tickets-list-cancelled" className="active">Cancelled</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="comments">
              {/* card */}
              <div className="card">
                <div className="card-body card-support">
                  <div className="comments-details d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center describe-btn mt-0">
                      <h6 className="fw-bolder text-gray-dark">
                        Support for theme
                      </h6>
                      <span className="badge bg-danger-light text-danger-light ms-3">
                        Cancelled
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="reply-comment d-flex text-gray-light"
                    >
                      <span>
                        <i className="fe fe-clock text-gray-light fw-normal me-2">
                        <FeatherIcon icon="clock"/>
                        </i>
                      </span>
                      <span className="text-gray-light fw-normal">
                        Just Now
                      </span>
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
                  <div className="describe-btn">
                    <span className="badge bg-warning-light text-warning-light me-2">
                      Medium
                    </span>
                    <span className="badge badge-gray-outline me-2">#4987</span>
                    <span>
                      <i className="fe fe-message-square text-gray-light fw-normal me-2 me-2">
                        <FeatherIcon icon="message-square"/>
                      </i>
                      3
                    </span>
                  </div>
                </div>
              </div>
              {/* /card */}
              {/* card */}
              <div className="card">
                <div className="card-body card-support">
                  <div className="comments-details d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center describe-btn mt-0">
                      <h6 className="fw-bolder text-gray-dark">
                        Verify your email
                      </h6>
                      <span className="badge bg-danger-light text-danger-light ms-3">
                        Cancelled
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="reply-comment d-flex text-gray-light"
                    >
                      <span>
                        <i className="fe fe-clock text-gray-light fw-normal me-2">
                        <FeatherIcon icon="clock"/>
                        </i>
                      </span>
                      <span className="text-gray-light fw-normal">
                        Just Now
                      </span>
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
                  <div className="describe-btn">
                    <span className="badge bg-danger-light text-danger-light me-2">
                      High
                    </span>
                    <span className="badge badge-gray-outline me-2">#4987</span>
                    <span>
                      <i className="fe fe-message-square text-gray-light fw-normal me-2 me-2">
                        <FeatherIcon icon="message-square"/>
                      </i>
                      3
                    </span>
                  </div>
                </div>
              </div>
              {/* /card */}
              {/* card */}
              <div className="card">
                <div className="card-body card-support">
                  <div className="comments-details d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center describe-btn mt-0">
                      <h6 className="fw-bolder text-gray-dark">
                        Calling for help
                      </h6>
                      <span className="badge bg-danger-light text-danger-light ms-3">
                        Cancelled
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="reply-comment d-flex text-gray-light"
                    >
                      <span>
                        <i className="fe fe-clock text-gray-light fw-normal me-2">
                        <FeatherIcon icon="clock"/>
                        </i>
                      </span>
                      <span className="text-gray-light fw-normal">
                        Just Now
                      </span>
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
                  <div className="describe-btn">
                    <span className="badge bg-primary-light me-2">Low</span>
                    <span className="badge badge-gray-outline me-2">#4987</span>
                    <span>
                      <i className="fe fe-message-square text-gray-light fw-normal me-2 me-2">
                        <FeatherIcon icon="message-square"/>
                      </i>
                      3
                    </span>
                  </div>
                </div>
              </div>
              {/* /card */}
              {/* card */}
              <div className="card">
                <div className="card-body card-support">
                  <div className="comments-details d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center describe-btn mt-0">
                      <h6 className="fw-bolder text-gray-dark">Management</h6>
                      <span className="badge bg-danger-light text-danger-light ms-3">
                        Cancelled
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="reply-comment d-flex text-gray-light"
                    >
                      <span>
                        <i className="fe fe-clock text-gray-light fw-normal me-2">
                        <FeatherIcon icon="clock"/>
                        </i>
                      </span>
                      <span className="text-gray-light fw-normal">
                        Just Now
                      </span>
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
                  <div className="describe-btn">
                    <span className="badge bg-warning-light text-warning-light me-2">
                      Low
                    </span>
                    <span className="badge badge-gray-outline me-2">#4987</span>
                    <span>
                      <i className="fe fe-message-square text-gray-light fw-normal me-2 me-2">
                        <FeatherIcon icon="message-square"/>
                      </i>
                      3
                    </span>
                  </div>
                </div>
              </div>
              {/* /card */}
            </div>

          </div>
        </div>

        <AddVendor 
          setShow={setShow}
          show={show}
        />

        <div className="modal custom-modal fade" id="add_ticket" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Add Ticket</h4>
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
                      <label>Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Assigned Name</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Assigned Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Assigned Date</label>
                      <div className="cal-icon cal-icon-info">
                        <DatePicker
                          className="datetimepicker form-control"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        ></DatePicker>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Created Date</label>
                      <div className="cal-icon cal-icon-info">
                        <DatePicker
                          className="datetimepicker form-control"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        ></DatePicker>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Due Date</label>
                      <div className="cal-icon cal-icon-info">
                        <DatePicker
                          className="datetimepicker form-control"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        ></DatePicker>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Assignee Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Assignee Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Priority</label>
                      <Select2
                        // className="w-100"
                        data={category}
                        options={{
                          placeholder: "Select Priority",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-0">
                      <label>Status</label>
                      <Select2
                        // className="w-100"
                        data={Status}
                        options={{
                          placeholder: "Select status",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-cancel-btn me-2"
                >
                  Back
                </Link>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn"
                >
                  Save
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default TicketCancelled;
