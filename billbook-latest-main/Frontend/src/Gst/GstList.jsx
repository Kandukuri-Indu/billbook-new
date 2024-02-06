import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Select2 from "react-select2-wrapper";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import "../_components/antd.css";
import { Input, Pagination, Space, Table } from "antd";
import Data from "../assets/jsons/expenses";
import FeatherIcon from "feather-icons-react";
import {
  onShowSizeChange,
  itemRender,
} from "../_components/paginationfunction";
import AddVendor from "../vendors/addVendor";
import { async } from "regenerator-runtime";
import axios from "axios";
import Swal from "sweetalert2";
const GstList = () => {

  const [gstData, setGstData] = useState([]);

    const [gstPercentageName, setGstPercentageName] = useState();
    const [gstPercentageValue, setGstPercentageValue] = useState();

  const [validation, setValidation] = useState(
    { gstPercentageName: { isValid: true, message: '' } }
  );
  const [validation1, setValidation1] = useState(
    { gstPercentageValue: { isValid: true, message: '' } }
  )

  const handleGstPercentageName = (fieldName, value) => {
    const percentageRegex = /^[0-9\s]*$/;

    // Validation logic
    const isValid = percentageRegex.test(value);
    setGstPercentageName(value);
    setValidation({
      gstPercentageName: {
        isValid,
        message: isValid ? '' : 'Invalid  (only letters and spaces allowed)',
      },
    });
  };

  const handleGstPercentageValue = (fieldName, value) => {
    const percentagevalueRegex = /^[0-9\s]*$/;

    // Validation logic
    const isValid = percentagevalueRegex.test(value);
    setGstPercentageValue(value);
    setValidation1({
      gstPercentageValue: {
        isValid,
        message: isValid ? '' : 'Invalid  (only values allowed)',
      },
    });

  };


  const fetchGstData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/addgst/gst");
      setGstData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    fetchGstData();
  }, []);

  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const [product, setProduct] = useState([
    { id: 1, text: "Select Payment Mode" },
    { id: 2, text: "Cash" },
    { id: 3, text: "Cheque" }
  ]);

  const [payment, setPayment] = useState([
    { id: 1, text: "Select Payment Status" },
    { id: 2, text: "Paid" },
    { id: 3, text: "Payment" },
    { id: 4, text: "Pending" }
  ]);

  const datasource = gstData;
  console.log("datasource", datasource);

  const [searchText, setSearchText] = useState("");
  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleReset = () => {
    setSearchText("");
  };

  const columns = [
    {
      title: "Gst Percentage Name",
      dataIndex: "gstPercentageName",
      sorter: (a, b) => a.gstPercentageName.length - b.gstPercentageName.length,
    },
    {
      title: "Gst Percentage Value",
      dataIndex: "gstPercentageValue",
      sorter: (a, b) => a.gstPercentageValue.length - b.gstPercentageValue.length,
    },
    // {
    //   title: "Reference",
    //   dataIndex: "Reference",
    //   sorter: (a, b) => a.Reference.length - b.Reference.length,
    // },
    // {
    //   title: "Amount",
    //   dataIndex: "Amount",
    //   sorter: (a, b) => a.Amount.length - b.Amount.length,
    // },
    // {
    //   title: "Attachment",
    //   dataIndex: "Attachment",
    //   render: (text, record) => (
    //     <>
    //       <h2 className="table-avatar">
    //         <img
    //           className="avatar-img rounded"
    //           width={30}
    //           height={30}
    //           src={record.Attachment}
    //           alt="User Image"
    //         />
    //       </h2>
    //     </>
    //   ),
    //   sorter: (a, b) => a.Attachment.length - b.Attachment.length,
    // },
    // {
    //   title: "Payment Mode",
    //   dataIndex: "Payment",
    //   sorter: (a, b) => a.Payment.length - b.Payment.length,
    // },
    // {
    //   title: "Notes",
    //   dataIndex: "Notes",
    //   sorter: (a, b) => a.Notes.length - b.Notes.length,
    // },
    // {
    //   title: "Status",
    //   dataIndex: "Status",
    //   render: (text, record) => (
    //     <div>
    //       {text === "Paid" && (
    //         <span className="badge bg-success-light text-success-light">
    //           {text}
    //         </span>
    //       )}
    //       {text === "Pending" && (
    //         <span className="badge bg-warning-light text-warning-light">
    //           {text}
    //         </span>
    //       )}
    //       {text === "Cancelled" && (
    //         <span className="badge bg-danger-light">{text}</span>
    //       )}
    //     </div>
    //   ),
    //   sorter: (a, b) => a.Status.length - b.Status.length,
    // },
    {
      title: "Action",
      dataIndex: "Action",
      render: (text, record) => (
        <>
          <div className="d-flex align-items-center">
            <Link className=" btn-action-icon me-2" to="#" download="">
              {/* <i className="fe fe-download" /> */}
              <FeatherIcon icon="download" />
            </Link>
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
                      data-bs-target="#edit_expenses"
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
          </div>
        </>
      ),
      sorter: (a, b) => a.Action.length - b.Action.length,
    },
  ];


  const handleGstData = async (e) => {
    e.preventDefault();

    const GstData = {
      gstPercentageName,
      gstPercentageValue,
    }

    try {
      const response = await axios.post('http://localhost:8000/api/addgst/gst', GstData);

      if (response.status === 201) {
        // SweetAlert success message
        Swal.fire({
          icon: 'success',
          title: 'GST added successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        // SweetAlert error message
        Swal.fire({
          icon: 'error',
          title: 'Failed to add GST. Please try again.',
        });
      }

    } catch (error) {
      // SweetAlert error message
      Swal.fire({
        icon: 'error',
        title: 'An error occurred while adding the customer.',
      });

      console.error('Error:', error);
    }
  }

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
                <h5>GST</h5>
                <Input className="searh-input"
        placeholder="Search by name or phone number"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ width: 300, marginBottom:0,padding:6,border: "none",boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)" }}
      />
      <Space>
        <button onClick={handleReset} size="small" style={{ width: 90,padding:7,background:"#ed2020",border: "none",boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)",borderRadius:7,color:"#fff",position:"relative",left:"-198px"}}>
          Reset
        </button>
      </Space>
                <div className="list-btn">
                  <ul className="filter-list">
                    {/* <li>
                      <Link className="btn btn-filters w-auto popup-toggle"
                        onClick={() => setShow(!show)}
                      >
                        <span className="me-2">
                          <i className="fe fe-filter" />
                          <FeatherIcon icon="filter" />
                        </span>
                        Filter{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="btn-filters" to="#">
                        <span>
                          <i className="fe fe-settings" />
                          <FeatherIcon icon="settings" />
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="btn-filters" to="#">
                        <span>
                          <i className="fe fe-grid" />
                          <FeatherIcon icon="grid" />
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="active btn-filters" to="#">
                        <span>
                          <i className="fe fe-list" />
                          <FeatherIcon icon="list" />
                        </span>{" "}
                      </Link>
                    </li> */}
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
                        Add GST
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
                  <div className="card-body purchase">
                    <div className="table-responsive table-hover">
                    <Table
                        pagination={{
                          total: datasource ? datasource.length : 0,

                          showTotal: (total, range) =>
                            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                          showSizeChanger: true,
                          onShowSizeChange: onShowSizeChange,
                          itemRender: itemRender,
                        }}
                        columns={columns}
                        dataSource={datasource.filter((record) =>
                          record?.gstPercentageName?.includes(searchText)
                        )}
                        rowKey={(record) => record.id}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Table */}
          </div>
        </div>

        <AddVendor
          setShow={setShow}
          show={show}
        />

        <div className="modal custom-modal fade" id="add_gst" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Add GST</h4>
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
                      <label>GST Percentage<span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className={`form-control ${!validation.gstPercentageName.isValid ? 'is-invalid' : ''}`}
                        placeholder="Enter Percentage Name"
                        value={gstPercentageName}
                        onChange={(e) => handleGstPercentageName('gstPercentageName', e.target.value)}

                      />
                      {!validation.gstPercentageName.isValid && (
                        <div className="invalid-feedback">{validation.gstPercentageName.message}</div>
                      )}

                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Percentage Value<span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className={`form-control ${!validation1.gstPercentageValue.isValid ? 'is-invalid' : ''}`}
                        placeholder="Enter Percentage Value"
                        value={gstPercentageValue}
                        onChange={(e) => handleGstPercentageValue('gstPercentageValue', e.target.value)}
                      />
                      {!validation1.gstPercentageValue.isValid && (
                        <div className="invalid-feedback">{validation1.gstPercentageValue.message}</div>
                      )}
                    </div>
                  </div>
                  {/* <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Amount </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Amount"
                      />
                    </div>
                  </div> */}
                  {/* <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Payment Mode</label>
                              <Select2
                                // className="w-100"
                                data={product}
                                options={{
                                  placeholder: "Select Payment Mode",
                                }}
                              />
                    </div>
                  </div> */}
                  {/* <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Expense Date </label>
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        placeholder="Select Expense Date"
                      />
                    </div>
                  </div> */}
                  {/* <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Payment Status</label>
                              <Select2
                                // className="w-100"
                                data={payment}
                                options={{
                                  placeholder: "Select Payment Status",
                                }}
                              />
                    </div>
                  </div> */}
                  {/* <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <div className="form-upload-label">
                        <label>Attachment </label>
                      </div>
                      <div className="form-upload-file">
                        <span>
                          <i className="fe fe-upload-cloud me-2" />
                          Attach Files
                        </span>
                        <input type="file" multiple="" id="image_sign" />
                        <div id="frames" />
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="col-lg-12 col-md-12">
                    <div className="form-group mb-0">
                      <label>Notes</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Notes"
                      />
                    </div>
                  </div> */}
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
                  onClick={handleGstData}
                >
                  Add GST
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="modal custom-modal fade" id="edit_expenses" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Edit GST</h4>
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
                      <label>GST Percentage<span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className={`form-control ${!validation.gstPercentageName.isValid ? 'is-invalid' : ''}`}
                        placeholder="Enter Percentage Name"
                        value={gstPercentageName}
                        onChange={(e) => handleGstPercentageName('gstPercentageName', e.target.value)}

                      />
                      {!validation.gstPercentageName.isValid && (
                        <div className="invalid-feedback">{validation.gstPercentageName.message}</div>
                      )}

                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>Percentage Value<span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className={`form-control ${!validation1.gstPercentageValue.isValid ? 'is-invalid' : ''}`}
                        placeholder="Enter Percentage Value"
                        value={gstPercentageValue}
                        onChange={(e) => handleGstPercentageValue('gstPercentageValue', e.target.value)}
                      />
                      {!validation1.gstPercentageValue.isValid && (
                        <div className="invalid-feedback">{validation1.gstPercentageValue.message}</div>
                      )}
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
                  Update
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="modal custom-modal fade" id="delete_modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Expenses</h3>
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

      </div>
    </>
  );
};
export default GstList;
