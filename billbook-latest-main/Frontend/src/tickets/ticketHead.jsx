import React from "react";
import FeatherIcon from "feather-icons-react";
import { Sort } from "../_components/imagepath";
import { Recepit } from "../_components/imagepath";
import { TransactionMinus } from "../_components/imagepath";
import { ArchiveBook } from "../_components/imagepath";
import { Clipboard } from "../_components/imagepath";
import { MessageEdit } from "../_components/imagepath";
import { Rotate } from "../_components/imagepath";
import { Link } from "react-router-dom";

const TicketHead = ({show,setShow}) => {
  return (
    <>
      <div className="page-header">
        <div className="content-page-header">
          <h5>Tickets</h5>
          <div className="list-btn">
            <ul className="filter-list">
              <li>
                <div className="short-filter">
                  <img className="me-2" src={Sort} alt="Sort by select" />
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
                    <FeatherIcon icon="filter" />
                  </span>
                  Filter{" "}
                </Link>
              </li>
              <li>
                <Link className="btn-filters" to="#">
                  <span>
                    {/* <i className="fe fe-settings" /> */}
                    <FeatherIcon icon="settings"/>
                  </span>{" "}
                </Link>
              </li>

              <li>
                <Link className="btn-filters" to="/tickets-kanban">
                  <span>
                    {/* <i className="fe fe-grid" /> */}
                    <FeatherIcon icon="grid" />
                  </span>{" "}
                </Link>
              </li>
              <li>
                <Link className="active btn-filters" to="/tickets-list">
                  <span>
                    {/* <i className="fe fe-list" /> */}
                    <FeatherIcon icon="list" />
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
                  <i className="fa fa-plus-circle me-2" aria-hidden="true" />
                  New Tickets
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

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
                  <img src={TransactionMinus} alt="" />
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
                  <img src={Clipboard} alt="" />
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
    </>
  );
};

export default TicketHead;
