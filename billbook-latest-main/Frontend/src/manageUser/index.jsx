import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { img10 } from "../_components/imagepath";
import Select2 from "react-select2-wrapper";
import FeatherIcon from "feather-icons-react";
import SettingsSideBar from "../settings/SettingsSideBar";


const AddUser = () => {
  
  const [menu, setMenu] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  const [passwordType1, setPasswordType1] = useState("password");
  const [passwordInput1, setPasswordInput1] = useState("");

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  const [role, setRole] = useState([
    { id: 1, text: "Select Role" },
    { id: 2, text: "Role 1" },
    { id: 3, text: "Role 2" },
  ]);

  const [status, setStatus] = useState([
    { id: 1, text: "Select Status" },
    { id: 2, text: "Active" },
    { id: 3, text: "Inactive" },
  ]);

  
  const handlePasswordChange =(evnt)=>{
      setPasswordInput(evnt.target.value);
  }
  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }
  
  const handlePasswordChange1 =(evnt)=>{
      setPasswordInput1(evnt.target.value);
  }
  const togglePassword1 =()=>{
    if(passwordType==="password")
    {
     setPasswordType1("text")
     return;
    }
    setPasswordType1("password")
  }

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        {/* <Sidebar /> */}
        <SettingsSideBar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="content-page-header">
              <h5>Add User</h5>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card-body">
                  <div className="form-group-item">
                    <h5 className="form-title">Profile Picture</h5>
                    <div className="profile-picture">
                      <div className="upload-profile">
                        <div className="profile-img">
                          <img
                            id="blah"
                            className="avatar"
                            src={img10}
                            alt=""
                          />
                        </div>
                        <div className="add-profile">
                          <h5>Upload a New Photo</h5>
                          <span>Profile-pic.jpg</span>
                        </div>
                      </div>
                      <div className="img-upload">
                        <Link className="btn btn-primary me-2">Upload</Link>
                        <Link className="btn btn-remove">Remove</Link>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter First Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>User Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter User Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Phone Number"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Role</label>
                          <Select2
                            // className="w-100"
                            data={role}
                            options={{
                              placeholder: "Select Role",
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="pass-group manage-user" id="passwordInput1">
                          <div className="form-group">
                            <label>Password</label>
                            <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" className="form-control" placeholder="Password" />
                     <span className="toggle-password" onClick={togglePassword}>
                     { passwordType==="password"? <FeatherIcon icon="eye"/>:<FeatherIcon icon="eye-off"/> }
                     </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="pass-group manage-user" id="passwordInput2">
                          <div className="form-group">
                            <label>Confirm Password</label>
                            <input type={passwordType1} onChange={handlePasswordChange1} value={passwordInput1} name="password" className="form-control" placeholder="Password" />
                     <span className="toggle-password" onClick={togglePassword1}>
                     { passwordType1==="password"? <FeatherIcon icon="eye"/>:<FeatherIcon icon="eye-off"/> }
                     </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-group">
                          <label>Status</label>
                          <Select2
                            // className="w-100"
                            data={status}
                            options={{
                              placeholder: "Select Status",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <button
                      type="reset"
                      className="btn btn-primary cancel me-2"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save Changes
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

export default AddUser;
