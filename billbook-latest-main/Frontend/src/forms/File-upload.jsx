import React, { useState } from "react";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { DownloadImg } from "../_components/imagepath";

const Fileupload = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [file1, setFile1] = useState();

  function handleChange1(e) {
    console.log(e.target.files);
    setFile1(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
      <Header onMenuClick={(value) => toggleMobileMenu()} />
      <Sidebar />
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>File Upload</h5>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              {/* Drag Card */}
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Single File Upload</h5>
                  </div>
                  <div className="card-body">
                    <div
                      className="custom-file-container"
                      data-upload-id="myFirstImage"
                    >
                      <label>
                        Upload (Single File){" "}
                        <a
                          href="#"
                          className="custom-file-container__image-clear"
                          title="Clear Image"
                        >
                          x
                        </a>
                      </label>
                      <label className="custom-file-container__custom-file">
                        <input
                          type="file"
                          className="custom-file-container__custom-file__custom-file-input"
                          accept="image/*"
                          onChange={handleChange}
                        />
                        <input
                          type="hidden"
                          name="MAX_FILE_SIZE"
                          defaultValue={10485760}
                        />

                        <span className="custom-file-container__custom-file__custom-file-control">
                          <span className="custom-file-container__custom-file__custom-file-control_button">
                            Browser
                          </span>
                        </span>
                        <br />
                      </label>

                      <div className="custom-file-container__image-preview"
                      style={{ backgroundImage: "url(" + DownloadImg + ")" }}
                      >
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">Multiple File Upload</h5>
                  </div>
                  <div className="card-body">
                    <div
                      className="custom-file-container"
                      data-upload-id="mySecondImage"
                    >
                      <label>
                        Upload (Allow Multiple){" "}
                        <a
                          href="#"
                          className="custom-file-container__image-clear"
                          title="Clear Image"
                        >
                          x
                        </a>
                      </label>
                      <label className="custom-file-container__custom-file">
                        <input
                          type="file"
                          className="custom-file-container__custom-file__custom-file-input"
                          onChange={handleChange1}
                          multiple
                        />
                        {/* <input
                  type="hidden"
                  name="MAX_FILE_SIZE"
                  defaultValue={10485760} 
                /> */}

                        <span className="custom-file-container__custom-file__custom-file-control">
                          <span className="custom-file-container__custom-file__custom-file-control_button">
                            Browser
                          </span>
                        </span>
                      </label>

                      <div className="custom-file-container__image-preview"
                      style={{ backgroundImage: "url(" + DownloadImg + ")" }}
                      >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Drag Card */}
            </div>
          </div>
        </div>
    </div>
  );
};

export default Fileupload;
