import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import FeatherIcon from "feather-icons-react";
import { Blog1, Blog2, Blog3, Blog4, Blog5, Blog6, img11, img12, img2, img4, img5, img6 } from "../_components/imagepath";
import AddVendor from "../vendors/addVendor";

const AllBlogs = () => {
    
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content all-blog container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>Blog</h5>
                <div className="list-btn">
                  <ul className="filter-list">
                    <li>
                      <Link className="btn btn-filters w-auto popup-toggle"
                      onClick={() => setShow(!show)}
                      >
                        <span className="me-2">
                          {/* <i className="fe fe-filter" /> */}
                          <FeatherIcon icon="filter"/>
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
                      <Link className="btn-filters" to="#">
                        <span>
                          {/* <i className="fe fe-grid" /> */}
                          <FeatherIcon icon="grid"/>
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="active btn-filters"
                        to="#"
                      >
                        <span>
                          {/* <i className="fe fe-list" /> */}
                          <FeatherIcon icon="list"/>
                        </span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="btn btn-primary" to="/add-blog">
                        <i
                          className="fa fa-plus-circle me-2"
                          aria-hidden="true"
                        />
                        Add BLog
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
            {/* Blogs*/}
            <div className="card invoices-tabs-card">
              <div className="invoices-main-tabs">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="invoices-tabs">
                      <ul>
                        <li>
                          <Link to="/all-blogs" className="active">
                            Active Blog
                          </Link>
                        </li>
                        <li>
                          <Link to="/inactive-blog">Inactive Blog</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Blogs*/}
            <div className="row">
              {/* Blog Post */}
              <div className="col-md-6 col-xl-4 col-sm-12 d-md-flex d-sm-block">
                <div className="blog grid-blog flex-fill">
                  <div className="blog-image">
                    <Link to="#">
                      <img
                        className="img-fluid"
                        src={Blog1}
                        alt="Post Image"
                      />
                    </Link>
                    <div className="blog-views">
                      <p>31</p>
                      <span>AUG</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-group d-flex align-items-center">
                          <div className="post-widget">
                            <span>Advertising</span>
                          </div>
                          <div className="post-author">
                            <Link to="/profile">
                              <img
                                src={img12}
                                alt="Post Author"
                              />
                              <span>
                                <span className="post-title">
                                  Alex Campbell
                                </span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="#">
                        Lorem Ipsum es simplemente el texto de relleno de las
                        imprentas y archivos de texto.
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                    <div className="edit-options">
                      <div className="edit-delete-btn">
                        <Link to="#" className="text-muted">
                          <FeatherIcon icon="edit" className="me-1"/> Edit
                        </Link>
                        <Link
                          to="#"
                          className="text-muted"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                        >
                          <FeatherIcon icon="trash-2" className="me-1"/>Delete
                        </Link>
                      </div>
                      <div className="text-end inactive-style">
                        <Link
                          to="#"
                          className="text-muted"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteNotConfirmModal"
                        >
                          <FeatherIcon icon="alert-circle" className="me-1"/>Active
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Blog Post */}
              {/* Blog Post */}
              <div className="col-md-6 col-xl-4 col-sm-12 d-md-flex d-sm-block">
                <div className="blog grid-blog flex-fill">
                  <div className="blog-image">
                    <Link to="#">
                      <img
                        className="img-fluid"
                        src={Blog2}
                        alt="Post Image"
                      />
                    </Link>
                    <div className="blog-views">
                      <p>30</p>
                      <span>May</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-group d-flex align-items-center">
                          <div className="post-widget">
                            <span>Advertising</span>
                          </div>
                          <div className="post-author">
                            <Link to="/profile">
                              <img
                                src={img4}
                                alt="Post Author"
                              />
                              <span>
                                <span className="post-title">
                                  Barbara Moore
                                </span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="#">
                        Lorem Ipsum es simplemente el texto de relleno de las
                        imprentas y archivos de texto.
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                    <div className="edit-options">
                      <div className="edit-delete-btn">
                        <Link to="#" className="text-muted">
                          <FeatherIcon icon="edit" className="me-1"/> Edit
                        </Link>
                        <Link
                          to="#"
                          className="text-muted"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                        >
                          <FeatherIcon icon="trash-2" className="me-1"/>Delete
                        </Link>
                      </div>
                      <div className="text-end inactive-style">
                        <Link
                          to="#"
                          className="text-muted"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteNotConfirmModal"
                        >
                          <FeatherIcon icon="alert-circle" className="me-1"/>Active
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Blog Post */}
              {/* Blog Post */}
              <div className="col-md-6 col-xl-4 col-sm-12 d-md-flex d-sm-block">
                <div className="blog grid-blog flex-fill">
                  <div className="blog-image">
                    <Link to="#">
                      <img
                        className="img-fluid"
                        src={Blog3}
                        alt="Post Image"
                      />
                    </Link>
                    <div className="blog-views">
                      <p>29</p>
                      <span>Jan</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-group d-flex align-items-center">
                          <div className="post-widget">
                            <span>Advertising</span>
                          </div>
                          <div className="post-author">
                            <Link to="/profile">
                              <img
                                src={img2}
                                alt="Post Author"
                              />
                              <span>
                                <span className="post-title">
                                  Brian Johnson
                                </span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="#">
                        Lorem Ipsum es simplemente el texto de relleno de las
                        imprentas y archivos de texto.
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                    <div className="edit-options">
                      <div className="edit-delete-btn">
                        <Link to="#" className="text-muted">
                          <FeatherIcon icon="edit" className="me-1"/> Edit
                        </Link>
                        <Link
                          to="#"
                          className="text-muted"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                        >
                          <FeatherIcon icon="trash-2" className="me-1"/>Delete
                        </Link>
                      </div>
                      <div className="text-end inactive-style">
                        <Link
                          to="#"
                          className="text-muted"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteNotConfirmModal"
                        >
                          <FeatherIcon icon="alert-circle" className="me-1"/>Active
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Blog Post */}
              {/* Blog Post */}
              <div className="col-md-6 col-xl-4 col-sm-12 d-md-flex d-sm-block">
                <div className="blog grid-blog flex-fill">
                  <div className="blog-image">
                    <Link to="#">
                      <img
                        className="img-fluid"
                        src={Blog4}
                        alt="Post Image"
                      />
                    </Link>
                    <div className="blog-views">
                      <p>10</p>
                      <span>AUG</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-group d-flex align-items-center">
                          <div className="post-widget">
                            <span>Advertising</span>
                          </div>
                          <div className="post-author">
                            <Link to="/profile">
                              <img
                                src={img5}
                                alt="Post Author"
                              />
                              <span>
                                <span className="post-title">Greg Lynch</span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="#">
                        Lorem Ipsum es simplemente el texto de relleno de las
                        imprentas y archivos de texto.
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                    <div className="edit-options">
                      <div className="edit-delete-btn">
                        <Link to="#" className="text-muted">
                          <FeatherIcon icon="edit" className="me-1"/> Edit
                        </Link>
                        <Link
                          to="#"
                          className="text-muted"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                        >
                          <FeatherIcon icon="trash-2" className="me-1"/>Delete
                        </Link>
                      </div>
                      <div className="text-end inactive-style">
                        <Link
                          to="#"
                          className="text-muted"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteNotConfirmModal"
                        >
                          <FeatherIcon icon="alert-circle" className="me-1"/>Active
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Blog Post */}
              {/* Blog Post */}
              <div className="col-md-6 col-xl-4 col-sm-12 d-md-flex d-sm-block">
                <div className="blog grid-blog flex-fill">
                  <div className="blog-image">
                    <Link to="#">
                      <img
                        className="img-fluid"
                        src={Blog5}
                        alt="Post Image"
                      />
                    </Link>
                    <div className="blog-views">
                      <p>11</p>
                      <span>FEB</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-group d-flex align-items-center">
                          <div className="post-widget">
                            <span>Advertising</span>
                          </div>
                          <div className="post-author">
                            <Link to="/profile">
                              <img
                                src={img11}
                                alt="Post Author"
                              />
                              <span>
                                <span className="post-title">
                                  Jennifer Floyd
                                </span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="#">
                        Lorem Ipsum es simplemente el texto de relleno de las
                        imprentas y archivos de texto.
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                    <div className="edit-options">
                      <div className="edit-delete-btn">
                        <Link to="#" className="text-muted">
                          <FeatherIcon icon="edit" className="me-1"/> Edit
                        </Link>
                        <Link
                          to="#"
                          className="text-muted"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                        >
                          <FeatherIcon icon="trash-2" className="me-1"/>Delete
                        </Link>
                      </div>
                      <div className="text-end inactive-style">
                        <Link
                          to="#"
                          className="text-muted"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteNotConfirmModal"
                        >
                          <FeatherIcon icon="alert-circle" className="me-1"/>Active
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Blog Post */}
              {/* Blog Post */}
              <div className="col-md-6 col-xl-4 col-sm-12 d-md-flex d-sm-block">
                <div className="blog grid-blog flex-fill">
                  <div className="blog-image">
                    <Link to="#">
                      <img
                        className="img-fluid"
                        src={Blog6}
                        alt="Post Image"
                      />
                    </Link>
                    <div className="blog-views">
                      <p>12</p>
                      <span>JUN</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-group d-flex align-items-center">
                          <div className="post-widget">
                            <span>Advertising</span>
                          </div>
                          <div className="post-author">
                            <Link to="/profile">
                              <img
                                src={img6}
                                alt="Post Author"
                              />
                              <span>
                                <span className="post-title">
                                  Karlene Chaidez{" "}
                                </span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="#">
                        Lorem Ipsum es simplemente el texto de relleno de las
                        imprentas y archivos de texto.
                      </Link>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur em adipiscing
                      elit, sed do eiusmod tempor.
                    </p>
                    <div className="edit-options">
                      <div className="edit-delete-btn">
                        <Link to="#" className="text-muted">
                          <FeatherIcon icon="edit" className="me-1"/> Edit
                        </Link>
                        <Link
                          to="#"
                          className="text-muted"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteModal"
                        >
                          <FeatherIcon icon="trash-2" className="me-1"/>Delete
                        </Link>
                      </div>
                      <div className="text-end inactive-style">
                        <Link
                          to="#"
                          className="text-muted"
                          data-bs-toggle="modal"
                          data-bs-target="#deleteNotConfirmModal"
                        >
                          <FeatherIcon icon="alert-circle" className="me-1"/>Active
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Blog Post */}
            </div>
            {/* Pagination */}
            <div className="row ">
              <div className="col-md-12">
                <div className="pagination-tab  d-flex justify-content-center">
                  <ul className="pagination mb-0">
                    <li className="page-item disabled">
                      <Link className="page-link" to="#" tabIndex={-1}>
                        <i className="feather-chevron-left mr-2" />
                        Previous
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" to="#">
                        2 <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        4
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        Next
                        <i className="feather-chevron-right ml-2" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Pagination */}
          </div>
        </div>

        <AddVendor 
          setShow={setShow}
          show={show}
        />

      </div>
    </>
  );
};

export default AllBlogs;
