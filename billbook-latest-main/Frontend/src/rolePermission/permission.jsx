import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";

const Permission = () => {
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
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>Permission</h5>
              </div>
              <div className="role-testing d-flex align-items-center justify-content-between">
                <h6>
                  Role Name:<span className="ms-1">Testings</span>
                </h6>
                <p>
                  <label className="custom_check">
                    <input type="checkbox" name="invoice" />
                    <span className="checkmark" />
                  </label>
                  Allow All Modules
                </p>
              </div>
            </div>
            {/* /Page Header */}
            {/* Table */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card-table">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-stripped table-hover">
                        <thead className="thead-light">
                          <tr>
                            <th>Modules</th>
                            <th>Sub Modules</th>
                            <th>Create</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>View</th>
                            <th>Allow all</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="role-data">Dashboard</td>
                            <td>Dashboard</td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="role-data">Appointments</td>
                            <td>Appointments</td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="role-data">Specialization</td>
                            <td>Specialization</td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="role-data">Sub Categories</td>
                            <td>Sub Categories</td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="role-data">Clients</td>
                            <td>Clients</td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="role-data">Payment Request</td>
                            <td>Payment Request</td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="role-data">Reviews</td>
                            <td>Reviews</td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="role-data">Subscription</td>
                            <td>Subscription</td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="role-data">Settings</td>
                            <td>Settings</td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                          </tr>
                          <tr>
                            <td className="role-data">Email Templates</td>
                            <td>Email Templates</td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                            <td>
                              <label className="custom_check">
                                <input type="checkbox" name="invoice" />
                                <span className="checkmark" />
                              </label>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Table */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary cancel me-2">
                Back
              </button>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Permission;
