import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import { Input, Pagination, Space, Table } from "antd";

const CreditHead = ({show,setShow, searchText, setSearchText}) => {
 
  const handleReset = () => {
    setSearchText("");
  };
  const handleSearch = (value) => {
    setSearchText(value);
  };

  return (
    <>
      <div className="page-header">
        <div className="content-page-header">
          <h5>Credit Notes</h5>
          <Input className="searh-input"
        placeholder="Search by name or phone number"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ width: 300, marginBottom:0,padding:6, border: "none",boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)" }}
      />
      <Space>
        <button onClick={handleReset} size="small" style={{ width: 90,padding:7,background:"#ed2020", border: "none",boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)",borderRadius:7,color:"#fff",position:"relative",left:"-70px"}}>
          Reset
        </button>
      </Space>
          <div className="list-btn">
            <ul className="filter-list">
              <li>
                <Link className="btn btn-filters w-auto popup-toggle"
                onClick={() => setShow(!show)}
                >
                  <span className="me-2">
                    <i className="fe fe-filter" />
                    <FeatherIcon icon="filter"/>
                  </span>
                  Filter
                </Link>
              </li>
              {/* <li>
                <Link className="btn-filters" to="#">
                  <span>
                    <i className="fe fe-settings" />
                    <FeatherIcon icon="settings"/>
                  </span>
                </Link>
              </li>
              <li>
                <Link className="btn-filters" to="#">
                  <span>
                    <i className="fe fe-grid" />
                    <FeatherIcon icon="grid"/>
                  </span>
                </Link>
              </li> */}
              <li>
                <Link className="active btn-filters" to="#">
                  <span>
                    <i className="fe fe-list" />
                    <FeatherIcon icon="list"/>
                  </span>
                </Link>
              </li>
              <li>
                <Link className="btn btn-primary" to="/add-credit-notes">
                  <i className="fa fa-plus-circle me-2" aria-hidden="true" />
                  Credit Notes
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
    </>
  );
};

export default CreditHead;
