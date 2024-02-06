import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import FeatherIcon from "feather-icons-react";
import "../_components/antd.css";
import { Input, Pagination, Space, Table } from "antd";
import {
  onShowSizeChange,
  itemRender,
} from "../_components/paginationfunction";
import AddVendor from "../vendors/addVendor";
import axios from "axios";
import CustomerAddInvoiceModal from "../invoices/CustomerAddInvoiceModal";

const Customers = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [datasource, setDatasource] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleReset = () => {
    setSearchText("");
  };
  const fetchImageData = async (imageUrl) => {
    try {
      const response = await axios.get(imageUrl, { responseType: "blob" });
      const blob = response.data;
      const reader = new FileReader();

      return new Promise((resolve, reject) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("Error fetching image data:", error);
      return null;
    }
  };
  

  
  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/addCustomer/customers"
      );
      const dataWithIdsAndTotalInvoices = await Promise.all(
        response.data.map(async (item, index) => {
          const imageUrl = item.image?.url;
          const imageData = imageUrl ? await fetchImageData(imageUrl) : null;
          return {
            ...item,
            id: index + 1,
            image: imageData,
          };
        })
      );
      setDatasource(dataWithIdsAndTotalInvoices);

      console.log("tabledata", dataWithIdsAndTotalInvoices);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <>
          <h2 className="table-avatar">
            {/* <Link to="/profile" className="avatar avatar-md me-2">
              <img
                className="avatar-img rounded-circle"
                src={record.image}
                alt="User Image"
              />
            </Link> */}
            <Link to="/profile">
              {record.name}
            </Link>
          </h2>
        </>
      ),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      sorter: (a, b) => a.phone.length - b.phone.length,
    },
    {
      title: "Balance",
      dataIndex: "balance",
      sorter: (a, b) => a.balance.length - b.balance.length,
    },
    {
      title: "  Total Invoice",
      dataIndex: "totalInvoice",
      sorter: (a, b) => a.totalInvoice.length - b.totalInvoice.length,
    },
    {
      title: "Created",
      dataIndex: "created",
      sorter: (a, b) => a.created.length - b.created.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => (
        <div>
          {text === "active" && (
            <span className="badge badge-pill bg-success-light">{text}</span>
          )}
          {text === "deactive" && (
            <span className="badge badge-pill bg-danger-light">{text}</span>
          )}
        </div>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <>
          <div className="table-invoice d-flex align-items-center">
            <Link to="/add-invoice" className="btn btn-greys me-2">
              <i className="fa fa-plus-circle me-1" /> Invoice
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
              <div className="dropdown-menu dropdown-menu-end">
                <ul>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/edit-customer/${record._id}`}
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
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/customer-details/${record._id}`}
                    >
                      <i className="far fa-eye me-2" />
                      View
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/active-customers">
                      <i className="far fa-bell me-2" />
                      Active
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/deactive-customers">
                      <i className="far fa-bell-slash me-2" />
                      Deactivate
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ),
      sorter: (a, b) => a.action.length - b.action.length,
    },
  ];

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />

        <Sidebar />

        <div className="page-wrapper customers">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="content-page-header">
                <h5>Customers</h5>
                <Input className="searh-input"
        placeholder="Search by name or phone number"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ width: 300, marginBottom:0,padding:"6px 12px" ,border: "none",boxShadow: "rgba(149, 157, 165, 0.2) 2px 2px 9px" }}
      />
      <Space>
        <button onClick={handleReset} size="small" style={{ width: 90,padding:7,background:"#ed2020", border: "none",boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)",borderRadius:7,color:"#fff",position:"relative",left:"-58px"}}>
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
                      <Link className="active btn-filters" to="#">
                        <span>
                          <i className="fe fe-list" />
                          <FeatherIcon icon="list" />
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="btn-filters me-2" to="#">
                        <span>
                          <i className="fe fe-grid" />
                          <FeatherIcon icon="grid" />
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown dropdown-action">
                        <Link
                          to="#"
                          className="btn-filters me-2"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="fe fe-download" />
                            <FeatherIcon icon="download" />
                          </span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <ul className="d-block">
                            <li>
                              <Link
                                className="d-flex align-items-center download-item"
                                to="#"
                                download=""
                              >
                                <i className="far fa-file-pdf me-2" />
                                PDF
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="d-flex align-items-center download-item"
                                to="#"
                                download=""
                              >
                                <i className="far fa-file-text me-2" />
                                CVS
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li> 
                    <li>
                      <Link className="btn-filters" to="#">
                        <span>
                          <i className="fe fe-printer" />
                          <FeatherIcon icon="printer" />
                        </span>{" "}
                      </Link>
                    </li> */}
                    <li>
                      <Link className="btn btn-import" to="#">
                        <span>
                          {/* <i className="fe fe-check-square me-2" /> */}
                          <FeatherIcon icon="check-square" className="me-2" />
                          Import Customer
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link className="btn btn-primary" to="/add-customer">
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        Add Customer
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card customers">
                  <div className="card-body">
                    <div className="table-responsive table-hover">
                      {/* <Table
                        className="table"
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
                        rowKey={(record) => record.id}
                      />  */}
                      <Table
        className="table"
        pagination={{
          total: datasource.length,
          showTotal: (total, range) =>
            `Showing ${range[0]} to ${range[1]} of ${total} entries`,
          showSizeChanger: true,
        }}
        columns={columns}
        dataSource={datasource.filter((record) =>
          record.name.toLowerCase().includes(searchText.toLowerCase()) ||
          record.phone.includes(searchText) ||
          record.email.toLowerCase().includes(searchText.toLowerCase())
        )}
        rowKey={(record) => record.id}
      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AddVendor setShow={setShow} show={show} />

        <div
          className="modal custom-modal fade"
          id="delete_modal"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete FAQ</h3>
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
export default Customers;
