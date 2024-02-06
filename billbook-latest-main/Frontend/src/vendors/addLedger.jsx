import React, { useEffect, useState } from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import "../_components/antd.css";
import { Table } from "antd";
import {
  onShowSizeChange,
  itemRender,
} from "../_components/paginationfunction";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import AddVendor from "./addVendor";
import DatePicker from "react-datepicker";
import axios from 'axios';
import Swal from 'sweetalert2';

const AddLedger = () => {
  const [menu, setMenu] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    date: new Date(),
    reference: "",
    mode: "debit",
  });

  const [validation, setValidation] = useState({
    name: true,
    date: true,
    reference: true,
    mode: true,
  })  

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/addLedger/ledger');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elements = Array.from(
      document.getElementsByClassName("react-datepicker-wrapper")
    );
    elements.map((element) => element.classList.add("w-100"));
  }, []);

  const datasource = data;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <>
          <h2 className="table-avatar">
            <Link to="/profile" className="avatar avatar-sm me-2">
              <img
                className="avatar-img rounded-circle"
                src={record.img}
                alt="User Image"
              />
            </Link>
            <Link to="/profile">
              {record.name} <span>{record.phone}</span>
            </Link>
          </h2>
        </>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Reference",
      dataIndex: "reference",
      sorter: (a, b) => a.reference.length - b.reference.length,
    },
    {
      title: "Created",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Mode",
      dataIndex: "mode",
      render: (text, record) => (
        <div>
          {text === "credit" && (
            <span className="text-success-light">{text}</span>
          )}
          {text === "debit" && (
            <span className="text-danger-light">{text}</span>
          )}
        </div>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <div className="dropdown dropdown-action">
          <Link
            to="#"
            className=" btn-action-icon "
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-v" />
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <ul>
              <li>
                <Link
                  className="dropdown-item"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_ledger"
                >
                  <i className="far fa-edit me-2" />
                  Edit
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_modal"
                >
                  <i className="far fa-trash-alt me-2" />
                  Delete
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ),
      sorter: (a, b) => a.action.length - b.action.length,
    },
  ];

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.post(
        'http://localhost:8000/api/addLedger/ledger',
        formData
      );
  
      console.log('Data submitted successfully:', response.data);
  
      fetchData();
  
      // Show SweetAlert success notification
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Data submitted successfully.',
      });
    } catch (error) {
      console.error('Error submitting data:', error);
  
      // Show SweetAlert error notification
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'There was an error submitting the data. Please try again.',
      });
    }
  };

  const validateForm = () => {

    const nameRegex = /^[a-zA-Z\s]*$/;
    const referenceRegex = /^\d{10}$/;
    const modeRegex = /^\d$/;

    const nameValid = nameRegex.test(formData.name);
    // const dateValid = formData.date;
    const referenceValid = referenceRegex.test(formData.reference);
    const modeValid = modeRegex.test(formData.mode);

    setValidation({
      name: nameValid,
      // data: dateValid,
      reference: referenceValid,
      mode: modeValid,

    });

    return nameValid && referenceValid && modeValid;
  };


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
                <h5>Ledger</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <Link className="btn btn-filters w-auto popup-toggle">
                        <span className="me-2">
                          <FeatherIcon icon="filter" />
                        </span>
                        Filter{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="btn-filters" to="#">
                        <span>
                          <FeatherIcon icon="grid" />
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="active btn-filters" to="#">
                        <span>
                          <FeatherIcon icon="list" />
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-primary"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_ledger"
                      >
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        Create Ledger
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Table */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card-table">
                  <div className="card-body ledger">
                    <div className="table-responsive table-striped table-hover">
                      <Table
                        pagination={{
                          total: datasource.length,
                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        columns={columns}
                        dataSource={datasource}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Table */}
          </div>
        </div>

        <AddVendor />

        {/* Add Ledger */}
        <div className="modal custom-modal fade" id="add_ledger" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Add Ledger</h4>
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
                      <label>Name<span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className={`form-control ${!validation.name ? "is-invalid" : ""}`}
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      {!validation.name && (
                        <div className="invalid-feedback">Please enter a valid name.</div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Date<span className="text-danger">*</span></label>
                      <div className="cal-icon cal-icon-info">
                      <DatePicker
                        className="datetimepicker form-control"
                        selected={formData.date}
                        onChange={(date) => setFormData({ ...formData, date })}
                      ></DatePicker>
                     
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Reference<span className="text-danger">*</span></label>
                      <input
                        type="number"
                        className={`form-control ${!validation.reference ? "is-invalid" : ""}`}
                        placeholder="Enter Reference Number"
                        value={formData.reference}
                      onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                      />
                      {!validation.reference && (
                        <div className="invalid-feedback">Please enter a reference number.</div>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group d-inline-flex align-center mb-0">
                      <label className="me-5 mb-0">Mode<span className="text-danger">*</span></label>
                      <div>
                        <label className="custom_radio me-3 mb-0">
                        <input
                          type="radio"
                          name="payment"
                          value="debit"
                          checked={formData.mode === "debit"}
                          onChange={() => setFormData({ ...formData, mode: "debit" })}
                        />
                        <span className="checkmark" /> Debit
                      </label>
                        <label className="custom_radio mb-0">
                        <input
                          type="radio"
                          name="payment"
                          value="credit"
                          checked={formData.mode === "credit"}
                          onChange={() => setFormData({ ...formData, mode: "credit" })}
                        />
                        <span className="checkmark" /> Credit
                      </label>
                      </div>
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
                  Cancel
                </Link>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn"
                  onClick={handleSubmit}
                >
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Ledger */}

        {/* Edit Ledger */}
        <div className="modal custom-modal fade" id="edit_ledger" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Edit Ledger</h4>
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
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="John Smith"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Date</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="19 Dec 2022"
                        placeholder="Select Date"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Reference</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={25689825}
                        placeholder="Enter Reference Number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group mb-0">
                      <label>Mode</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Credit"
                        placeholder="Enter Reference Number"
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
                  Cancel
                </Link>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary paid-continue-btn"
                >
                  Update
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Ledger */}

        {/* Delete Ledger */}
        <div
          className="modal custom-modal fade"
          id="delete_modal"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Ledger</h3>
                  <p>Are you sure want to delete?</p>
                </div>
                <div className="modal-btn delete-action">
                  <div className="row">
                    <div className="col-6">
                      <button
                        type="reset"
                        data-bs-dismiss="modal"
                        className="w-100 btn btn-primary paid-continue-btn"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        type="submit"
                        data-bs-dismiss="modal"
                        className="w-100 btn btn-primary paid-cancel-btn"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Ledger */}
      </div>
    </>
  );
};

export default AddLedger;
