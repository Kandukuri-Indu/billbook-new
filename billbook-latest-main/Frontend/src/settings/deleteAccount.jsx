import React, { useState } from "react";
import SettingsSidebar from "../layouts/SettingsSidebar";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";

const DeleteAccounts = () => {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
      <Header onMenuClick={(value) => toggleMobileMenu()} />
      <Sidebar />

      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="content-page-header">
              <h5>Settings</h5>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-xl-3 col-md-4">
              <SettingsSidebar />
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Delete your account</h5>
                </div>
                <div className="card-body">
                  {/* Form */}
                  <form>
                    <p className="card-text">
                      When you delete your account, you lose access to Kanakku
                      account services, and we permanently delete your personal
                      data.
                    </p>
                    <p className="card-text">
                      Are you sure you want to close your account?
                    </p>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="delete_account"
                        />
                        <label
                          className="custom-control-label text-danger"
                          htmlFor="delete_account"
                        >
                          Confirm that I want to delete my account.
                        </label>
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </form>
                  {/* /Form */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccounts;
