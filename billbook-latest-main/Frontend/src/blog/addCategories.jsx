import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import ReactTagsInput from "./tagInput";
import InputTag from "./inputTag";

const AddCategories = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="content-page-header">
              <h5>Add Category</h5>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card-body">
                  <div className="form-group-item border-0 pb-0">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>
                            Category Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Title"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>
                            Slug <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Enter Title"
                          />
                          <span className="optional">
                            (If you leave it empty, it will be generated
                            automatically.)
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>
                            Description (Meta Tag){" "}
                            <span className="star-red">*</span>
                          </label>
                          {/* <input
                            type="text"
                            data-role="tagsinput"
                            className="input-tags form-control"
                            placeholder=""
                            name="services"
                            defaultValue="Description Tag"
                            id="services"
                          /> */}
                          <ReactTagsInput/>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>
                            Keywords (Meta Tag){" "}
                            <span className="star-red">*</span>
                          </label>
                          {/* <input
                            type="text"
                            data-role="tagsinput"
                            className="input-tags form-control"
                            placeholder=""
                            name="services"
                            defaultValue="Keywords Tag"
                            id="services2"
                          /> */}
                          <InputTag/>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>
                            Order <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Title"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group mb-0 mt-5">
                          <div className="check-mark-status d-flex justify-content-between">
                            <h6 className="label-text">Status</h6>
                            <div className="status-toggle">
                              <input
                                id="rating_1"
                                className="check"
                                type="checkbox"
                                defaultChecked="true"
                              />
                              <label
                                htmlFor="rating_1"
                                className="checktoggle checkbox-bg"
                              >
                                checkbox
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <button
                      type="submit"
                      className="btn btn-primary cancel me-2"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Add Category
                    </button>
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

export default AddCategories;
