import React from "react";
import { img1, img2, img4, img5 } from "../../_components/imagepath";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";

const KanbanGridFour = () => {
  return (
    <>
      <li className="kanban-ticket-grid">
        <div className="card-kanban">
          <div className="kanban-box">
            <div className="kanban-name d-flex justify-content-between align-items-center">
              <span className="badge bg-primary-light">Low</span>
              <div className="dropdown dropdown-action">
                <Link
                  to="#"
                  className="action-icon dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-h" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end">
                  <Link className="dropdown-item" to="#">
                    <i className="far fa-edit me-2" />
                    Edit
                  </Link>
                  <Link className="dropdown-item" to="#">
                    <i className="far fa-eye me-2" />
                    View
                  </Link>
                  <Link className="dropdown-item" to="#">
                    <i className="far fa-trash-alt me-2" />
                    Delete
                  </Link>
                </div>
              </div>
            </div>
            <h6>Support for theme</h6>
            <div className="ticket-due d-flex">
              <div className="ticket-due-id me-2">
                <span className="badge badge-gray-outline">#4987</span>
              </div>
              <div className="ticket-due-status">
                <span className="badge badge bg-success-light">Paid</span>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <ul className="kanban-ticket-img d-flex align-items-center">
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Member 1"
                  >
                    <img
                      className="avatar-img rounded-circle"
                      src={img1}
                      alt="img"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Member 3"
                  >
                    <img
                      className="avatar-img rounded-circle"
                      src={img2}
                      alt="img"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Member 4"
                  >
                    <img
                      className="avatar-img rounded-circle"
                      src={img4}
                      alt="img"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Member 5"
                  >
                    <img
                      className="avatar-img rounded-circle"
                      src={img5}
                      alt="img"
                    />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="#">
                    <span className="d-flex justify-content-center align-items-center">
                      <FeatherIcon icon="plus"/>
                    </span>
                  </Link>
                </li>
              </ul>
              <div className="progressset">
                <p>
                  <span>
                    <i className="far fa-calendar me-2" />
                  </span>{" "}
                  Jan 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="kanban-ticket-grid">
        <div className="card-kanban">
          <div className="kanban-box">
            <div className="kanban-name d-flex justify-content-between align-items-center">
              <span className="badge bg-danger-light">High</span>
              <div className="dropdown dropdown-action">
                <Link
                  to="#"
                  className="action-icon dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-h" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end">
                  <Link className="dropdown-item" to="#">
                    <i className="far fa-edit me-2" />
                    Edit
                  </Link>
                  <Link className="dropdown-item" to="#">
                    <i className="far fa-eye me-2" />
                    View
                  </Link>
                  <Link className="dropdown-item" to="#">
                    <i className="far fa-trash-alt me-2" />
                    Delete
                  </Link>
                </div>
              </div>
            </div>
            <h6>Management</h6>
            <div className="ticket-due d-flex">
              <div className="ticket-due-id me-2">
                <span className="badge badge-gray-outline">#4987</span>
              </div>
              <div className="ticket-due-status">
                <span className="badge bg-danger-light">Cancelled</span>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <ul className="kanban-ticket-img d-flex align-items-center">
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Member 1"
                  >
                    <img
                      className="avatar-img rounded-circle"
                      src={img1}
                      alt="img"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Member 3"
                  >
                    <img
                      className="avatar-img rounded-circle"
                      src={img2}
                      alt="img"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Member 4"
                  >
                    <img
                      className="avatar-img rounded-circle"
                      src={img4}
                      alt="img"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Member 5"
                  >
                    <img
                      className="avatar-img rounded-circle"
                      src={img5}
                      alt="img"
                    />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="#">
                    <span className="d-flex justify-content-center align-items-center">
                      <FeatherIcon icon="plus"/>
                    </span>
                  </Link>
                </li>
              </ul>
              <div className="progressset">
                <p>
                  <span>
                    <i className="far fa-calendar me-2" />
                  </span>{" "}
                  Jan 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="kanban-ticket-grid">
        <div className="card-kanban">
          <div className="kanban-box">
            <div className="kanban-name d-flex justify-content-between align-items-center">
              <span className="badge badge bg-primary-light">Low</span>
              <div className="dropdown dropdown-action">
                <Link
                  to="#"
                  className="action-icon dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-h" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end">
                  <Link className="dropdown-item" to="#">
                    <i className="far fa-edit me-2" />
                    Edit
                  </Link>
                  <Link className="dropdown-item" to="#">
                    <i className="far fa-eye me-2" />
                    View
                  </Link>
                  <Link className="dropdown-item" to="#">
                    <i className="far fa-trash-alt me-2" />
                    Delete
                  </Link>
                </div>
              </div>
            </div>
            <h6>Verify your email</h6>
            <div className="ticket-due d-flex">
              <div className="ticket-due-id me-2">
                <span className="badge badge-gray-outline">#4987</span>
              </div>
              <div className="ticket-due-status">
                <span className="badge bg-danger-light">Cancelled</span>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <ul className="kanban-ticket-img d-flex align-items-center">
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Member 1"
                  >
                    <img
                      className="avatar-img rounded-circle"
                      src={img1}
                      alt="img"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Member 3"
                  >
                    <img
                      className="avatar-img rounded-circle"
                      src={img2}
                      alt="img"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Member 4"
                  >
                    <img
                      className="avatar-img rounded-circle"
                      src={img4}
                      alt="img"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Member 5"
                  >
                    <img
                      className="avatar-img rounded-circle"
                      src={img5}
                      alt="img"
                    />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="#">
                    <span className="d-flex justify-content-center align-items-center">
                      <FeatherIcon icon="plus"/>
                    </span>
                  </Link>
                </li>
              </ul>
              <div className="progressset">
                <p>
                  <span>
                    <i className="far fa-calendar me-2" />
                  </span>{" "}
                  Jan 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="kanban-ticket-grid">
        <div className="card-kanban">
          <div className="kanban-box">
            <div className="kanban-name d-flex justify-content-between align-items-center">
              <span className="badge bg-warning-light text-warning-light">
                Medium
              </span>
              <div className="dropdown dropdown-action">
                <Link
                  to="#"
                  className="action-icon dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-h" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end">
                  <Link className="dropdown-item" to="#">
                    <i className="far fa-edit me-2" />
                    Edit
                  </Link>
                  <Link className="dropdown-item" to="#">
                    <i className="far fa-eye me-2" />
                    View
                  </Link>
                  <Link className="dropdown-item" to="#">
                    <i className="far fa-trash-alt me-2" />
                    Delete
                  </Link>
                </div>
              </div>
            </div>
            <h6>Support for theme</h6>
            <div className="ticket-due d-flex">
              <div className="ticket-due-id me-2">
                <span className="badge badge-gray-outline">#4987</span>
              </div>
              <div className="ticket-due-status">
                <span className="badge badge bg-success-light">Paid</span>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <ul className="kanban-ticket-img d-flex align-items-center">
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Member 1"
                  >
                    <img
                      className="avatar-img rounded-circle"
                      src={img1}
                      alt="img"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Member 3"
                  >
                    <img
                      className="avatar-img rounded-circle"
                      src={img2}
                      alt="img"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Member 4"
                  >
                    <img
                      className="avatar-img rounded-circle"
                      src={img4}
                      alt="img"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="Member 5"
                  >
                    <img
                      className="avatar-img rounded-circle"
                      src={img5}
                      alt="img"
                    />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="#">
                    <span className="d-flex justify-content-center align-items-center">
                      <FeatherIcon icon="plus"/>
                    </span>
                  </Link>
                </li>
              </ul>
              <div className="progressset">
                <p>
                  <span>
                    <i className="far fa-calendar me-2" />
                  </span>{" "}
                  Jan 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default KanbanGridFour;
