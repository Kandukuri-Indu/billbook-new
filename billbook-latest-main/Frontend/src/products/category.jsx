import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import FeatherIcon from "feather-icons-react";
//import Data from "../assets/jsons/category";
import "../_components/antd.css";
import { Input, Pagination, Space, Table } from "antd";
import {
  onShowSizeChange,
  itemRender,
} from "../_components/paginationfunction";
import AddVendor from "../vendors/addVendor";
import Select2 from "react-select2-wrapper";
import { DropIcon } from "../_components/imagepath";
import axios from "axios";
import Swal from "sweetalert2";

const Category = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);
  // const [dataSource, setDatasource] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    parentCategory: "",
    image: null,
  });
  const [datasource, setDatasource] = useState([]);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const [category, setCategory] = useState([
    { id: 1, text: "None" },
    { id: 2, text: "Coupons" },
    { id: 3, text: "News" },
    { id: 4, text: "Plugins" },
    { id: 4, text: "Themes" },
    { id: 4, text: "Tutorial" },
  ]);

  //
  //const datasource = data;
  // console.log(datasource);

  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/addCategory/categories")
      .then((response) => {
        const dataWithIndex = response.data.map((item, index) => ({
          ...item,
          Id: index + 1,
        }));

        console.log(dataWithIndex);
        setDatasource(dataWithIndex);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hello", formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/addCategory/categories",
        formData
      );

      console.log("Data submitted successfully:", response.data);

      // Update the state with the new data
      setDatasource([...datasource, response.data]);

      // Close the modal
      setShow(false);

      // Show SweetAlert success notification
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Category added successfully.",
      });
    } catch (error) {
      console.error("Error submitting data:", error);

      // Show SweetAlert error notification
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "There was an error adding the category. Please try again.",
      });
    }
  };

  const [searchText, setSearchText] = useState("");
  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleReset = () => {
    setSearchText("");
  };
  const columns = [
    {
      title: "No.",
      dataIndex: "Id",
      sorter: (a, b) => a.Id.length - b.Id.length,
    },
    {
      title: "Category Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Category Image",
      dataIndex: "image",
      render: (text, record) => (
        <h2 className="table-avatar">
          {record.image && (
            <img
              className="avatar-img rounded"
              width={30}
              height={30}
              src={record.image.url}
              alt="Category Image"
            />
          )}
        </h2>
      ),
      sorter: (a, b) => a.image.url.length - b.image.url.length,
    },
    {
      title: "Total Products",
      dataIndex: "Total",
      sorter: (a, b) => a.Total.length - b.Total.length,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (text, record) => (
        <div className="d-flex align-items-center">
          <Link
            className=" btn-action-icon me-2"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit_category"
          >
            <i className="fe fe-edit">
              <FeatherIcon icon="edit" />
            </i>
          </Link>
          <Link
            className=" btn-action-icon"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete_modal"
          >
            <i className="fe fe-trash-2">
              <FeatherIcon icon="trash-2" />
            </i>
          </Link>
        </div>
      ),
      sorter: (a, b) => a.Action.length - b.Action.length,
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
                <h5>Category </h5>
                <Input
                  className="searh-input"
                  placeholder="Search by name or phone number"
                  value={searchText}
                  onChange={(e) => handleSearch(e.target.value)}
                  style={{
                    width: 300,
                    marginBottom: 0,
                    padding: 6,
                    border: "none",
                    boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)",
                  }}
                />
                <Space>
                  <button
                    onClick={handleReset}
                    size="small"
                    style={{
                      width: 90, padding: 7, background: "#ed2020", border: "none", boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)", borderRadius: 7, color: "#fff", 
                      position: "relative",
                      left: "-30px",
                    }}
                  >
                    Reset
                  </button>
                </Space>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <Link
                        className="btn btn-filters w-auto popup-toggle"
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
                        </span>
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
                    </li>
                    <li>
                      <Link className="btn-filters me-2" to="#">
                        <span>
                          {/* <i className="fe fe-printer" /> */}
                          <FeatherIcon icon="printer" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="btn btn-primary"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add_category"
                      >
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        Add Category
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
            {/* /Search Filter */}
            {/* All Invoice */}
            <div className="card invoices-tabs-card">
              <div className="invoices-main-tabs">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="invoices-tabs">
                      <ul>
                        <li>
                          <Link to="/product-list">Product</Link>
                        </li>
                        <li>
                          <Link to="/category" className="active">
                            Category
                          </Link>
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
                  <div className="card-body category">
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
                        dataSource={datasource.filter(
                          (record) =>
                            record?.name
                              ?.toLowerCase()
                              .includes(searchText.toLowerCase()) ||
                            record?.Total?.includes(searchText)
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

        <AddVendor setShow={setShow} show={show} />

        <div
          className="modal custom-modal fade"
          id="add_category"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Add Category</h4>
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
                  <div className="col-md-12">
                    <div className="card-body">
                      <div className="form-group-item border-0 pb-0 mb-0">
                        <div className="row">
                          <div className="col-lg-12 col-sm-12">
                            <div className="form-group">
                              <label>
                                Name <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Title"
                                value={formData.name}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    name: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-sm-12">
                            <div className="form-group">
                              <label>Slug</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Slug"
                                value={formData.slug}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    slug: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-sm-12">
                            <div className="form-group">
                              <label>Parent Category</label>
                              <Select2
                                // className="w-100"
                                data={category}
                                options={{
                                  placeholder: "None",
                                }}
                                value={formData.parentCategory}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    parentCategory: e.target.value,
                                  })
                                }
                              />
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
                                  <span className="text-primary ms-1">
                                    browse
                                  </span>
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
                                      style={{ maxWidth: "100%" }}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
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

        <div
          className="modal custom-modal fade"
          id="edit_category"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header border-0 pb-0">
                <div className="form-header modal-header-title text-start mb-0">
                  <h4 className="mb-0">Edit Category</h4>
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
                  <div className="col-md-12">
                    <div className="card-body">
                      <div className="form-group-item border-0 pb-0 mb-0">
                        <div className="row">
                          <div className="col-lg-12 col-sm-12">
                            <div className="form-group">
                              <label>
                                Name <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="Advertising"
                                placeholder="Enter Title"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-sm-12">
                            <div className="form-group">
                              <label>Slug</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="advertising"
                                placeholder="Enter Slug"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-sm-12">
                            <div className="form-group">
                              <label>Parent Category</label>
                              <Select2
                                // className="w-100"
                                data={category}
                                options={{
                                  placeholder: "None",
                                }}
                              />
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
                                  <span className="text-primary ms-1">
                                    browse
                                  </span>
                                </h6>
                                <p className="text-muted">Maximum size: 50MB</p>
                                <input
                                  type="file"
                                  multiple=""
                                  id="image_sign"
                                />
                                <div id="frames" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

        <div
          className="modal custom-modal fade"
          id="delete_modal"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-body">
                <div className="form-header">
                  <h3>Delete Category</h3>
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
export default Category;
