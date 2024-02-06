import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import { ArrowIcon } from "../../_components/imagepath";

const OverviewFilter = ({show,setShow}) => {

  const [ticket, setTicket] = useState([
    { id: 1, text: "Select Ticket" },
    { id: 2, text: "Task 1" },
    { id: 3, text: "Task 2" },
    { id: 4, text: "Task 3" },
  ]);

  const [assigned, setAssigned] = useState([
    { id: 1, text: "Select Assigned" },
    { id: 2, text: "John Smith" },
    { id: 3, text: "Johnson" },
    { id: 4, text: "Randall" },
  ]);

  const [project, setProject] = useState([
    { id: 1, text: "Select Project" },
    { id: 2, text: "Project 1" },
    { id: 3, text: "Project 2" },
    { id: 4, text: "Project 3" },
  ]);

  const [category, setCategory] = useState([
    { id: 1, text: "Select Category" },
    { id: 2, text: "Category 1" },
    { id: 3, text: "Category 2" },
    { id: 4, text: "Category 3" },
  ]);

  return (
    <>
      <div className={`toggle-sidebar ${show ? 'open-filter' : '' }`}>
        <div className="sidebar-layout-filter overview-filter">
          <div className="sidebar-header">
            <h5>Filter</h5>
            <div className="d-flex">
              <div className="dropdown dropdown-action">
                <Link
                  to="#"
                  className=" btn-action-icon "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end">
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
              <Link to="#" className="sidebar-closes ms-3" onClick={() => setShow(!show)}>
                <i className="fa-regular fa-circle-xmark" />
              </Link>
            </div>
          </div>
          <div className="sidebar-body">
            <form action="#" autoComplete="off">
              <div className="form-group-item ticket-sidebar">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Ticket Status</label>
                      <div className="task-priority-btn select-status justify-content-center table-project-subtitle">
                        <select
                          onChange="this.className=this.options[this.selectedIndex].className"
                          className="selecttext"
                        >
                          <option className="selecttext" value="select">
                            Status
                          </option>
                          <option className="greentext" value="apple">
                            Done
                          </option>
                          <option className="bluetext" value="inprogress">
                            In Progress
                          </option>
                          <option className="orangetext" value="pending">
                            Waiting
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Ticket Type</label>
                            <Select2
                              className="w-100"
                              data={ticket}
                              options={{
                                placeholder: "Currency",
                              }}
                            />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Assigned To</label>
                            <Select2
                              className="w-100"
                              data={assigned}
                              options={{
                                placeholder: "Currency",
                              }}
                            />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Project</label>
                      <Link
                        className="action-sets "
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span>
                          <i className="fa-solid fa-circle text-warning-light me-1" />{" "}
                          Medium
                        </span>
                        <img
                          src={ArrowIcon}
                          width={15}
                          alt="img"
                        />
                      </Link>
                      <ul className="dropdown-menu action-drop">
                        <li>
                          <Link to="#" className="dropdown-item">
                            <i className="fa-solid fa-circle info-border me-2 text-info" />{" "}
                            High
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            <i className="fa-solid fa-circle warning-border me-2 text-warning-light" />{" "}
                            Medium
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            <i className="fa-solid fa-circle danger-border me-2 text-danger-light" />{" "}
                            Low
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Project</label>
                            <Select2
                              className="w-100"
                              data={project}
                              options={{
                                placeholder: "Currency",
                              }}
                            />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label className="form-control-label">Due Date</label>
                      <div className="cal-icon">
                        <input
                          type="email"
                          className="form-control datetimepicker"
                          placeholder="DD-MM-YYYY"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Category</label>
                            <Select2
                              className="w-100"
                              data={category}
                              options={{
                                placeholder: "Currency",
                              }}
                            />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewFilter;
