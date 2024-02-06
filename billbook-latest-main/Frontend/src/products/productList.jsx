import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import FeatherIcon from "feather-icons-react";
import { DropIcon } from "../_components/imagepath";
import "../_components/antd.css";
import Select2 from "react-select2-wrapper";
import { Input, Pagination, Space, Table } from "antd";
import DatePicker from "react-datepicker";
import {
  onShowSizeChange,
  itemRender,
} from "../_components/paginationfunction";
import AddVendor from "../vendors/addVendor";
import { FilterChart, search } from "../_components/imagepath";
import axios from 'axios';

const ProductList = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const [imageURL, setImageURL] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setImageURL(base64Image);
        setFormData({
          ...formData,
          image: base64Image,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const [currencyOptions, setcurrencyOptions] = useState([
    { id: 1, text: "0" },
    { id: 2, text: "1" },
    { id: 3, text: "2" },
    { id: 4, text: "3" },
  ]);
  const [datasource, setDatasource] = useState([]);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/addProduct/products");

        const dataWithIds = response.data.map((item, index) => ({
          ...item,
          id: index + 1,
        }));

        setDatasource(dataWithIds);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [searchText, setSearchText] = useState("");

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleReset = () => {
    setSearchText("");
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Item",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Code",
      dataIndex: "generateBarcode",
      sorter: (a, b) => a.generateBarcode.length - b.generateBarcode.length,
    },
    {
      title: "Category",
      dataIndex: "itemCategory",
      sorter: (a, b) => a.itemCategory.length - b.itemCategory.length,
    },
    {
      title: "Units",
      dataIndex: "units",
      sorter: (a, b) => a.units.length - b.units.length,
    },
    {
      title: "Quantity",
      dataIndex: "quality",
      sorter: (a, b) => a.additionalDetails.quality.length - b.additionalDetails.quality.length,
    },
    {
      title: "Sales Price",
      dataIndex: "sales",
      sorter: (a, b) => a.sales.length - b.sales.length,
    },
    {
      title: "Purchase Price",
      dataIndex: "purchase",
      sorter: (a, b) => a.purchase.length - b.purchase.length,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <div className="d-flex align-items-center">
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
                  <Link className="dropdown-item" to="/view-product">
                    <i class="fa-regular fa-eye me-2"></i>
                    View
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
      ),
      sorter: (a, b) => a.action.length - b.action.length,
    },
  ];



  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header ">
                <h5>Products / Services</h5>
                <Input className="searh-input"
                  placeholder="Search by name or phone number"
                  value={searchText}
                  onChange={(e) => handleSearch(e.target.value)}
                  style={{ width: 300, marginBottom: 0, padding: 6, border: "none", boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)" }}
                />
                <Space>
                  <button onClick={handleReset} size="small" style={{ width: 90, padding: 7, background: "#ed2020", border: "none", boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)", borderRadius: 7, color: "#fff", position: "relative", left: "-30px" }}>
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
                          <i className="fe fe-grid" />
                          <FeatherIcon icon="grid" />
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="active btn-filters me-2" to="#">
                        <span>
                          <i className="fe fe-list" />
                          <FeatherIcon icon="list" />
                        </span>{" "}
                      </Link>
                    </li>
                    <li className="">
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
                        <div className="dropdown-menu dropdown-menu-right">
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
                    </li> */}
                    <li>
                      <Link className="btn-filters me-2" to="#">
                        <span>
                          {/* <i className="fe fe-printer" /> */}
                          <FeatherIcon icon="printer" />
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="btn btn-import me-2" to="#">
                        <span>
                          {/* <i className="fe fe-inbox me-2" />  */}
                          <FeatherIcon icon="inbox" className="me-2" />
                          Import
                        </span>
                      </Link>
                    </li>

                    {/* <Link className="btn btn-primary" to="/add-product">
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        Add Product
                      </Link> */}

                    {/* add product button  */}
                    <div className="button-list">
                      {/* Responsive modal */}
                      <button
                        type="button"
                        className="btn btn-filters mt-1 me-1"
                        data-bs-toggle="modal"
                        data-bs-target="#bs-example-modal-lg"
                      >
                        <span className="me-2">
                          <FeatherIcon icon="grid" />
                        </span>
                        Add Product
                      </button>
                    </div>
                    {/* add product button  */}

                    {/* add product modal  */}
                    <div
                      className="modal fade"
                      id="bs-example-modal-lg"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="myLargeModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg modal-lg-width">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h4 className="modal-title" id="myLargeModalLabel">
                              Create New Item
                            </h4>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-xl-12">
                                <div className="card">
                                  <div className="card-body">
                                    <div className="row">
                                      <div className="col-sm-3 pricing-details-tab">
                                        <div
                                          className="nav flex-column nav-pills nav-pills-tab"
                                          id="v-pills-tab"
                                          role="tablist"
                                          aria-orientation="vertical"
                                        >
                                          <a
                                            className="nav-link active show mb-1"
                                            id="v-pills-home-tab"
                                            data-bs-toggle="pill"
                                            href="#v-pills-home"
                                            role="tab"
                                            aria-controls="v-pills-home"
                                            aria-selected="true"
                                          >
                                            <span className="me-2">
                                              <FeatherIcon icon="file-text" />
                                            </span>
                                            Basic Details <span className="accountprofilesettings-start-mark">*</span>
                                          </a>
                                          <p className="header-title-advance-details">Advance Details</p>
                                          <a
                                            className="nav-link mb-1"
                                            id="v-pills-profile-tab"
                                            data-bs-toggle="pill"
                                            href="#v-pills-profile"
                                            role="tab"
                                            aria-controls="v-pills-profile"
                                            aria-selected="false"
                                          >
                                            <span className="me-2">
                                              <FeatherIcon icon="layers" />
                                            </span>
                                            Stock Details
                                          </a>
                                          <a
                                            className="nav-link mb-1"
                                            id="v-pills-messages-tab"
                                            data-bs-toggle="pill"
                                            href="#v-pills-messages"
                                            role="tab"
                                            aria-controls="v-pills-messages"
                                            aria-selected="false"
                                          >
                                            <span className="me-2">
                                              <FeatherIcon icon="dollar-sign" />
                                            </span>
                                            Pricing Details
                                          </a>
                                          <a
                                            className="nav-link mb-1"
                                            id="v-pills-settings-tab"
                                            data-bs-toggle="pill"
                                            href="#v-pills-settings"
                                            role="tab"
                                            aria-controls="v-pills-settings"
                                            aria-selected="false"
                                          >
                                            <span className="me-2">
                                              <FeatherIcon icon="columns" />
                                            </span>
                                            Custom Fields
                                          </a>
                                        </div>
                                      </div>{" "}
                                      {/* end col*/}
                                      <div className="col-sm-9  pricing-details-tab-right pricing-details-tab-padding">
                                        <div className="tab-content">
                                          <div
                                            className="tab-pane fade active show"
                                            id="v-pills-home"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-home-tab"
                                          >
                                            <div className="row">
                                              <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group">
                                                  <label>Item Type <span className="accountprofilesettings-start-mark">*</span></label>
                                                  <div className="">
                                                    <label className="custom_radio me-3">
                                                      <input
                                                        type="radio"
                                                        name="payment"
                                                        defaultChecked="true"
                                                      />
                                                      <span className="checkmark" /> Product
                                                    </label>
                                                    <label className="custom_radio">
                                                      <input type="radio" name="payment" />
                                                      <span className="checkmark" /> Service
                                                    </label>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group">
                                                  <label>Category</label>
                                                  <Select2
                                                    className="w-100"
                                                    data={currencyOptions}
                                                    options={{
                                                      placeholder: "website",
                                                    }}
                                                  />
                                                </div>
                                              </div>
                                              <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group">
                                                  <label>Item Name <span className="accountprofilesettings-start-mark">*</span></label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="item name"
                                                  />
                                                </div>
                                              </div>
                                              <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group manage-business-enable-tds">
                                                  <p>Show item in online store</p>
                                                  <span>
                                                    <label class="switch">
                                                      <input type="checkbox" />
                                                      <span class="slider round"></span>
                                                    </label>
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group">
                                                  <label>Sales Price</label>
                                                  <div className="input-group">
                                                    <input
                                                      type="text"
                                                      className="form-control"
                                                      aria-label="Text input with dropdown button"
                                                    />
                                                    <button
                                                      className="btn btn-outline-secondary dropdown-toggle"
                                                      type="button"
                                                      data-bs-toggle="dropdown"
                                                      aria-expanded="false"
                                                    >
                                                      Dropdown
                                                    </button>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                      <li>
                                                        <a className="dropdown-item" href="#">
                                                          With Tax
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a className="dropdown-item" href="#">
                                                          Without Tax
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>

                                                </div>
                                              </div>
                                              <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group">
                                                  <label>GST Tax Rate(%)</label>
                                                  <Select2
                                                    className="w-100"
                                                    data={currencyOptions}
                                                    options={{
                                                      placeholder: "None",
                                                    }}
                                                  />
                                                </div>
                                              </div>
                                              <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group">
                                                  <label>Measuring Unit</label>
                                                  <Select2
                                                    className="w-100"
                                                    data={currencyOptions}
                                                    options={{
                                                      placeholder: "None",
                                                    }}
                                                  />
                                                </div>
                                              </div>
                                              <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group">
                                                  <label>Opening Stock</label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                  />
                                                </div>
                                              </div>
                                              <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group">
                                                  <label>Service Name</label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue="new"
                                                    placeholder="Enter service name"
                                                  />
                                                </div>
                                              </div>
                                              <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group">
                                                  <label>Service Code</label>
                                                  <input
                                                    type="text"
                                                    className="form-control"

                                                    placeholder="Enter service code"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div
                                            className="tab-pane fade"
                                            id="v-pills-profile"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-profile-tab"
                                          >
                                            <div className="">
                                              <div className="row">
                                                <div className="col-lg-12 col-md-6 col-sm-12">
                                                  <div className="form-group">
                                                    <label>Item Code</label>
                                                    <div className="input-group">
                                                      <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Ex:118KJUY"

                                                        aria-describedby="basic-addon2"
                                                      />
                                                      <span className="input-group-text blue-text" id="basic-addon2">
                                                        Generate Barcode
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12 col-md-6 col-sm-12">
                                                  <div className="form-group">
                                                    <label>HSN Code</label>
                                                    <input
                                                      type="text"
                                                      className="form-control"

                                                      placeholder="18189"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-lg-12 col-md-6 col-sm-12">
                                                  <div className="form-group find-hsn-code">
                                                    <label className="blue-textt">Find HSN Code</label>
                                                  </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                  <div className="form-group">
                                                    <label>Measuring Unit</label>
                                                    <Select2
                                                      className="w-100"
                                                      data={currencyOptions}
                                                      options={{
                                                        placeholder: "GST",
                                                      }}
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-lg-12 col-md-6 col-sm-12">
                                                  <div className="form-group find-hsn-code">
                                                    <label className="blue-textt">+ Alternative Unit</label>
                                                  </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                  <div className="form-group">
                                                    <label>Opening Stock</label>
                                                    <input
                                                      type="text"
                                                      className="form-control"

                                                      placeholder="120"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                  <div className="form-group">
                                                    <label>As Of Date</label>
                                                    <div className="cal-icon cal-icon-info">
                                                      <DatePicker
                                                        className="datetimepicker form-control godown-transfer-date"
                                                        dateFormat="dd-MM-yyyy"
                                                        showTimeInput={false}
                                                      ></DatePicker>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                  <div className="form-group find-hsn-code">
                                                    <label className="blue-textt">Enable Low stock quantity warning</label>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                  <div className="form-group">
                                                    <label>Description</label>
                                                    {/* <textarea name="" id="" cols="60" rows="5" placeholder="Enter Description"></textarea> */}
                                                    <div class="form-floating">
                                                      <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                                      <label for="floatingTextarea">Comments</label>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col-lg-12 col-sm-12">
                                                  <div className="form-group mb-0 pb-0">
                                                    <label>Image</label>
                                                    <div className="form-group service-upload mb-0">
                                                      <span>
                                                        <img src={DropIcon} alt="upload" />
                                                      </span>
                                                      <h6 className="drop-browse align-center">
                                                        Drop your files here or
                                                        <span className="text-primary ms-1">browse</span>
                                                      </h6>
                                                      <p className="text-muted">Maximum size: 50MB</p>
                                                      <input
                                                        type="file"
                                                        multiple=""
                                                        id="image_sign"
                                                        onChange={handleFileChange}
                                                      />
                                                      {imageURL && (
                                                        <div>
                                                          <img
                                                            src={imageURL}
                                                            alt="Selected Image"
                                                            style={{ maxWidth: '100%' }}
                                                          />
                                                        </div>
                                                      )}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <div
                                            className="tab-pane fade"
                                            id="v-pills-messages"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-messages-tab"
                                          >
                                            <div className="row">
                                              <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group">
                                                  <label>Sales Price</label>
                                                  <div className="input-group">
                                                    <input
                                                      type="text"
                                                      className="form-control"
                                                      aria-label="Text input with dropdown button"
                                                    />
                                                    <button
                                                      className="btn btn-outline-secondary dropdown-toggle"
                                                      type="button"
                                                      data-bs-toggle="dropdown"
                                                      aria-expanded="false"
                                                    >
                                                      Dropdown
                                                    </button>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                      <li>
                                                        <a className="dropdown-item" href="#">
                                                          With Tax
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a className="dropdown-item" href="#">
                                                          Without Tax
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>

                                                </div>
                                              </div>
                                              <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group">
                                                  <label>Purchase Price</label>
                                                  <div className="input-group">
                                                    <input
                                                      type="text"
                                                      className="form-control"
                                                      aria-label="Text input with dropdown button"
                                                    />
                                                    <button
                                                      className="btn btn-outline-secondary dropdown-toggle"
                                                      type="button"
                                                      data-bs-toggle="dropdown"
                                                      aria-expanded="false"
                                                    >
                                                      Dropdown
                                                    </button>
                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                      <li>
                                                        <a className="dropdown-item" href="#">
                                                          With Tax
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a className="dropdown-item" href="#">
                                                          Without Tax
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>

                                                </div>
                                              </div>
                                              <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group">
                                                  <label>GST Tax Rate(%)</label>
                                                  <Select2
                                                    className="w-100"
                                                    data={currencyOptions}
                                                    options={{
                                                      placeholder: "None",
                                                    }}
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="tab-pane fade products-edit-edit"
                                            id="v-pills-settings"
                                            role="tabpanel"
                                            aria-labelledby="v-pills-settings-tab"
                                          >
                                            <div className="row">
                                              <div className="form-group row mb-3">
                                                <label className="col-form-label col-lg-6">
                                                  Stock Value Calculation
                                                </label>
                                                <div className="col-lg-6">
                                                  <div className="input-group">
                                                    <Select2
                                                      className="w-100"
                                                      data={currencyOptions}
                                                      options={{
                                                        placeholder: "website",
                                                      }}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-lg-12 col-md-6 col-sm-12 mb-3">
                                                <div className="form-group manage-business-enable-tds">
                                                  <div>
                                                    <p>Enable Item Batching & Expiry</p>
                                                    <p className="manage-business-e-invoicing-p">Keep track of multiple prices, expiry and manufacturing dates</p>
                                                  </div>
                                                  <span>
                                                    <label class="switch">
                                                      <input type="checkbox" />
                                                      <span class="slider round"></span>
                                                    </label>
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="col-lg-12 col-md-6 col-sm-12 mb-3">
                                                <div className="form-group manage-business-enable-tds">
                                                  <div>
                                                    <p>Enable Serial Number/IMEI</p>
                                                    <p className="manage-business-e-invoicing-p">Manage your items by Serial Number or IMEI and track them easily</p>
                                                  </div>
                                                  <span>
                                                    <label class="switch">
                                                      <input type="checkbox" />
                                                      <span class="slider round"></span>
                                                    </label>
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                                <div className="form-group">
                                                  <label>Field Name</label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="item name"
                                                    defaultValue="IMEI/Serial No"
                                                  />
                                                </div>
                                              </div>
                                              <p className="mb-3">Choose a custom field name like IMEI Number, Model Number, Part Number etc. for adding the serial numbers.</p>
                                              <div className="col-lg-12 col-md-6 col-sm-12 mb-3">
                                                <div className="form-group manage-business-enable-tds">
                                                  <p>MRP</p>
                                                  <span>
                                                    <label class="switch">
                                                      <input type="checkbox" />
                                                      <span class="slider round"></span>
                                                    </label>
                                                  </span>
                                                </div>
                                              </div>
                                              <div className="col-lg-12 col-md-6 col-sm-12 mb-3">
                                                <div className="form-group manage-business-enable-tds">
                                                  <p>Wholesale Price</p>
                                                  <span>
                                                    <label class="switch">
                                                      <input type="checkbox" />
                                                      <span class="slider round"></span>
                                                    </label>
                                                  </span>
                                                </div>
                                              </div>
                                            </div>




                                          </div>

                                        </div>
                                      </div>{" "}
                                      {/* end col*/}
                                    </div>{" "}
                                    {/* end row*/}
                                  </div>
                                </div>{" "}
                                {/* end card*/}
                              </div>{" "}

                            </div>
                          </div>



                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary waves-effect me-2"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-info waves-effect waves-light"
                            >
                              Save changes
                            </button>
                          </div>
                        </div>
                        {/* /.modal-content */}
                      </div>
                      {/* /.modal-dialog */}
                    </div>
                    {/* add product modal  */}

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
            {/* /Search Filter */}
            {/* All Invoice */}
            <div className="card invoices-tabs-card">
              <div className="invoices-main-tabs">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="invoices-tabs">
                      <ul>
                        <li>
                          <Link to="/product-list" className="active">
                            Product
                          </Link>
                        </li>
                        <li>
                          <Link to="/category">Category</Link>
                        </li>
                        <li>
                          <Link to="/units">Units</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /All Invoice */}
            {/* Table */}
            <div className="row">
              <div className="col-sm-12">
                <div className=" card-table">
                  <div className="card-body">
                    <div className="table-responsive table-hover table-striped">
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
                          record?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
                          record?.itemCategory?.toLowerCase().includes(searchText.toLowerCase())
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

        <div className={`toggle-sidebar ${show ? 'open-filter' : ''}`}>
          <div className="sidebar-layout-filter">
            <div className="sidebar-header">
              <h5>Filter</h5>
              <Link to="#" className="sidebar-closes" onClick={() => setShow(!show)}>
                <i className="fa-regular fa-circle-xmark" />
              </Link>
            </div>
            <div className="sidebar-body">
              <form action="#" autoComplete="off">
                {/* Customer */}
                <div className="accordion" id="accordionMain1">
                  <div className="card-header-new" id="headingOne">
                    <h6 className="filter-title">
                      <Link
                        to="#"
                        className="w-100"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Customer
                        <span className="float-end">
                          <i className="fa-solid fa-chevron-down" />
                        </span>
                      </Link>
                    </h6>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="card-body-chat">
                      <div className="row">
                        <div className="col-md-12">
                          <div id="checkBoxes1">
                            <div className="form-custom">
                              <input
                                type="text"
                                className="form-control"
                                id="member_search1"
                                placeholder="Search here"
                              />
                              <span>
                                <img
                                  src={search}
                                  alt="img"
                                />
                              </span>
                            </div>
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Brian Johnson
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Russell Copeland
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Greg Lynch
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> John Blair
                              </label>
                              {/* View All */}
                              <div className="view-content">
                                <div className="viewall-One">
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Barbara Moore
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Hendry Evan
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Richard Miles
                                  </label>
                                </div>
                                <div className="view-all">
                                  <Link to="#" className="viewall-button-One">
                                    <span className="me-2">View All</span>
                                    <span>
                                      <i className="fa fa-circle-chevron-down" />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              {/* /View All */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Customer */}
                {/* Select Date */}
                <div className="accordion" id="accordionMain2">
                  <div className="card-header-new" id="headingTwo">
                    <h6 className="filter-title">
                      <Link
                        to="#"
                        className="w-100 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        Select Date
                        <span className="float-end">
                          <i className="fa-solid fa-chevron-down" />
                        </span>
                      </Link>
                    </h6>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="card-body-chat">
                      <div className="form-group">
                        <label className="form-control-label">From</label>
                        <div className="cal-icon">
                          <input
                            type="email"
                            className="form-control datetimepicker"
                            placeholder="DD-MM-YYYY"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-control-label">To</label>
                        <div className="cal-icon">
                          <input
                            type="email"
                            className="form-control datetimepicker"
                            placeholder="DD-MM-YYYY"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Select Date */}
                {/* By Status */}
                <div className="accordion" id="accordionMain3">
                  <div className="card-header-new" id="headingThree">
                    <h6 className="filter-title">
                      <Link
                        to="#"
                        className="w-100 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        By Status
                        <span className="float-end">
                          <i className="fa-solid fa-chevron-down" />
                        </span>
                      </Link>
                    </h6>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample3"
                  >
                    <div className="card-body-chat">
                      <div id="checkBoxes2">
                        <div className="form-custom">
                          <input
                            type="text"
                            className="form-control"
                            id="member_search2"
                            placeholder="Search here"
                          />
                          <span>
                            <img src={search} alt="img" />
                          </span>
                        </div>
                        <div className="selectBox-cont">
                          <label className="custom_check w-100">
                            <input type="checkbox" name="bystatus" />
                            <span className="checkmark" /> All Invoices
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="bystatus" />
                            <span className="checkmark" /> Paid
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="bystatus" />
                            <span className="checkmark" /> Overdue
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="bystatus" />
                            <span className="checkmark" /> Draft
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="bystatus" />
                            <span className="checkmark" /> Recurring
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="bystatus" />
                            <span className="checkmark" /> Cancelled
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /By Status */}
                {/* Category */}
                <div className="accordion accordion-last" id="accordionMain4">
                  <div className="card-header-new" id="headingFour">
                    <h6 className="filter-title">
                      <Link
                        to="#"
                        className="w-100 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseFour"
                      >
                        Category
                        <span className="float-end">
                          <i className="fa-solid fa-chevron-down" />
                        </span>
                      </Link>
                    </h6>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample4"
                  >
                    <div className="card-body-chat">
                      <div id="checkBoxes3">
                        <div className="selectBox-cont">
                          <label className="custom_check w-100">
                            <input type="checkbox" name="category" />
                            <span className="checkmark" /> Advertising
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="category" />
                            <span className="checkmark" /> Food
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="category" />
                            <span className="checkmark" /> Repairs
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="category" />
                            <span className="checkmark" /> Software
                          </label>
                          {/* View All */}
                          <div className="view-content">
                            <div className="viewall-Two">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Stationary
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Medical
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Designing
                              </label>
                            </div>
                            <div className="view-all">
                              <Link to="#" className="viewall-button-Two">
                                <span className="me-2">View All</span>
                                <span>
                                  <i className="fa fa-circle-chevron-down" />
                                </span>
                              </Link>
                            </div>
                          </div>
                          {/* /View All */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Category */}
                <button
                  type="submit"
                  className="d-inline-flex align-items-center justify-content-center btn w-100 btn-primary"
                >
                  <span>
                    <img
                      src={FilterChart}
                      className="me-2"
                      alt="Generate report"
                    />
                  </span>
                  Generate report
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="modal custom-modal fade" id="delete_modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Products / Services</h3>
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

export default ProductList;
