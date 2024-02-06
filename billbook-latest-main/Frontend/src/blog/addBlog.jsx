import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import FeatherIcon from "feather-icons-react";
import Select2 from "react-select2-wrapper";
import TextEditor from "../products/editor";
import { DropIcon } from "../_components/imagepath";

const AddBlog = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const [category, setcategory] = useState([
    { id: 1, text: "Select Category" },
    { id: 2, text: "Category 1" },
    { id: 3, text: "Category 2" },
    { id: 4, text: "Category 3" },
  ]);

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="content-page-header">
              <h5>Add Blog</h5>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card-body">
                  <div className="form-group-item border-0 pb-0">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>
                            Title <span className="text-danger">*</span>
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
                          <label>Category</label>
                          <Select2
                            className="w-100"
                            data={category}
                            options={{
                            placeholder: "Select Category",
                            }}
                            />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Parent Category</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Parent Category"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group" id="summernote_container">
                          <label className="form-control-label">
                            Description
                          </label>
                          {/* <textarea
                            className="summernote form-control"
                            placeholder="Type your message"
                            defaultValue={""}
                          /> */}
                          <TextEditor/>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label>Image</label>
                          <div className="form-group service-upload mb-0">
                            <span>
                              <img
                                src={DropIcon}
                                alt="upload"
                              />
                            </span>
                            <h6 className="drop-browse align-center">
                              Drop your files here or
                              <span className="text-primary ms-1">browse</span>
                            </h6>
                            <p className="text-muted">Maximum size: 50MB</p>
                            <input type="file" multiple="" id="image_sign" />
                            <div id="frames" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-end mt-4">
                    <button
                      type="reset"
                      className="btn btn-primary cancel me-2"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Add Post
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

export default AddBlog;
