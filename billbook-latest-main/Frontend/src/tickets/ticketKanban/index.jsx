import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import KanbanBody from "./kanbanBody";
import FeatherIcon from "feather-icons-react";
import { ArchiveBook, Clipboard, MessageEdit, Recepit, Rotate, Sort, TransactionMinus } from "../../_components/imagepath";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import AddVendor from "../../vendors/addVendor";
import DatePicker from "react-datepicker";
import Select2 from "react-select2-wrapper";


const TicketKanban = () => {
  const [menu, setMenu] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

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

  useEffect(() => {
    let elements = Array.from(
      document.getElementsByClassName("react-datepicker-wrapper")
    );
    elements.map((element) => element.classList.add("w-100"));
  }, []);

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
                <h5>Tickets</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <div className="short-filter">
                        <img
                          className="me-2"
                          src={Sort}
                          alt="Sort by select"
                        />
                        <div className="sort-by">
                          <select className="sort">
                            <option>Sort by: Date</option>
                            <option>Sort by: Date 1</option>
                            <option>Sort by: Date 2</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link className="btn btn-filters w-auto popup-toggle"
                       onClick={() => setShow(!show)}
                      >
                        <span className="me-2">
                          {/* <i className="fe fe-filter" /> */}
                          <FeatherIcon icon="filter"/>
                        </span>
                        Filter{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="active btn-filters"
                        to="/tickets-kanban"
                      >
                        <span>
                          {/* <i className="fe fe-grid" /> */}
                          <FeatherIcon icon="grid"/>
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="btn-filters" to="/tickets-list">
                        <span>
                          {/* <i className="fe fe-list" /> */}
                          <FeatherIcon icon="list"/>
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-primary"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_ticket"
                      >
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        New Tickets
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

            <div className="row">
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
                <div className="card inovices-card">
                  <div className="card-body">
                    <div className="dash-widget-header mb-0">
                      <span className="inovices-widget-icon rounded-circle bg-info-light">
                        <img src={Recepit} alt="" />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Total Tickets</div>
                        <div className="dash-counts">
                          <p className="mb-0">$298</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
                <div className="card inovices-card">
                  <div className="card-body">
                    <div className="dash-widget-header mb-0">
                      <span className="inovices-widget-icon rounded-circle bg-primary-light">
                        <img
                          src={TransactionMinus}
                          alt=""
                        />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Completed</div>
                        <div className="dash-counts">
                          <p className="mb-0">$325,215</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
                <div className="card inovices-card">
                  <div className="card-body">
                    <div className="dash-widget-header mb-0">
                      <span className="inovices-widget-icon rounded-circle bg-warning-light">
                        <img src={ArchiveBook} alt="" />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">In Progress</div>
                        <div className="dash-counts">
                          <p className="mb-0">$7825</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
                <div className="card inovices-card">
                  <div className="card-body">
                    <div className="dash-widget-header mb-0">
                      <span className="inovices-widget-icon rounded-circle bg-primary-light">
                        <img
                          src={Clipboard}
                          alt=""
                        />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Unassigned</div>
                        <div className="dash-counts">
                          <p className="mb-0">100</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
                <div className="card inovices-card">
                  <div className="card-body">
                    <div className="dash-widget-header mb-0">
                      <span className="inovices-widget-icon rounded-circle bg-green-light">
                        <img src={MessageEdit} alt="" />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">New</div>
                        <div className="dash-counts">
                          <p className="mb-0">$125,586</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-12">
                <div className="card inovices-card">
                  <div className="card-body">
                    <div className="dash-widget-header mb-0">
                      <span className="inovices-widget-icon rounded-circle bg-danger-light">
                        <img src={Rotate} alt="" />
                      </span>
                      <div className="dash-count">
                        <div className="dash-title">Hold Tickets</div>
                        <div className="dash-counts">
                          <p className="mb-0">$86,892</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card invoices-tabs-card">
              <div className="invoices-main-tabs">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="invoices-tabs">
                      <ul>
                        <li>
                          <Link to="/tickets-kanban" className="active">
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
                          <Link to="/tickets-list-cancelled">Cancelled</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <KanbanBody/>
            
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

export default TicketKanban;
