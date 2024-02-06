import React from "react";
import KanbanGridOne from "./kanbanGridOne";
import KanbanGridTwo from "./kanbanGridTwo";
import KanbanGridThree from "./kanbanGridThree";
import KanbanGridFour from "./kanbanGridFour";
import KanbanGridFive from "./kanbanGridFive";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const KanbanBody = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="kanban-ticket-main">
            <ul className="kanban-ticket-list css-equal-heights">
              <li className="kanban-ticket-grid">
                <div className="kanban-ticket d-flex justify-content-between align-items-center">
                  <div className="kanban-head css-equal-heights">
                    <h6 className="me-2">Open</h6>
                    <span className="inovices-widget-icon rounded-circle bg-warning-light text-warning-light">
                      5
                    </span>
                  </div>
                  <Link to="#">
                    <span>
                      <i className="fe fe-plus">
                        {/* <FeatherIcon icon="plus"/> */}
                        <FeatherIcon icon="plus" />
                      </i>
                    </span>
                  </Link>
                </div>
              </li>
              <li className="kanban-ticket-grid">
                <div className="kanban-ticket d-flex justify-content-between align-items-center">
                  <div className="kanban-head css-equal-heights">
                    <h6 className="me-2">In Progress</h6>
                    <span className="inovices-widget-icon rounded-circle bg-warning-light text-warning-light">
                      8
                    </span>
                  </div>
                  <Link to="#">
                    <span>
                      <i className="fe fe-plus">
                        {/* <FeatherIcon icon="plus"/> */}
                        <FeatherIcon icon="plus" />
                      </i>
                    </span>
                  </Link>
                </div>
              </li>
              <li className="kanban-ticket-grid">
                <div className="kanban-ticket d-flex justify-content-between align-items-center">
                  <div className="kanban-head css-equal-heights">
                    <h6 className="me-2">Hold</h6>
                    <span className="inovices-widget-icon rounded-circle bg-warning-light text-warning-light">
                      6
                    </span>
                  </div>
                  <Link to="#">
                    <span>
                      <i className="fe fe-plus">
                        {/* <FeatherIcon icon="plus"/> */}
                        <FeatherIcon icon="plus" />
                      </i>
                    </span>
                  </Link>
                </div>
              </li>
              <li className="kanban-ticket-grid">
                <div className="kanban-ticket d-flex justify-content-between align-items-center">
                  <div className="kanban-head css-equal-heights">
                    <h6 className="me-2">Unassigned</h6>
                    <span className="inovices-widget-icon rounded-circle bg-warning-light text-warning-light">
                      5
                    </span>
                  </div>
                  <Link to="#">
                    <span>
                      <i className="fe fe-plus">
                        {/* <FeatherIcon icon="plus"/> */}
                        <FeatherIcon icon="plus" />
                      </i>
                    </span>
                  </Link>
                </div>
              </li>
              <li className="kanban-ticket-grid">
                <div className="kanban-ticket d-flex justify-content-between align-items-center">
                  <div className="kanban-head css-equal-heights">
                    <h6 className="me-2">Solved</h6>
                    <span className="inovices-widget-icon rounded-circle bg-warning-light text-warning-light">
                      10
                    </span>
                  </div>
                  <Link to="#">
                    <span>
                      <i className="fe fe-plus">
                        {/* <FeatherIcon icon="plus"/> */}
                        <FeatherIcon icon="plus" />
                      </i>
                    </span>
                  </Link>
                </div>
              </li>
            </ul>

            <ul className="kanban-ticket-list css-equal-heights">
              <KanbanGridOne />

              <KanbanGridTwo />

              <KanbanGridThree />

              <KanbanGridFour />

              <KanbanGridFive />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default KanbanBody;
